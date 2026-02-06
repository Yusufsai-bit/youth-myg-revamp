import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section - Split layout like MYAN */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-0">
          <img
            src="https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.14-PM-1.jpeg"
            alt="MYG members"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/80 to-background lg:via-transparent lg:from-transparent" />
        
        <div className="container-page relative z-10">
          <div className="lg:ml-auto lg:w-1/2 lg:pl-16">
            <span className="eyebrow">About Us</span>
            <h1 className="mb-6">
              Empowering Victoria's <span className="text-highlight">Multicultural Youth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are a dynamic platform for culturally diverse young people to come together, exchange ideas, and receive support on issues affecting them.
            </p>
            <Button size="lg" asChild>
              <Link to="/get-involved">
                Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Statement */}
      <Section className="bg-muted">
        <div className="container-narrow text-center">
          <p className="statement-text text-foreground">
            We strive to <span className="text-highlight-yellow">empower young leaders</span>, build intercultural relationships, and participate in capacity-building activities.
          </p>
        </div>
      </Section>

      {/* Mission & Vision - Colorful cards like MYAN */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-colorful card-teal p-10">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              To empower multicultural youth by providing opportunities for connection, leadership development, and community engagement. We equip young people with the skills and knowledge they need to succeed and make a positive impact.
            </p>
          </div>
          <div className="card-colorful card-purple p-10">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              A Victoria where every young person from a multicultural background has the opportunity to connect, lead, and reach their full potential, contributing to a vibrant and inclusive society.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="bg-foreground text-background">
        <SectionHeader
          eyebrow="What We Do"
          title="Supporting Young People"
          className="[&_span]:text-accent-coral [&_h2]:text-background"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Build intercultural relationships and understanding",
            "Develop leadership skills and confidence",
            "Provide mentorship and guidance",
            "Create volunteer opportunities",
            "Support capacity-building activities",
            "Foster community engagement",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-background/5 border border-background/10">
              <CheckCircle className="h-6 w-6 text-accent-coral shrink-0 mt-1" />
              <p className="text-background font-medium">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Our People */}
      <Section>
        <SectionHeader
          eyebrow="Our Community"
          title="Meet the Young Leaders"
          description="Get to know the individuals who make up the Multicultural Youth Group."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.32.41-PM.jpeg",
              title: "Our Members",
              desc: "Passionate young leaders from diverse backgrounds driving positive change.",
              color: "bg-accent-coral",
            },
            {
              image: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.30.57-PM.jpeg",
              title: "Our Volunteers",
              desc: "Dedicated individuals giving their time to support our community.",
              color: "bg-accent-purple",
            },
            {
              image: "https://myg.org.au/wp-content/uploads/2023/04/pexels-fauxels-3184301-scaled-830x647.jpg",
              title: "Our Mentors",
              desc: "Experienced professionals guiding the next generation of leaders.",
              color: "bg-primary",
            },
          ].map((person, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-square overflow-hidden rounded-3xl mb-6">
                <img
                  src={person.image}
                  alt={person.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute bottom-0 left-0 right-0 h-2 ${person.color}`} />
              </div>
              <h4 className="text-xl font-bold mb-2">{person.title}</h4>
              <p className="text-muted-foreground">{person.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent-mint/80" />
        <div className="container-page relative z-10 text-center">
          <h2 className="text-primary-foreground mb-6">Join Us Today</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            If you're looking to grow your leadership, expand your network, or make a difference, MYG is the ideal place for you.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/get-involved">
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
