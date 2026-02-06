import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";

// Gallery images with captions exactly as on MYG site
const galleryImages = [
  {
    id: 1,
    src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.32.41-PM.jpeg",
    thumbnail: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.32.41-PM-578x768.jpeg",
    caption: "Western Bulldogs Youth Expo – An unforgettable day of connection and empowerment at the Youth Fest in the West Expo. MYG was there, spreading the energy and forging connections with the youth and organizations from across the West of Victoria.",
  },
  {
    id: 2,
    src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.30.57-PM.jpeg",
    thumbnail: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.30.57-PM-577x768.jpeg",
    caption: "Western Bulldogs Youth Expo – An unforgettable day of connection and empowerment at the Youth Fest in the West Expo. MYG was there, spreading the energy and forging connections with the youth and organizations from across the West of Victoria.",
  },
  {
    id: 3,
    src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.14-PM-1.jpeg",
    thumbnail: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.14-PM-1-576x768.jpeg",
    caption: "Western Bulldogs Youth Expo – An unforgettable day of connection and empowerment at the Youth Fest in the West Expo. MYG was there, spreading the energy and forging connections with the youth and organizations from across the West of Victoria.",
  },
  {
    id: 4,
    src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.13-PM.jpeg",
    thumbnail: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.13-PM-576x768.jpeg",
    caption: "Western Bulldogs Youth Expo – An unforgettable day of connection and empowerment at the Youth Fest in the West Expo. MYG was there, spreading the energy and forging connections with the youth and organizations from across the West of Victoria.",
  },
];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isLightboxOpen = selectedIndex !== null;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, closeLightbox, goToPrevious, goToNext]);

  const currentImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-myg-teal-light via-background to-background">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Gallery
            </span>
            <h1 className="mb-6">Our Moments</h1>
            <p className="text-xl text-muted-foreground">
              A collection of memories from MYG events, programs, and community gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <Section>
        <SectionHeader
          eyebrow="Photos"
          title="Event Gallery"
          description="Click on any image to view it in full screen."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-muted focus-ring"
            >
              <img
                src={image.thumbnail}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-background text-sm line-clamp-2">
                    {image.caption}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      {isLightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-background/10 text-background text-sm font-medium">
            {selectedIndex + 1} of {galleryImages.length}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Main content */}
          <div
            className="flex flex-col items-center justify-center h-full px-4 py-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative max-w-5xl max-h-[70vh] w-full flex items-center justify-center">
              <img
                src={currentImage.src}
                alt={`Gallery image ${selectedIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-scale-in"
              />
            </div>

            {/* Caption */}
            <div className="mt-6 max-w-3xl text-center">
              <p className="text-background/90 text-base md:text-lg leading-relaxed">
                {currentImage.caption}
              </p>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto scrollbar-hide">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(index);
                }}
                className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === selectedIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-foreground/95"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={image.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
