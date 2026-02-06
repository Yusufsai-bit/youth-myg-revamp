import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Award, Lightbulb, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section - MYAN inspired split layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Left side - Image */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent z-10 lg:hidden" />
          <img
            src="https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.30.57-PM.jpeg"
            alt="MYG youth gathering"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right side - Content */}
        <div className="relative z-10 w-full">
          <div className="container-page">
            <div className="lg:ml-auto lg:w-1/2 lg:pl-16">
              <div className="bg-primary/95 lg:bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 rounded-3xl lg:rounded-none lg:rounded-l-3xl shadow-2xl">
                <h1 className="text-primary-foreground mb-6 animate-fade-in">
                  Welcome to MYG
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in animation-delay-200">
                  Empowering multicultural youth to connect, lead, and reach their full potential.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/about">
                      About MYG <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link to="/get-involved">Join Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - CMY inspired statement */}
      <Section className="bg-background">
        <div className="container-narrow text-center">
          <p className="statement-text text-foreground animate-fade-in">
            A dynamic platform for Victoria's culturally diverse youth to{" "}
            <span className="text-highlight">come together</span>, exchange ideas, and receive support on issues affecting them.
          </p>
        </div>
      </Section>

      {/* Focus Areas - MYAN inspired colorful cards */}
      <Section className="bg-muted">
        <SectionHeader
          eyebrow="Our Focus Areas"
          title="What We Do"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Lightbulb,
              title: "Leadership Training",
              description: "Develop essential leadership skills through workshops and hands-on experiences.",
              color: "card-teal",
              href: "/programs#leadership-training",
            },
            {
              icon: Heart,
              title: "Volunteer Connect",
              description: "Connect with volunteer opportunities that make a real difference in your community.",
              color: "card-coral",
              href: "/programs#volunteer-connect",
            },
            {
              icon: Award,
              title: "MentorMax",
              description: "Get matched with experienced mentors for personal and professional growth.",
              color: "card-purple",
              href: "/programs#mentormax",
            },
            {
              icon: Users,
              title: "Community Building",
              description: "Build intercultural relationships and participate in capacity-building activities.",
              color: "card-yellow",
              href: "/about",
            },
          ].map((item, idx) => (
            <Link
              key={item.title}
              to={item.href}
              className={`card-colorful ${item.color} card-hover group`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <item.icon className="h-10 w-10 mb-6 opacity-90" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="opacity-90 text-sm leading-relaxed mb-4">{item.description}</p>
              <span className="inline-flex items-center text-sm font-semibold group-hover:gap-2 transition-all">
                Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">About MYG</span>
            <h2 className="mb-6">
              Building Tomorrow's <span className="text-highlight-yellow">Leaders</span> Today
            </h2>
            <p className="text-lg mb-6">
              The Multicultural Youth Group (MYG) is made up of a diverse community of young leaders who are passionate about creating positive change and making a difference in their communities.
            </p>
            <p className="text-lg mb-8">
              Our members come from a variety of backgrounds, but they all share a commitment to empowering their peers and making a positive impact. Through our diverse range of programs and resources, MYG equips young people with the skills and knowledge they need to succeed.
            </p>
            <Button size="lg" asChild>
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-accent-coral/20 rounded-3xl" />
            <img
              src="https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.14-PM-1.jpeg"
              alt="MYG members at an event"
              className="relative w-full h-auto rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section className="bg-foreground text-background">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.32.41-PM.jpeg",
                "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.13-PM.jpeg",
              ].map((src, idx) => (
                <div key={idx} className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt={`Gallery preview ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-coral mb-4 block">
              Our Moments
            </span>
            <h2 className="text-background mb-6">
              Capturing Connections
            </h2>
            <p className="text-background/80 text-lg mb-8">
              Browse through our collection of memories from MYG events, programs, and community gatherings. See our young leaders in action.
            </p>
            <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10" asChild>
              <Link to="/gallery">
                View Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Partners Section */}
      <Section>
        <SectionHeader
          eyebrow="Our Partners"
          title="Collaborating for Impact"
          description="We work with a diverse range of organisations to support our mission of empowering multicultural youth."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {[
            { src: "https://myg.org.au/wp-content/uploads/2023/10/sumali-australian-councel.png", alt: "Somali Australian Council" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/Banyule_Logo.png", alt: "Banyule City Council" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/Melbourne_Victory.png", alt: "Melbourne Victory" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/victoriya-police.png", alt: "Victoria Police" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/Football_Victoria_logo.png", alt: "Football Victoria" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/city-of-darebin.png", alt: "City of Darebin" },
          ].map((partner) => (
            <div key={partner.alt} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/get-involved#partner">Become a Partner</Link>
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent-purple/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-background rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-background rounded-full blur-3xl" />
        </div>
        <div className="container-page relative z-10 text-center">
          <h2 className="text-primary-foreground mb-6">Join Our Community</h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Ready to connect, learn, and lead? Become part of a thriving community of young leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
