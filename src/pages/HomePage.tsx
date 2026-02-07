import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Award, Lightbulb } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import PartnersCarousel from "@/components/PartnersCarousel";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-myg-teal-light via-background to-background">
        <div className="container-page py-20 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="mb-6 animate-fade-in">
                <span className="text-primary">Multicultural</span>
                <br />
                Youth Group
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
                Empowering multicultural youth to connect, lead, and reach their full potential.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
                <Button size="lg" asChild>
                  <Link to="/get-involved">
                    Join MYG <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in animation-delay-400">
              <img
                src="https://myg.org.au/wp-content/uploads/2023/04/Myg-home-2.png"
                alt="Multicultural Youth Group members"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </section>

      {/* About Section */}
      <Section id="about-us-section" className="bg-background">
        <SectionHeader
          eyebrow="About Us"
          title="Welcome to Multicultural Youth Group"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Welcome to Multicultural Youth Group (MYG), a dynamic platform for Victoria's culturally diverse youth to come together, exchange ideas, and receive support on issues affecting them.
            </p>
            <p className="text-lg mb-6">
              We strive to empower young leaders, build intercultural relationships, and participate in capacity-building activities. Through our diverse range of programs and resources, MYG equips young people with the skills and knowledge they need to succeed and make a positive impact in their communities.
            </p>
            <p className="text-lg mb-8">
              If you're looking to grow your leadership, expand your network, or make a difference, MYG is the ideal place for you. Our dedicated team is committed to supporting the growth and development of Victoria's multicultural youth.
            </p>
            <Button asChild>
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.30.57-PM.jpeg"
              alt="MYG event with young people"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* What We Offer */}
      <Section className="bg-secondary">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Programs"
          description="We provide a range of programs designed to develop skills, build connections, and empower young people."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Leadership Training",
              description:
                "Develop essential leadership skills through workshops, training sessions, and hands-on experiences.",
              href: "/programs",
            },
            {
              icon: Heart,
              title: "Volunteer Connect",
              description:
                "Connect with volunteer opportunities that allow you to give back and make a real difference in your community.",
              href: "/programs",
            },
            {
              icon: Award,
              title: "MentorMax",
              description:
                "Get matched with experienced mentors who can guide you on your personal and professional journey.",
              href: "/programs",
            },
          ].map((program) => (
            <Card key={program.title} className="card-hover border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <program.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <Link
                  to={program.href}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Members Section */}
      <Section>
        <SectionHeader
          eyebrow="Our Community"
          title="Meet the Young Leaders"
          description="The Multicultural Youth Group is made up of a diverse community of young leaders who are passionate about creating positive change."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.32.41-PM.jpeg",
              alt: "MYG member at Western Bulldogs Youth Expo",
            },
            {
              image: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-4.05.21-PM.jpeg",
              alt: "MYG members engaging at event",
            },
            {
              image: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.41.32-PM.jpeg",
              alt: "MYG community gathering",
            },
            {
              image: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.30.57-PM.jpeg",
              alt: "MYG member participating in activities",
            },
          ].map((member, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[3/4]">
              <img
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/gallery">View Gallery</Link>
          </Button>
        </div>
      </Section>

      {/* Partners Section */}
      <Section className="bg-secondary">
        <SectionHeader
          eyebrow="Our Partners"
          title="Empowering Young People Together"
          description="We collaborate with a diverse range of organisations to support our mission."
        />
        <PartnersCarousel
          partners={[
            { src: "https://myg.org.au/wp-content/uploads/2023/10/sumali-australian-councel.png", alt: "Somali Australian Council" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/MelbourneFashionWeek.png", alt: "Melbourne Fashion Week" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/bansic.png", alt: "BANSIC" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/himilo-logo.png", alt: "Himilo" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/Banyule_Logo.png", alt: "Banyule City Council" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/Melbourne_Victory.png", alt: "Melbourne Victory" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/County_Court_of_Victoria.png", alt: "County Court of Victoria" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/rcaa-web-logo.png", alt: "RCAA" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/victoriya-police.png", alt: "Victoria Police" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/southern-migrant-and-refugee-center.png", alt: "Southern Migrant and Refugee Centre" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/Football_Victoria_logo.png", alt: "Football Victoria" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/crime-stopers.png", alt: "Crime Stoppers" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/city-of-darebin.png", alt: "City of Darebin" },
            { src: "https://myg.org.au/wp-content/uploads/2023/10/small-victoriya.png", alt: "Small Business Victoria" },
          ]}
        />
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/get-involved">Become a Partner</Link>
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-primary-foreground mb-6">Join Our Community</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Ready to connect, learn, and lead? Join Multicultural Youth Group today and become part of a thriving community of young leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default HomePage;
