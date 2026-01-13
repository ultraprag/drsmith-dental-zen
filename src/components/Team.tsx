import { User } from "lucide-react";
import acoMitrovic from "@/assets/aco-mitrovic.jpg";
import dragoMitrovic from "@/assets/drago-mitrovic.jpg";
import zeljkaMilovanovic from "@/assets/zeljka-milovanovic.jpg";
import aleksandraMilovanovic from "@/assets/aleksandra-milovanovic.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Dr Aleksandar Mitrović",
    role: "Specijalista oralne hirurgije",
    description: "Kratki opis doktora i njegove stručnosti.",
    image: acoMitrovic,
  },
  {
    id: 2,
    name: "Dr Dragoljub Mitrović",
    role: "Stomatolog",
    description: "Stomatološki fakultet završio u Sarajevu 1979. godine. Jedan od osnivača naše ordinacije.",
    image: dragoMitrovic,
  },
  {
    id: 3,
    name: "Željka Milovanović",
    role: "Stomatolog",
    description: "Fakultet završila 2018. u Beogradu. U našoj ordinaciji radi već 6 godina.",
    image: zeljkaMilovanovic,
  },
  {
    id: 4,
    name: "Aleksandra Milovanović",
    role: "Stomatolog",
    description: "Fakultet završila 2024. godine. Zaposlena u našoj ordinaciji već 2 godine.",
    image: aleksandraMilovanovic,
  },
];

const Team = () => {
  return (
    <section id="tim" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Naš Tim
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Upoznajte naše stručnjake koji brinu o vašem osmijehu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[3/4] bg-muted flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <User className="w-16 h-16 md:w-20 md:h-20 mb-2" />
                    <span className="text-sm">Dodajte sliku</span>
                  </div>
                )}
              </div>
              <div className="p-5 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm md:text-base mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
