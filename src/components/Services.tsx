import { CheckCircle, Sparkles, Smile, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Opšti Pregledi",
      description: "Sveobuhvatni stomatološki pregledi i čišćenja za održavanje optimalne oralnog zdravlja.",
    },
    {
      icon: Sparkles,
      title: "Izbeljivanje Zuba",
      description: "Profesionalni tretmani izbeljivanja za svetliji, samopouzdaniji osmeh.",
    },
    {
      icon: Smile,
      title: "Zubni Implanti",
      description: "Trajne solucije za zamenu zuba koje izgledaju i osećaju se prirodno.",
    },
    {
      icon: AlertCircle,
      title: "Hitna Pomoć",
      description: "Brzi tretman za stomatološke hitne slučajeve, uključujući termine istog dana.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Naše Usluge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sveobuhvatna stomatološka nega prilagođena vašim potrebama
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
