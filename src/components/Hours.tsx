import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Hours = () => {
  const schedule = [
    { day: "Ponedjeljak - Petak", hours: "07:00 - 20:00" },
    { day: "Subota", hours: "07:00 - 20:00" },
    { day: "Nedelja", hours: "07:00 - 18:00" },
  ];

  return (
    <section id="hours" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Radno Vrijeme
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Tu smo kada nas trebate!
            </p>
          </div>
          <Card className="border-none shadow-lg">
            <CardContent className="p-5 md:p-8">
              <div className="space-y-3 md:space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 md:py-3 border-b last:border-b-0 gap-4"
                  >
                    <span className="font-semibold text-foreground text-sm md:text-base">{item.day}</span>
                    <span className="text-muted-foreground text-sm md:text-base whitespace-nowrap">{item.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hours;
