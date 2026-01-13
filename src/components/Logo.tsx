import { Sparkles } from "lucide-react";

interface LogoProps {
  variant?: "horizontal" | "stacked";
  className?: string;
}

const Logo = ({ variant = "horizontal", className = "" }: LogoProps) => {
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-1 ${className}`}>
        <div className="relative">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-3 border-2 border-primary rounded-b-full" />
              </div>
            </div>
          </div>
          <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-primary fill-primary" />
        </div>
        <div className="text-center">
          <div className="font-semibold text-foreground text-xs">Specijalistička stomatološka</div>
          <div className="font-semibold text-foreground text-xs">ordinacija Mitrović Dental</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-3 border-2 border-primary rounded-b-full" />
            </div>
          </div>
        </div>
        <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-primary fill-primary" />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-foreground leading-tight text-sm">Specijalistička stomatološka</span>
        <span className="font-semibold text-foreground leading-tight text-sm">ordinacija Mitrović Dental</span>
      </div>
    </div>
  );
};

export default Logo;
