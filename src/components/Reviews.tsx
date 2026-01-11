import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./arrows.css"; // custom arrow styles

const Reviews = () => {
  const reviews = [
    {
      name: "Marija Jovanović",
      text: "Dr. Mitrović i tim su neverovatni! Učinili su da se osećam prijatno tokom cele posete. Ordinacija je moderna i čista, a osoblje je neverovatno ljubazno.",
      rating: 5,
    },
    {
      name: "Nikola Petrović",
      text: "Najbolje stomatološko iskustvo koje sam ikada imao. Tehnologija koju koriste je vrhunska, a dr Mitrović zaista odvaja vreme da objasni sve. Toplo preporučujem!",
      rating: 5,
    },
    {
      name: "Ana Milić",
      text: "Nekada sam se plašila stomatologa, ali nežan pristup dr Mitrović je potpuno promenio moju perspektivu. Ceo tim je divan i profesionalan.",
      rating: 5,
    },
    {
      name: "Marko Stanković",
      text: "Veoma profesionalno osoblje i prijatna atmosfera. Samo bih voleo da je vreme čekanja malo kraće, ali usluga je svakako odlična!",
      rating: 4,
    },
    {
      name: "Jelena Ilić",
      text: "Fenomenalno iskustvo! Sve je besprekorno organizovano, a dr Mitrović je stručan i ljubazan. Moj osmeh nikad nije bio lepši!",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Šta Naši Pacijenti Kažu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ne verujte samo nama na reč
          </p>
        </div>

        {/* Custom navigation buttons */}
        <div className="custom-nav-btn prev-btn">
          <ChevronLeft className="w-7 h-7" />
        </div>
        <div className="custom-nav-btn next-btn">
          <ChevronRight className="w-7 h-7" />
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{review.text}"
                  </p>
                  <div className="font-semibold text-foreground">
                    — {review.name}
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
