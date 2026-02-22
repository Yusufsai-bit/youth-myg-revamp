import { useState, useCallback, useEffect, useRef } from "react";

// Load Juicer.io embed script
const useJuicerScript = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="juicer.io"]');
    if (existingScript) return;
    const script = document.createElement("script");
    script.src = "https://www.juicer.io/embed/multiculturalyouthgroup/embed-code.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
};
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
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
import crimePrevention from "@/assets/gallery/crime-prevention.jpg";
import elsedeaqIftar1 from "@/assets/gallery/elsedeaq-iftar-1.jpg";
import elsedeaqIftar2 from "@/assets/gallery/elsedeaq-iftar-2.jpg";
import elsedeaqIftar3 from "@/assets/gallery/elsedeaq-iftar-3.jpg";
import feccaConference from "@/assets/gallery/fecca-conference.jpg";
import homeworkClub1 from "@/assets/gallery/homework-club-1.jpg";
import homeworkClub2 from "@/assets/gallery/homework-club-2.jpg";
import soccerTournament1 from "@/assets/gallery/soccer-tournament-1.jpg";
import soccerTournament2 from "@/assets/gallery/soccer-tournament-2.jpg";
import womensDay from "@/assets/gallery/womens-day.jpg";
import racismRoundtable from "@/assets/gallery/racism-roundtable.jpg";
import laserTag from "@/assets/gallery/laser-tag.jpg";
import leadershipAction2 from "@/assets/gallery/leadership-action-2.jpg";
import youthIftar from "@/assets/gallery/youth-iftar.jpg";
import vaccinationHub from "@/assets/gallery/vaccination-hub.jpg";
import premierIftar from "@/assets/gallery/premier-iftar.jpg";
import religiousWorkshop1 from "@/assets/gallery/religious-workshop-1.jpg";
import religiousWorkshop2 from "@/assets/gallery/religious-workshop-2.jpg";
import honourRoll from "@/assets/gallery/honour-roll.jpg";
import electoralRoundtable1 from "@/assets/gallery/electoral-roundtable-1.jpg";
import welcomingAustralia from "@/assets/gallery/welcoming-australia.jpg";
import mosqueOpenDay1 from "@/assets/gallery/mosque-open-day-1.jpg";

