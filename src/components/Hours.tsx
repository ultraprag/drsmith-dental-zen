import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Hours = () => {
  const schedule = [
    { day: "Ponedeljak - Petak", hours: "08:00 - 17:00" },
    { day: "Subota", hours: "09:00 - 13:00" },
    { day: "Nedelja", hours: "Zatvoreno" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Radno Vreme
            </h2>
            <p className="text-xl text-muted-foreground">
              Tu smo kada nam trebate
            </p>
          </div>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b last:border-b-0"
                  >
                    <span className="font-semibold text-foreground">{item.day}</span>
                    <span className="text-muted-foreground">{item.hours}</span>
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
