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
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Ne vjerujte samo nama na riječ
          </p>
          
          {/* Google Rating Badge */}
          <a 
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-border rounded-full px-5 py-3 shadow-md hover:shadow-lg transition-shadow"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-sm text-muted-foreground">Pogledajte na Google</span>
          </a>
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
