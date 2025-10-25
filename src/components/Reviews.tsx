import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Dr. Smith and the team are amazing! They made me feel comfortable during my entire visit. The office is modern and clean, and the staff is incredibly friendly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Best dental experience I've ever had. The technology they use is top-notch, and Dr. Smith really takes the time to explain everything. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      text: "I used to be terrified of dentists, but Dr. Smith's gentle approach has completely changed my perspective. The entire team is wonderful and professional.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it
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
