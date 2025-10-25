import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Hours = () => {
  const schedule = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" },
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
              Office Hours
            </h2>
            <p className="text-xl text-muted-foreground">
              We're here when you need us
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
