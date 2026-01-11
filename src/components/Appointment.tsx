import { Phone, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Appointment = () => {
  return (
    <section id="appointment" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Zakažite Vaš Termin
            </h2>
            <p className="text-xl text-muted-foreground">
              Napravite prvi korak ka zdravijem osmehu
            </p>
          </div>

          {/* Card with contact message */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center space-y-6">
              <p className="text-lg text-muted-foreground">
                Ako želite da zakažete termin, pozovite nas na broj telefona:
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-semibold text-foreground">
                  <a href="tel:+381601234567" className="hover:text-primary transition">
                    +381 64 552 3882
                  </a>
                </p>
              </div>
              <p className="text-muted-foreground">
                Naš tim će Vam rado pomoći da pronađete termin koji Vam najviše odgovara.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
