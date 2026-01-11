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
      text: "Dr. Mitrović i tim su nevjerovatni! Učinili su da se osjećam prijatno tokom cijele posjete. Ordinacija je moderna i čista, a osoblje je nevjerovatno ljubazno.",
      rating: 5,
    },
    {
      name: "Nikola Petrović",
      text: "Najbolje stomatološko iskustvo koje sam ikada imao. Tehnologija koju koriste je vrhunska, a dr Mitrović zaista odvaja vrijeme da objasni sve. Toplo preporučujem!",
      rating: 5,
    },
    {
      name: "Ana Milić",
      text: "Nekada sam se plašila stomatologa, ali nježan pristup dr Mitrović je potpuno promijenio moju perspektivu. Cijeli tim je divan i profesionalan.",
      rating: 5,
    },
    {
      name: "Marko Stanković",
      text: "Veoma profesionalno osoblje i prijatna atmosfera. Samo bih volio da je vrijeme čekanja malo kraće, ali usluga je svakako odlična!",
      rating: 4,
    },
    {
      name: "Jelena Ilić",
      text: "Fenomenalno iskustvo! Sve je besprijekorno organizovano, a dr Mitrović je stručan i ljubazan. Moj osmijeh nikad nije bio ljepši!",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-12 md:py-20">
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Šta Naši Pacijenti Kažu
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ne vjerujte samo nama na riječ
          </p>
        </div>

        {/* Custom navigation buttons - hidden on mobile, shown on larger screens */}
        <div className="custom-nav-btn prev-btn hidden md:flex">
          <ChevronLeft className="w-7 h-7" />
        </div>
        <div className="custom-nav-btn next-btn hidden md:flex">
          <ChevronRight className="w-7 h-7" />
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="!pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground italic">
                    "{review.text}"
                  </p>
                  <div className="font-semibold text-foreground text-sm md:text-base">
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
