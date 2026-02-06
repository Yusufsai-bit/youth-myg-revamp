import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";

// Gallery images with captions exactly as on MYG site
const galleryImages = [
  { id: 1, src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.32.41-PM.jpeg", caption: "Western Bulldogs Youth Expo – An unforgettable day of connection and empowerment at the Youth Fest in the West Expo. MYG was there, spreading the energy and forging connections with the youth and organizations from across the West of Victoria." },
  { id: 2, src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.30.57-PM.jpeg", caption: "Western Bulldogs Youth Expo – An unforgettable day of connection and empowerment at the Youth Fest in the West Expo. MYG was there, spreading the energy and forging connections with the youth and organizations from across the West of Victoria." },
  { id: 3, src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-4.05.21-PM.jpeg", caption: "Young People Referendum Info Session – MYG partnered with the social policy group to deliver a Young People Referendum Information Session. An event filled with knowledge sharing, empowerment, and engaging discussions on the Constitution, referendums, and the power of voting." },
  { id: 4, src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-4.05.20-PM.jpeg", caption: "Young People Referendum Info Session – MYG partnered with the social policy group to deliver a Young People Referendum Information Session. An event filled with knowledge sharing, empowerment, and engaging discussions on the Constitution, referendums, and the power of voting." },
  { id: 5, src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-4.05.18-PM.jpeg", caption: "Young People Referendum Info Session – MYG partnered with the social policy group to deliver a Young People Referendum Information Session. An event filled with knowledge sharing, empowerment, and engaging discussions on the Constitution, referendums, and the power of voting." },
  { id: 6, src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.41.32-PM.jpeg", caption: "Cultural Exchange at Banyule Festival – MYG engaged the community with exciting cultural exchanges and activities at the Banyule Festival" },
  { id: 7, src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.39.17-PM.jpeg", caption: "Cultural Exchange at Banyule Festival – MYG engaged the community with exciting cultural exchanges and activities at the Banyule Festival" },
  { id: 8, src: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.23.52-PM.jpeg", caption: "Cultural Exchange at Banyule Festival – MYG engaged the community with exciting cultural exchanges and activities at the Banyule Festival" },
  { id: 9, src: "https://myg.org.au/wp-content/uploads/2023/10/Welcoming-Australia.jpg", caption: "Welcoming Australia – MYG was invited to attend the Welcoming Symposium, where individuals and organizations from across the country came together to discuss topics related to diversity, inclusion, and community engagement." },
  { id: 10, src: "https://myg.org.au/wp-content/uploads/2023/10/Victorian-Mosque-Open-Day-4.jpg", caption: "Victorian Mosque Open Day – MYG partnered with the ICV, and many of our members volunteered to welcome people of all faiths to mosques around Victoria." },
  { id: 11, src: "https://myg.org.au/wp-content/uploads/2023/10/Victorian-Mosque-Open-Day-3.jpg", caption: "Victorian Mosque Open Day – MYG partnered with the ICV, and many of our members volunteered to welcome people of all faiths to mosques around Victoria." },
  { id: 12, src: "https://myg.org.au/wp-content/uploads/2023/10/Victorian-Mosque-Open-Day-2.jpg", caption: "Victorian Mosque Open Day – MYG partnered with the ICV, and many of our members volunteered to welcome people of all faiths to mosques around Victoria." },
  { id: 13, src: "https://myg.org.au/wp-content/uploads/2023/10/Victorian-Mosque-Open-Day-1.jpg", caption: "Victorian Mosque Open Day – MYG partnered with the ICV, and many of our members volunteered to welcome people of all faiths to mosques around Victoria." },
  { id: 14, src: "https://myg.org.au/wp-content/uploads/2023/10/Victorian-Electoral-Committee-Roundtable-1.jpg", caption: "Victorian Electoral Committee Roundtable – MYG was invited to a roundtable to discuss the low voting figures in our communities and ways to make voting more accessible to our communities." },
  { id: 15, src: "https://myg.org.au/wp-content/uploads/2023/10/Victorian-Electoral-Committee-Roundtable.jpg", caption: "Victorian Electoral Committee Roundtable – MYG was invited to a roundtable to discuss the low voting figures in our communities and ways to make voting more accessible to our communities." },
  { id: 16, src: "https://myg.org.au/wp-content/uploads/2023/10/VIC-Multicultural-Honour-Roll.jpg", caption: "VIC Multicultural Honour Roll – MYG was invited to attend the Multicultural Honour Roll event, where our ambassador Sh.alaa was present. It was a great night of recognizing community contributions." },
  { id: 17, src: "https://myg.org.au/wp-content/uploads/2023/10/Religious-Identity-Workshop-2.jpg", caption: "Religious Identity Workshop – MYG held a recent workshop for multicultural youth, requested by our incredible community. It was a powerful exploration of identity, growth, and self-discovery." },
  { id: 18, src: "https://myg.org.au/wp-content/uploads/2023/10/Religious-Identity-Workshop-1.jpg", caption: "Religious Identity Workshop – MYG held a recent workshop for multicultural youth, requested by our incredible community. It was a powerful exploration of identity, growth, and self-discovery." },
  { id: 19, src: "https://myg.org.au/wp-content/uploads/2023/10/Premier-Iftar-Dinner.jpg", caption: "Premier Iftar Dinner – MYG was invited to attend the Victorian Premier's annual iftar dinner." },
  { id: 20, src: "https://myg.org.au/wp-content/uploads/2023/10/Pop-up-Vaccination-Hub.jpg", caption: "Pop-up Vaccination Hub – MYG assisted and volunteered at numerous pop-up vaccination hubs, including one at Bell St Mall in Heidelberg." },
  { id: 21, src: "https://myg.org.au/wp-content/uploads/2023/10/Parliament-Youth-Forum-3.jpg", caption: "Parliament Youth Forum – MYG had the privilege of joining the 'State of the Future' Youth Forum at Parliament House, where young minds from across Victoria engaged in crucial discussions with lawmakers." },
  { id: 22, src: "https://myg.org.au/wp-content/uploads/2023/10/Parliament-Youth-Forum-2.jpg", caption: "Parliament Youth Forum – MYG had the privilege of joining the 'State of the Future' Youth Forum at Parliament House, where young minds from across Victoria engaged in crucial discussions with lawmakers." },
  { id: 23, src: "https://myg.org.au/wp-content/uploads/2023/10/Parliament-Youth-Forum-1.jpg", caption: "Parliament Youth Forum – MYG had the privilege of joining the 'State of the Future' Youth Forum at Parliament House, where young minds from across Victoria engaged in crucial discussions with lawmakers." },
  { id: 24, src: "https://myg.org.au/wp-content/uploads/2023/10/Youth-iftat-.jpg", caption: "MYG Youth Iftar – MYG hosted a youth-led iftar night, featuring principals from Merri Creek Management College who spoke about the significance of identity. The event saw a fantastic turnout." },
  { id: 25, src: "https://myg.org.au/wp-content/uploads/2023/10/Multicultural-Youth-Camp-4.jpg", caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity…" },
  { id: 26, src: "https://myg.org.au/wp-content/uploads/2023/10/Multicultural-Youth-Camp-3.jpg", caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity…" },
  { id: 27, src: "https://myg.org.au/wp-content/uploads/2023/10/Multicultural-Youth-Camp-2.jpg", caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity…" },
  { id: 28, src: "https://myg.org.au/wp-content/uploads/2023/10/Multicultural-Youth-Camp-1.jpg", caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity…" },
  { id: 29, src: "https://myg.org.au/wp-content/uploads/2023/10/Multicultural-Leadership-in-Action-2.jpg", caption: "Multicultural Leadership in Action – MYG was invited to participate in the VMC Multicultural Leadership in Action celebration…" },
  { id: 30, src: "https://myg.org.au/wp-content/uploads/2023/10/Multicultural-Leadership-in-Action-1.jpg", caption: "Multicultural Leadership in Action – MYG was invited to participate in the VMC Multicultural Leadership in Action celebration…" },
  { id: 31, src: "https://myg.org.au/wp-content/uploads/2023/10/Laser-Tag.jpg", caption: "Laser Tag – MYG hosted a laser tag session for some of our active members. This event was provided for free, offering a fun and engaging experience." },
  { id: 32, src: "https://myg.org.au/wp-content/uploads/2023/10/Labour-Party-Racism-Roundtable.jpg", caption: "International Women's Day – MYG was invited to the International Women's Day celebration, recognizing and applauding the remarkable women in our city who contribute to society in diverse and impactful ways." },
  { id: 33, src: "https://myg.org.au/wp-content/uploads/2023/10/International-Womens-Day-.jpg", caption: "Labour Party Racism Roundtable – MYG was invited to a roundtable with the Labor Party, where discussions revolved around the racism issues faced by multicultural youth. It was a significant opportunity for our members to have their voices heard." },
  { id: 34, src: "https://myg.org.au/wp-content/uploads/2023/10/Indoor-Soccer-Tournament-2.jpg", caption: "Indoor Soccer Tournament – MYG hosted its annual indoor soccer tournament, bringing young people from various LGAs and cultural backgrounds together…" },
  { id: 35, src: "https://myg.org.au/wp-content/uploads/2023/10/Indoor-Soccer-Tournament-1.jpg", caption: "Indoor Soccer Tournament – MYG hosted its annual indoor soccer tournament, bringing young people from various LGAs and cultural backgrounds together…" },
  { id: 36, src: "https://myg.org.au/wp-content/uploads/2023/10/Homework-Club-2.jpg", caption: "Homework Club – MYG worked alongside Himilo to deliver a homework club, with our members volunteering to tutor and support younger children in their studies." },
  { id: 37, src: "https://myg.org.au/wp-content/uploads/2023/10/Homework-Club-1.jpg", caption: "Homework Club – MYG worked alongside Himilo to deliver a homework club, with our members volunteering to tutor and support younger children in their studies." },
  { id: 38, src: "https://myg.org.au/wp-content/uploads/2023/10/FECCA-Conference.jpg", caption: "FECCA Conference – MYG had the honor of collaborating with FECCA, sending several members to attend the national conference…" },
  { id: 39, src: "https://myg.org.au/wp-content/uploads/2023/10/Elsedeaq-Iftar-Night-3.jpg", caption: "Elsedeaq Iftar Night – MYG hosted our annual youth dinner and partnered with the Elsedeaq Society to create an inclusive and vibrant event." },
  { id: 40, src: "https://myg.org.au/wp-content/uploads/2023/10/Elsedeaq-Iftar-Night-2.jpg", caption: "Elsedeaq Iftar Night – MYG hosted our annual youth dinner and partnered with the Elsedeaq Society to create an inclusive and vibrant event." },
  { id: 41, src: "https://myg.org.au/wp-content/uploads/2023/10/Elsedeaq-Iftar-Night-1.jpg", caption: "Elsedeaq Iftar Night – MYG hosted our annual youth dinner and partnered with the Elsedeaq Society to create an inclusive and vibrant event." },
  { id: 42, src: "https://myg.org.au/wp-content/uploads/2023/10/Community-Conversation-on-Crime-Prevention.jpg", caption: "Community Conversation on Crime Prevention – MYG actively participated in a roundtable discussion on crime prevention in our local government area (LGA)…" },
  { id: 43, src: "https://myg.org.au/wp-content/uploads/2023/10/Bell-St-Iftar-Dinner.jpg", caption: "Bell St Iftar Dinner – MYG proudly contributed to the annual Bell St Iftar Dinner, with our members assisting in MCing, serving, and overall program management." },
  { id: 44, src: "https://myg.org.au/wp-content/uploads/2023/10/179770204_4017599011666904_3634461316391998317_n.jpg", caption: "Banyule City Council Iftar Dinner – Some of our MYG members were invited to an iftar dinner hosted by Banyule City Council, where we built community connections through a meal." },
  { id: 45, src: "https://myg.org.au/wp-content/uploads/2023/10/1642867440767.jpg", caption: "Afghan Relief Support – MYG collaborated with the Department of Justice and Community Safety to deliver care packages for newly arrived Afghan refugees, extending a helping hand during a crucial time." },
  { id: 46, src: "https://myg.org.au/wp-content/uploads/2023/10/1642867423100.jpg", caption: "Afghan Relief Support – MYG collaborated with the Department of Justice and Community Safety to deliver care packages for newly arrived Afghan refugees, extending a helping hand during a crucial time." },
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
                  src={image.src}
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
