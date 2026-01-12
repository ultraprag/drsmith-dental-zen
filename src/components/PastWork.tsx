import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Import your images
import izbjeljivanjeImage from "@/assets/izbjeljivanje.jpg";
import protetikaImage from "@/assets/protetika.jpg";

const PastWork = () => {
  const works = [
    {
      title: "Ordinacijsko izbjeljivanje zuba",
      description:
        "Profesionalni tretman izbjeljivanja u ordinaciji za vidljivo svjetlije zube već nakon prvog posjeta. Sigurno i efikasno rješenje za blistav osmijeh.",
      image: izbjeljivanjeImage,
    },
    {
      title: "Protetika",
      description:
        "Povratak prirodnom osmehu uz nežnu i preciznu stomatološku intervenciju, naglašavajući zdravlje i estetiku zuba.",
      image: protetikaImage,
    },
  ];

  return (
    <section id="past-work" className="py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Rezultati Našeg Rada
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Pogledajte nevjerovatne transformacije naših pacijenata —
            stvarne priče osmijeha koji inspirišu.
          </p>
        </div>

        {/* Grid Layout for Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {works.map((work, index) => (
            <Card
              key={index}
              className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow bg-background/90 backdrop-blur-sm"
            >
              <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                {/* Image */}
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-md ring-1 ring-border/20">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Case Info - Centered */}
                <div className="space-y-1 md:space-y-2 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWork;
