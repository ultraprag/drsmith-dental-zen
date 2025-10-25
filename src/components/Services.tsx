import { CheckCircle, Sparkles, Smile, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "General Check-ups",
      description: "Comprehensive dental examinations and cleanings to maintain optimal oral health.",
    },
    {
      icon: Sparkles,
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile.",
    },
    {
      icon: Smile,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look and feel natural.",
    },
    {
      icon: AlertCircle,
      title: "Emergency Care",
      description: "Prompt treatment for dental emergencies, including same-day appointments.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs
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
