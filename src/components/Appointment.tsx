import { Phone, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Appointment = () => {
  return (
    <section id="appointment" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Zakažite Vaš Termin
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Napravite prvi korak ka zdravijem osmijehu
            </p>
          </div>

          {/* Card with contact message */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-5 md:p-8 text-center space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-muted-foreground">
                Ako želite da zakažete termin, pozovite nas na broj telefona:
              </p>
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-foreground">
                    <a href="tel:+381645523882" className="hover:text-primary transition">
                      +381 64 552 3882
                    </a>
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-foreground">
                    <a href="tel:+38765223310" className="hover:text-primary transition">
                      +387 65 22 33 10
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
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
