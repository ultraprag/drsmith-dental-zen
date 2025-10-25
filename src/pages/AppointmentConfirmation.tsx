import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AppointmentConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">
          Termin Potvrđen!
        </h1>
        <p className="text-xl text-muted-foreground">
          Hvala što ste zakazali termin u Dr. Smith Stomatološkoj Ordinaciji. Poslali smo vam email sa svim detaljima.
        </p>
        <p className="text-muted-foreground">
          Radujemo se što ćemo vas uskoro videti!
        </p>
        <Button size="lg" onClick={() => navigate("/")} className="mt-6">
          Nazad na Početnu
        </Button>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
