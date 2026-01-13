import { User, Star } from "lucide-react";
import { motion } from "framer-motion";
import acoMitrovic from "@/assets/aco-mitrovic.jpg";
import dragoMitrovic from "@/assets/drago-mitrovic.jpg";
import zeljkaMilovanovic from "@/assets/zeljka-milovanovic.jpg";
import aleksandraMilovanovic from "@/assets/aleksandra-milovanovic.jpg";
import svetozarMitrovic from "@/assets/svetozar-mitrovic.png";
import { useScrollAnimation, fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";

const teamMembers = [
  {
    id: 1,
    name: "Dr Aleksandar Mitrović",
    role: "Specijalista oralne hirurgije",
    description: "Diplomirao na Stomatološkom fakultetu u Novom Sadu 2017. godine, nakon čega je nastavio specijalizaciju iz oralne hirurgije koju je započeo 2018. godine. Zvanje specijaliste oralne hirurgije stekao je 2023. godine. Kao vođa tima, spaja tehničku preciznost sa empatičnim pristupom, specijalizujući se za kompleksne hirurške intervencije, implantologiju i lečenje složenih slučajeva sa ciljem da svakom pacijentu obezbedi siguran i uspešan tretman.",
    image: acoMitrovic,
    isLead: true,
  },
  {
    id: 2,
    name: "Dr Dragoljub Mitrović",
    role: "Stomatolog",
    description: "Diplomirao na Stomatološkom fakultetu u Sarajevu 1979. godine. Sa preko četiri decenije iskustva u stomatologiji, posvećen je pružanju vrhunske nege i izgradnji dugotrajnih odnosa poverenja sa pacijentima. Kao jedan od osnivača ordinacije, njegova vizija i stručnost postavili su temelje za tradiciju izvrsnosti koju negujemo i danas.",
    image: dragoMitrovic,
    isLead: false,
  },
  {
    id: 3,
    name: "Dr Željka Mihajlović",
    role: "Stomatolog",
    description: "Diplomirala na Stomatološkom fakultetu Univerziteta u Beogradu 2018. godine, sa posebnim interesovanjem za savremene estetske i restaurativne tretmane. Kontinuirano pohađa stručne kurseve i kongrese, kako bi svojim pacijentima pružila najbezbolniju i najsavremeniju negu osmeha.",
    image: zeljkaMilovanovic,
    isLead: false,
  },
  {
    id: 4,
    name: "Dr Aleksandra Milovanović",
    role: "Stomatolog",
    description: "Diplomirala na Stomatološkom fakultetu 2024. godine, donoseći svež pogled i najsavremenije znanje u praksu. Njena mladost i entuzijazam kombinovani su sa pažljivim pristupom i posvećenošću svakom pacijentu, čineći svaku posetu prijatnim iskustvom.",
    image: aleksandraMilovanovic,
    isLead: false,
  },
  {
    id: 5,
    name: "Dr Branislav Macanović",
    role: "Ortodont",
    description: "Specijalizovan za ortodonciju, naš konsultant za kompleksne slučajeve poravnanja zuba i korekcije zagrižaja. Sa dubinskim znanjem u modernim ortodontskim tehnikama, pruža stručne savete i tretmane koji transformišu osmehe pacijenata svih uzrasta. Njegova preciznost i posvećenost individualnim potrebama čine ga pouzdanim partnerom u postizanju savršeno poravnatog i funkcionalnog osmeha.",
    image: null,
    isLead: false,
  },
  {
    id: 6,
    name: "Dr Svetozar Mitrović",
    role: "Konsultant za estetiku",
    description: "Doktor medicine sa specijalizovanom edukacijom iz oblasti estetske medicine. Njegova stručnost nadilazi tradicionalnu stomatologiju, omogućavajući celovit pristup lepoti osmeha kroz harmoniju funkcionalnosti i estetike. Kontinuiranim usavršavanjem u najsavremenijim tehnikama, pomaže pacijentima da postignu prirodan, blistav osmeh koji odražava njihovu unutrašnju lepotu i samopouzdanje.",
    image: svetozarMitrovic,
    isLead: false,
  },
];

const Team = () => {
  const { ref, controls } = useScrollAnimation();
  const leadDoctor = teamMembers.find(m => m.isLead);
  const otherMembers = teamMembers.filter(m => !m.isLead);

  return (
    <section id="tim" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Naš Tim
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Upoznajte naše stručnjake koji brinu o vašem osmijehu
          </p>
        </motion.div>

        {/* Lead Doctor - Highlighted */}
        {leadDoctor && (
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="mb-12 md:mb-16"
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 via-card to-primary/5 rounded-3xl overflow-hidden shadow-2xl border border-primary/20 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden h-[300px] sm:h-[350px] md:h-auto md:min-h-[400px]">
                  <img
                    src={leadDoctor.image}
                    alt={`${leadDoctor.name} - ${leadDoctor.role} u Mitrović Dental`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/20" />
                  
                  {/* Lead badge - on image for mobile */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs md:text-sm font-semibold">Vođa Tima</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {leadDoctor.name}
                  </h3>
                  <p className="text-primary font-semibold text-lg md:text-xl mb-4">
                    {leadDoctor.role}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {leadDoctor.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Team Members */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {otherMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[3/4] bg-muted flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} u Mitrović Dental`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <User className="w-16 h-16 md:w-20 md:h-20 mb-2" />
                    <span className="text-sm">Dodajte sliku</span>
                  </div>
                )}
              </div>
              <div className="p-4 md:p-5 text-center">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs md:text-sm line-clamp-4">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
