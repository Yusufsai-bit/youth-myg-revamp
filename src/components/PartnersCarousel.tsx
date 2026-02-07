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
    <div className="relative px-12 lg:px-16">
      {/* Left Arrow - Always visible */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md disabled:opacity-30 transition-opacity"
        aria-label="Scroll partners left"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Carousel Container - Show 4 items */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {partners.map((partner) => (
          <div
            key={partner.alt}
            className="flex-shrink-0 w-[calc(25%-18px)] min-w-[140px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow - Always visible */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md disabled:opacity-30 transition-opacity"
        aria-label="Scroll partners right"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default PartnersCarousel;
