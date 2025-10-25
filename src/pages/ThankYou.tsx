import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Heart className="w-12 h-12 text-primary fill-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">
          Thank You!
        </h1>
        <p className="text-xl text-muted-foreground">
          We've received your message and will get back to you as soon as possible.
        </p>
        <p className="text-muted-foreground">
          Usually within 24 hours.
        </p>
        <Button size="lg" onClick={() => navigate("/")} className="mt-6">
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
