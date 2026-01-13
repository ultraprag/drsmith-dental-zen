import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-sm border-t border-border shadow-lg p-3 animate-slide-up">
      <a href="tel:+38765223310" className="block">
        <Button className="w-full gap-2" size="lg">
          <Phone className="w-5 h-5" />
          Pozovite Sada
        </Button>
      </a>
    </div>
  );
};

export default StickyMobileCTA;
