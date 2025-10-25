import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Marija Jovanović",
      text: "Dr. Smith i tim su neverovatni! Učinili su da se osećam prijatno tokom cele posete. Ordinacija je moderna i čista, a osoblje je neverovatno ljubazno.",
      rating: 5,
    },
    {
      name: "Nikola Petrović",
      text: "Najbolje stomatološko iskustvo koje sam ikada imao. Tehnologija koju koriste je vrhunska, a dr Smith zaista odvaja vreme da objasni sve. Toplo preporučujem!",
      rating: 5,
    },
    {
      name: "Ana Milić",
      text: "Nekada sam se plašila stomatologa, ali nežan pristup dr Smitha je potpuno promenio moju perspektivu. Ceo tim je divan i profesionalan.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Šta Naši Pacijenti Kažu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ne verujte samo nama na reč
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{review.text}"</p>
                <div className="font-semibold text-foreground">— {review.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
