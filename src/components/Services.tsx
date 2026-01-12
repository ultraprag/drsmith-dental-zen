import { CheckCircle, Sparkles, Smile, AlertCircle, Scissors, Crown, Stethoscope, ScanLine, Box, Syringe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Opšti Pregledi",
      description: "Sveobuhvatni stomatološki pregledi i čišćenja za održavanje optimalnog oralnog zdravlja.",
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
    {
      icon: Sparkles,
      title: "Oralna Higijena i Izbjeljivanje Zuba",
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
      icon: Stethoscope,
      title: "Dijagnostika",
      description: "Detaljna dijagnostička procjena za precizno utvrđivanje stanja zuba i planiranje tretmana.",
    },
    {
      icon: ScanLine,
      title: "OPT Snimak",
      description: "Panoramski rendgenski snimak za kompletni pregled vilice, zuba i okolnih struktura.",
    },
    {
      icon: Box,
      title: "3D Snimanje",
      description: "Napredna CBCT tehnologija za trodimenzionalni prikaz i precizno planiranje implantata i operacija.",
    },
    {
      icon: Syringe,
      title: "Apikotomija",
      description: "Hirurški zahvat uklanjanja vrha korijena zuba za očuvanje zuba i eliminaciju infekcije.",
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4 h-full flex flex-col">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
