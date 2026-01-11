import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Logo variant="stacked" />
          <div className="flex gap-4 md:gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </a>
          </div>
          <p className="text-muted-foreground text-center text-sm md:text-base">
            © 2025 Dr. Mitrović Stomatološka Ordinacija. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
