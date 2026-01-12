import { CheckCircle, Sparkles, Smile, AlertCircle, Scissors, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Opšti Pregledi",
      description: "Sveobuhvatni stomatološki pregledi i čišćenja za održavanje optimalnog oralnog zdravlja.",
    },
    {
      icon: Sparkles,
      title: "Izbjeljivanje Zuba",
      description: "Profesionalni tretmani izbjeljivanja za svjetliji, samopouzdaniji osmijeh.",
    },
    {
      icon: Smile,
      title: "Zubni Implanti",
      description: "Trajne solucije za zamjenu zuba koje izgledaju i osjećaju se prirodno.",
    },
    {
      icon: AlertCircle,
      title: "Hitna Pomoć",
      description: "Brzi tretman za stomatološke hitne slučajeve, uključujući termine istog dana.",
    },
    {
      icon: Scissors,
      title: "Hirurške Intervencije",
      description: "Stručni hirurški zahvati uključujući vađenje zuba, operacije impaktiranih zuba i koštane augmentacije.",
    },
    {
      icon: Crown,
      title: "Zubna Protetika",
      description: "Visokokvalitetne cirkon i metalokeramičke krunice za savršenu estetiku i dugotrajnost.",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Naše Usluge
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Sveobuhvatna stomatološka njega prilagođena vašim potrebama
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4 h-full flex flex-col">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                      <h3 className="text-base md:text-xl font-semibold">{service.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground flex-grow">{service.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
