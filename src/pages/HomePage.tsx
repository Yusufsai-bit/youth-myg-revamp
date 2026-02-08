import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Award, Lightbulb } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

// Import hero image
import heroImage from "@/assets/home/myg-hero-filming.png";
// Import verified gallery images for reliability
import banyuleFestival1 from "@/assets/gallery/banyule-festival-1.jpeg";
import banyuleFestival2 from "@/assets/gallery/banyule-festival-2.jpeg";
import referendumSession from "@/assets/gallery/referendum-session-1.jpeg";
import youthCamp from "@/assets/gallery/youth-camp-1.jpg";
import parliamentForum from "@/assets/gallery/parliament-forum-1.jpg";

const HomePage = () => {
  return (
    <Layout>
      <SEO
        description="Empowering Multicultural Youth Leaders across Australia through education, advocacy, and community engagement. Join MYG today."
        url="/"
      />
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
                src={heroImage}
                alt="MYG member being filmed at community event booth"
                className="w-full h-auto rounded-2xl shadow-2xl"
                width={800}
                height={600}
                loading="eager"
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
              src={banyuleFestival1}
              alt="MYG members at Banyule Multicultural Festival"
              className="w-full h-auto rounded-2xl shadow-xl"
              width={800}
              height={600}
              loading="lazy"
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
              image: referendumSession,
              alt: "MYG members at Referendum information session",
            },
            {
              image: banyuleFestival2,
              alt: "MYG members engaging at Banyule Festival",
            },
            {
              image: youthCamp,
              alt: "MYG community gathering at youth camp",
            },
            {
              image: parliamentForum,
              alt: "MYG members at Parliament House forum",
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
