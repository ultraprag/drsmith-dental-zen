import { User } from "lucide-react";
import acoMitrovic from "@/assets/aco-mitrovic.jpg";
import dragoMitrovic from "@/assets/drago-mitrovic.jpg";
import zeljkaMilovanovic from "@/assets/zeljka-milovanovic.jpg";
import aleksandraMilovanovic from "@/assets/aleksandra-milovanovic.jpg";
import svetozarMitrovic from "@/assets/svetozar-mitrovic.png";

const teamMembers = [
  {
    id: 1,
    name: "Dr Aleksandar Mitrović",
    role: "Specijalista oralne hirurgije",
    description: "Diplomirao na Stomatološkom fakultetu u Novom Sadu 2017. godine, nakon čega je nastavio specijalizaciju iz oralne hirurgije koju je započeo 2018. godine. Zvanje specijaliste oralne hirurgije stekao je 2023. godine. Kao vođa tima, spaja tehničku preciznost sa empatičnim pristupom, specijalizujući se za kompleksne hirurške intervencije, implantologiju i lečenje složenih slučajeva sa ciljem da svakom pacijentu obezbedi siguran i uspešan tretman.",
    image: acoMitrovic,
  },
  {
    id: 2,
    name: "Dr Dragoljub Mitrović",
    role: "Stomatolog",
    description: "Diplomirao na Stomatološkom fakultetu u Sarajevu 1979. godine. Sa preko četiri decenije iskustva u stomatologiji, posvećen je pružanju vrhunske nege i izgradnji dugotrajnih odnosa poverenja sa pacijentima. Kao jedan od osnivača ordinacije, njegova vizija i stručnost postavili su temelje za tradiciju izvrsnosti koju negujemo i danas.",
    image: dragoMitrovic,
  },
  {
    id: 3,
    name: "Dr Željka Mihajlović",
    role: "Stomatolog",
    description: "Diplomirala na Stomatološkom fakultetu Univerziteta u Beogradu 2018. godine, sa posebnim interesovanjem za savremene estetske i restaurativne tretmane. Kontinuirano pohađa stručne kurseve i kongrese, kako bi svojim pacijentima pružila najbezbolniju i najsavremeniju negu osmeha.",
    image: zeljkaMilovanovic,
  },
  {
    id: 4,
    name: "Dr Aleksandra Milovanović",
    role: "Stomatolog",
    description: "Diplomirala na Stomatološkom fakultetu 2024. godine, donoseći svež pogled i najsavremenije znanje u praksu. Njena mladost i entuzijazam kombinovani su sa pažljivim pristupom i posvećenošću svakom pacijentu, čineći svaku posetu prijatnim iskustvom.",
    image: aleksandraMilovanovic,
  },
  {
    id: 5,
    name: "Dr Branislav Macanović",
    role: "Ortodont",
    description: "Specijalizovan za ortodonciju, naš konsultant za kompleksne slučajeve poravnanja zuba i korekcije zagrižaja. Sa dubinskim znanjem u modernim ortodontskim tehnikama, pruža stručne savete i tretmane koji transformišu osmehe pacijenata svih uzrasta. Njegova preciznost i posvećenost individualnim potrebama čine ga pouzdanim partnerom u postizanju savršeno poravnatog i funkcionalnog osmeha.",
    image: null,
  },
  {
    id: 6,
    name: "Dr Svetozar Mitrović",
    role: "Konsultant za estetiku",
    description: "Doktor medicine sa specijalizovanom edukacijom iz oblasti estetske medicine. Njegova stručnost nadilazi tradicionalnu stomatologiju, omogućavajući celovit pristup lepoti osmeha kroz harmoniju funkcionalnosti i estetike. Kontinuiranim usavršavanjem u najsavremenijim tehnikama, pomaže pacijentima da postignu prirodan, blistav osmeh koji odražava njihovu unutrašnju lepotu i samopouzdanje.",
    image: svetozarMitrovic,
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