// Gallery images with captions exactly as on MYG site
const galleryImages = [
{ id: 1, src: banyuleFestival1, caption: "Cultural Exchange at Banyule Festival – MYG engaged the community with exciting cultural exchanges and activities at the Banyule Festival" },
{ id: 2, src: banyuleFestival2, caption: "Cultural Exchange at Banyule Festival – MYG engaged the community with exciting cultural exchanges and activities at the Banyule Festival" },
{ id: 3, src: banyuleFestival3, caption: "Cultural Exchange at Banyule Festival – MYG engaged the community with exciting cultural exchanges and activities at the Banyule Festival" },
{ id: 4, src: referendumSession1, caption: "Young People Referendum Info Session – MYG partnered with the social policy group to deliver a Young People Referendum Information Session. An event filled with knowledge sharing, empowerment, and engaging discussions on the Constitution, referendums, and the power of voting." },
{ id: 5, src: referendumSession2, caption: "Young People Referendum Info Session – MYG partnered with the social policy group to deliver a Young People Referendum Information Session." },
{ id: 6, src: referendumSession3, caption: "Young People Referendum Info Session – MYG partnered with the social policy group to deliver a Young People Referendum Information Session." },
{ id: 7, src: bulldogsExpo1, caption: "Western Bulldogs Youth Expo – An unforgettable day of connection and empowerment at the Youth Fest in the West Expo. MYG was there, spreading the energy and forging connections with the youth and organizations from across the West of Victoria." },
{ id: 8, src: youthCamp1, caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity." },
{ id: 9, src: youthCamp2, caption: "Multicultural Youth Camp – Through workshops, discussions, and exchanges, participants embraced diversity and forged lasting bonds." },
{ id: 10, src: youthCamp3, caption: "Multicultural Youth Camp – This camp stands as a beacon of unity and inspiration, a testament to the potential within our youth to shape a harmonious future." },
{ id: 11, src: youthCamp4, caption: "Multicultural Youth Camp – The MYG Multicultural Youth Camp brought together 40 vibrant young Victorians for an immersive experience of growth and unity." },
{ id: 12, src: parliamentForum1, caption: "Parliament Youth Forum – MYG had the privilege of joining the 'State of the Future' Youth Forum at Parliament House, where young minds from across Victoria engaged in crucial discussions with lawmakers." },
{ id: 13, src: parliamentForum2, caption: "Parliament Youth Forum – MYG had the privilege of joining the 'State of the Future' Youth Forum at Parliament House." },
{ id: 14, src: parliamentForum3, caption: "Parliament Youth Forum – Young minds from across Victoria engaged in crucial discussions with lawmakers." },
{ id: 15, src: afghanRelief1, caption: "Afghan Relief Support – MYG collaborated with the Department of Justice and Community Safety to deliver care packages for newly arrived Afghan refugees, extending a helping hand during a crucial time." },
{ id: 16, src: afghanRelief2, caption: "Afghan Relief Support – MYG collaborated with the Department of Justice and Community Safety to deliver care packages for newly arrived Afghan refugees." },
{ id: 17, src: crimePrevention, caption: "Community Conversation on Crime Prevention – MYG actively participated in a roundtable discussion on crime prevention in our local government area (LGA). This event brought together government representatives, community leaders, and local council members." },
{ id: 18, src: elsedeaqIftar1, caption: "Elsedeaq Iftar Night – MYG hosted our annual youth dinner and partnered with the Elsedeaq Society to create an inclusive and vibrant event." },
{ id: 19, src: elsedeaqIftar2, caption: "Elsedeaq Iftar Night – MYG hosted our annual youth dinner and partnered with the Elsedeaq Society to create an inclusive and vibrant event." },
{ id: 20, src: elsedeaqIftar3, caption: "Elsedeaq Iftar Night – MYG hosted our annual youth dinner and partnered with the Elsedeaq Society to create an inclusive and vibrant event." },
{ id: 21, src: feccaConference, caption: "FECCA Conference – MYG had the honor of collaborating with FECCA, sending several members to attend the national conference. The theme this year revolved around identity and belonging." },
{ id: 22, src: homeworkClub1, caption: "Homework Club – MYG worked alongside Himilo to deliver a homework club, with our members volunteering to tutor and support younger children in their studies." },
{ id: 23, src: homeworkClub2, caption: "Homework Club – MYG worked alongside Himilo to deliver a homework club, with our members volunteering to tutor and support younger children in their studies." },
{ id: 24, src: soccerTournament1, caption: "Indoor Soccer Tournament – MYG hosted its annual indoor soccer tournament, bringing young people from various LGAs and cultural backgrounds together to share the same stage for a friendly and exciting competition." },
{ id: 25, src: soccerTournament2, caption: "Indoor Soccer Tournament – MYG hosted its annual indoor soccer tournament, bringing young people from various LGAs and cultural backgrounds together." },
{ id: 26, src: womensDay, caption: "International Women's Day – MYG was invited to the International Women's Day celebration, recognizing and applauding the remarkable women in our city who contribute to society in diverse and impactful ways." },
{ id: 27, src: racismRoundtable, caption: "Labour Party Racism Roundtable – MYG was invited to a roundtable with the Labor Party, where discussions revolved around the racism issues faced by multicultural youth. It was a significant opportunity for our members to have their voices heard." },
{ id: 28, src: laserTag, caption: "Laser Tag – MYG hosted a laser tag session for some of our active members. This event was provided for free, offering a fun and engaging experience." },
{ id: 29, src: leadershipAction2, caption: "Multicultural Leadership in Action – MYG was invited to participate in the VMC Multicultural Leadership in Action celebration. Over 600 members of the community engaged in various activities, workshops, and discussions." },
{ id: 30, src: youthIftar, caption: "MYG Youth Iftar – MYG hosted a youth-led iftar night, featuring principals from Merri Creek Management College who spoke about the significance of identity. The event saw a fantastic turnout." },
{ id: 31, src: vaccinationHub, caption: "Pop-up Vaccination Hub – MYG assisted and volunteered at numerous pop-up vaccination hubs, including one at Bell St Mall in Heidelberg." },
{ id: 32, src: premierIftar, caption: "Premier Iftar Dinner – MYG was invited to attend the Victorian Premier's annual iftar dinner." },
{ id: 33, src: religiousWorkshop1, caption: "Religious Identity Workshop – MYG held a recent workshop for multicultural youth, requested by our incredible community. It was a powerful exploration of identity, growth, and self-discovery." },
{ id: 34, src: religiousWorkshop2, caption: "Religious Identity Workshop – MYG held a recent workshop for multicultural youth, requested by our incredible community." },
{ id: 35, src: honourRoll, caption: "VIC Multicultural Honour Roll – MYG was invited to attend the Multicultural Honour Roll event, where our ambassador Sh.alaa was present. It was a great night of recognizing community contributions." },
{ id: 36, src: electoralRoundtable1, caption: "Victorian Electoral Committee Roundtable – MYG was invited to a roundtable to discuss the low voting figures in our communities and ways to make voting more accessible to our communities." },
];


const GalleryPage = () => {
  useJuicerScript();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isLightboxOpen = selectedIndex !== null;
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

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

  // Touch handlers for swipe gestures
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      if (distance > 0) {
        goToNext(); // Swipe left = next
      } else {
        goToPrevious(); // Swipe right = previous
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }, [goToNext, goToPrevious]);

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
      <SEO
        title="Gallery"
        description="Browse photos from MYG events, youth camps, community programs, and multicultural gatherings across Victoria."
        url="/gallery" />

      
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

      {/* Instagram Feed via Juicer.io */}
      <Section className="bg-gradient-to-br from-myg-teal-light via-background to-background">
        <SectionHeader
          eyebrow="Follow Us"
          title="MYG on Instagram"
          description="Stay connected with our latest updates, events, and community highlights." />

        <div className="juicer-feed-wrapper">
          <ul className="juicer-feed" data-feed-id="multiculturalyouthgroup" data-per="9" data-pages="1"></ul>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/multiculturalyouthgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[hsl(37,97%,54%)] via-[hsl(330,70%,50%)] to-[hsl(270,70%,55%)] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">

            Follow @multiculturalyouthgroup
          </a>
        </div>
      </Section>

      {/* Gallery Grid */}
      <Section>
        <SectionHeader
          eyebrow="Photos"
          title="Event Gallery"
          description="Click on any image to view it in full screen. Swipe or use arrow keys to navigate." />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((image, index) =>
          <button
            key={image.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-muted focus-ring min-h-[44px]"
            aria-label={`View ${image.caption.split(" – ")[0]}`}>

              <img
              src={image.src}
              alt={image.caption.split(" – ")[0]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              width={300}
              height={400} />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="text-background text-xs sm:text-sm line-clamp-2">
                    {image.caption.split(" – ")[0]}
                  </p>
                </div>
              </div>
            </button>
          )}
        </div>
      </Section>

      {/* Lightbox */}
      {isLightboxOpen && currentImage &&
      <div
        className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm animate-fade-in"
        onClick={closeLightbox}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>

          {/* Close button */}
          <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 z-10 p-3 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors min-w-[44px] min-h-[44px]"
          aria-label="Close gallery">

            <X className="h-6 w-6" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-background/10 text-background text-sm font-medium">
            {selectedIndex + 1} of {galleryImages.length}
          </div>

          {/* Navigation buttons - hidden on mobile, use swipe instead */}
          <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors min-w-[44px] min-h-[44px]"
          aria-label="Previous image">

            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors min-w-[44px] min-h-[44px]"
          aria-label="Next image">

            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Swipe hint on mobile */}
          <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-background/10 text-background text-xs">
            Swipe to navigate
          </div>

          {/* Main content */}
          <div
          className="flex flex-col items-center justify-center h-full px-4 py-20"
          onClick={(e) => e.stopPropagation()}>

            {/* Image */}
            <div className="relative max-w-5xl max-h-[70vh] w-full flex items-center justify-center">
              <img
              src={currentImage.src}
              alt={currentImage.caption}
              className="max-w-full max-h-[70vh] object-contain rounded-lg" />

            </div>

            {/* Caption */}
            <div className="mt-6 max-w-2xl text-center px-4">
              <p className="text-background/90 text-base sm:text-lg">
                {currentImage.caption}
              </p>
            </div>
          </div>
        </div>
      }
    </Layout>);

};

export default GalleryPage;