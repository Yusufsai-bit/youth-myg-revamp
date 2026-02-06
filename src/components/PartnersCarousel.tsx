import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Partner {
  src: string;
  alt: string;
}

interface PartnersCarouselProps {
  partners: Partner[];
}

const PartnersCarousel = ({ partners }: PartnersCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm shadow-md disabled:opacity-0 disabled:pointer-events-none transition-opacity -translate-x-1/2 lg:-translate-x-full lg:left-4"
        aria-label="Scroll partners left"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide scroll-smooth px-8 lg:px-16 py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {partners.map((partner) => (
          <div
            key={partner.alt}
            className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm shadow-md disabled:opacity-0 disabled:pointer-events-none transition-opacity translate-x-1/2 lg:translate-x-full lg:right-4"
        aria-label="Scroll partners right"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default PartnersCarousel;
