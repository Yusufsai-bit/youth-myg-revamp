import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";

// Import local gallery images
import banyuleFestival1 from "@/assets/gallery/banyule-festival-1.jpeg";
import banyuleFestival2 from "@/assets/gallery/banyule-festival-2.jpeg";
import banyuleFestival3 from "@/assets/gallery/banyule-festival-3.jpeg";
import referendumSession1 from "@/assets/gallery/referendum-session-1.jpeg";
import referendumSession2 from "@/assets/gallery/referendum-session-2.jpeg";
import referendumSession3 from "@/assets/gallery/referendum-session-3.jpeg";
import bulldogsExpo1 from "@/assets/gallery/bulldogs-expo-1.jpeg";
import youthCamp1 from "@/assets/gallery/youth-camp-1.jpg";
import youthCamp2 from "@/assets/gallery/youth-camp-2.jpg";
import youthCamp3 from "@/assets/gallery/youth-camp-3.jpg";
import youthCamp4 from "@/assets/gallery/youth-camp-4.jpg";
import parliamentForum1 from "@/assets/gallery/parliament-forum-1.jpg";
import parliamentForum2 from "@/assets/gallery/parliament-forum-2.jpg";
import parliamentForum3 from "@/assets/gallery/parliament-forum-3.jpg";
import afghanRelief1 from "@/assets/gallery/afghan-relief-1.jpg";
import afghanRelief2 from "@/assets/gallery/afghan-relief-2.jpg";

// Gallery images with captions exactly as on MYG site
const galleryImages = [
  { id: 1, src: banyuleFestival1, caption: "Cultural Exchange at Banyule Festival – MYG engaged the community with exciting cultural exchanges and activities at the Banyule Festival" },
  { id: 2, src: banyuleFestival2, caption: "Cultural Exchange at Banyule Festival – MYG engaged the community with exciting cultural exchanges and activities at the Banyule Festival" },
  { id: 3, src: banyuleFestival3, caption: "Cultural Exchange at Banyule Festival – MYG engaged the community with exciting cultural exchanges and activities at the Banyule Festival" },
  { id: 4, src: referendumSession1, caption: "Young People Referendum Info Session – MYG partnered with the social policy group to deliver a Young People Referendum Information Session. An event filled with knowledge sharing, empowerment, and engaging discussions on the Constitution, referendums, and the power of voting." },
  { id: 5, src: referendumSession2, caption: "Young People Referendum Info Session – MYG partnered with the social policy group to deliver a Young People Referendum Information Session. An event filled with knowledge sharing, empowerment, and engaging discussions on the Constitution, referendums, and the power of voting." },
  { id: 6, src: referendumSession3, caption: "Young People Referendum Info Session – MYG partnered with the social policy group to deliver a Young People Referendum Information Session. An event filled with knowledge sharing, empowerment, and engaging discussions on the Constitution, referendums, and the power of voting." },
  { id: 7, src: bulldogsExpo1, caption: "Western Bulldogs Youth Expo – An unforgettable day of connection and empowerment at the Youth Fest in the West Expo. MYG was there, spreading the energy and forging connections with the youth and organizations from across the West of Victoria." },
  { id: 8, src: youthCamp1, caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity. Through workshops, discussions, and exchanges, participants embraced diversity and forged lasting bonds." },
  { id: 9, src: youthCamp2, caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity. Through workshops, discussions, and exchanges, participants embraced diversity and forged lasting bonds." },
  { id: 10, src: youthCamp3, caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity. Through workshops, discussions, and exchanges, participants embraced diversity and forged lasting bonds." },
  { id: 11, src: youthCamp4, caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity. Through workshops, discussions, and exchanges, participants embraced diversity and forged lasting bonds." },
  { id: 12, src: parliamentForum1, caption: "Parliament Youth Forum – MYG had the privilege of joining the 'State of the Future' Youth Forum at Parliament House, where young minds from across Victoria engaged in crucial discussions with lawmakers." },
  { id: 13, src: parliamentForum2, caption: "Parliament Youth Forum – MYG had the privilege of joining the 'State of the Future' Youth Forum at Parliament House, where young minds from across Victoria engaged in crucial discussions with lawmakers." },
  { id: 14, src: parliamentForum3, caption: "Parliament Youth Forum – MYG had the privilege of joining the 'State of the Future' Youth Forum at Parliament House, where young minds from across Victoria engaged in crucial discussions with lawmakers." },
  { id: 15, src: afghanRelief1, caption: "Afghan Relief Support – MYG collaborated with the Department of Justice and Community Safety to deliver care packages for newly arrived Afghan refugees, extending a helping hand during a crucial time." },
  { id: 16, src: afghanRelief2, caption: "Afghan Relief Support – MYG collaborated with the Department of Justice and Community Safety to deliver care packages for newly arrived Afghan refugees, extending a helping hand during a crucial time." },
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
                src={image.src}
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
                alt={currentImage.caption}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            {/* Caption */}
            <div className="mt-6 max-w-2xl text-center">
              <p className="text-background/90 text-lg">
                {currentImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
