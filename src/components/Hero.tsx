import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental.jpg";
import { Stethoscope, Award, Shield, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.querySelector("#appointment");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden font-sans"
    >
      {/* Decorative blurred circles - hidden on mobile for performance */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <div className="absolute top-10 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-16 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating icons - hidden on mobile */}
      <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block">
        <Stethoscope className="absolute top-24 left-24 w-12 h-12 text-primary/25 animate-float-smooth" />
        <Award className="absolute top-1/3 right-20 w-8 h-8 text-accent/30 animate-float-smooth-delay" />
        <Shield className="absolute bottom-32 right-32 w-10 h-10 text-primary/20 animate-float-smooth-long" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 md:space-y-8 max-w-lg mx-auto md:mx-0 text-center md:text-left"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="inline-block">
              <span className="bg-primary/10 text-primary px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold">
                🚨 Hitna Stanja - DOLAZAK po pozivu!
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp} 
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold leading-tight text-foreground tracking-tight"
            >
              Oralna Hirurgija i Implantologija
            </motion.h1>

            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
                Spec. Oralne Hirurgije Dr Aleksandar Mitrović
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Stručno rješavanje najsloženijih zahvata iz područja oralne hirurgije i implantologije, uz najmodernije tehnike i bezbolne tretmane.
              </p>
            </motion.div>

            {/* What is Oral Surgery */}
            <motion.div 
              variants={fadeInUp} 
              transition={{ duration: 0.5 }}
              className="bg-secondary/30 rounded-xl p-4 md:p-6 border border-primary/10"
            >
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Šta je Oralna Hirurgija?</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <strong>Oralna hirurgija</strong> je specijalistička grana stomatologije koja se bavi hirurškim zahvatima u usnoj šupljini - od vađenja umnjaka i komplikovanih zuba, do uklanjanja cista i tumora. 
                <strong> Implantologija</strong> podrazumijeva ugradnju titanijumskih implantata kao zamjene za izgubljene zube, pružajući trajno i prirodno rješenje za vaš osmijeh.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              variants={fadeInUp} 
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 md:pt-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToAppointment}
                className="relative shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-primary text-primary-foreground font-sans w-full sm:w-auto"
              >
                Zakažite Konsultaciju
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector("#services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:scale-105 transition-transform duration-300 font-sans w-full sm:w-auto"
              >
                Naše Usluge
              </Button>
            </motion.div>

            {/* Trust Indicators with Google Rating */}
            <motion.div 
              variants={fadeInUp} 
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-6 md:gap-10 pt-6 md:pt-8 border-t border-border/50 justify-center md:justify-start"
            >
              {/* Google Reviews Badge */}
              <a 
                href="https://www.google.com/maps/place/Stomatoloska+ordinacija+Mitrovic+Zvornik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-foreground text-base md:text-lg">4.8</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Google Recenzije
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-base md:text-lg">3000+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Hirurških Zahvata</div>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-base md:text-lg">10+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Godina Iskustva</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Highlights */}
            <motion.div 
              variants={fadeInUp} 
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8"
            >
              <div className="flex flex-row sm:flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-5 bg-secondary/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
                <span className="text-sm md:text-lg font-semibold text-foreground text-center">Vađenje Umnjaka</span>
              </div>
              <div className="flex flex-row sm:flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-5 bg-secondary/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
                <span className="text-sm md:text-lg font-semibold text-foreground text-center">Ugradnja Implantata</span>
              </div>
              <div className="flex flex-row sm:flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-5 bg-secondary/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
                <span className="text-sm md:text-lg font-semibold text-foreground text-center">Bezbolni Zahvati</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Doctor Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative order-first md:order-last"
          >
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl ring-1 ring-primary/10 relative transform hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
              <img
                src={heroImage}
                alt="Moderna stomatološka ordinacija"
                className="w-full h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              />
            </div>

            {/* Specialty badge - adjusted for mobile */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl"
            >
              <div className="text-2xl md:text-4xl font-bold">500+</div>
              <div className="text-xs md:text-sm">Ugrađenih Implantata</div>
            </motion.div>

            {/* Decorative dots - hidden on mobile */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20 animate-pulse-slow hidden md:block">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
