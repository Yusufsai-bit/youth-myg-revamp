import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-myg-teal-light via-background to-background">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="mb-6">
              Empowering Victoria's Multicultural Youth
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a dynamic platform for culturally diverse young people to come together, exchange ideas, and receive support on issues affecting them.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Welcome to Multicultural Youth Group</h2>
            <p className="text-lg mb-6">
              Welcome to Multicultural Youth Group (MYG), a dynamic platform for Victoria's culturally diverse youth to come together, exchange ideas, and receive support on issues affecting them.
            </p>
            <p className="text-lg mb-6">
              We strive to empower young leaders, build intercultural relationships, and participate in capacity-building activities. Through our diverse range of programs and resources, MYG equips young people with the skills and knowledge they need to succeed and make a positive impact in their communities.
            </p>
            <p className="text-lg">
              Our members come from a variety of backgrounds, but they all share a commitment to empowering their peers and making a positive impact. Our members are driven and dedicated, and they are making a difference in their communities every day.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.14-PM-1.jpeg"
              alt="MYG members at an event"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-secondary">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To empower multicultural youth by providing opportunities for connection, leadership development, and community engagement. We equip young people with the skills and knowledge they need to succeed and make a positive impact.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                A Victoria where every young person from a multicultural background has the opportunity to connect, lead, and reach their full potential, contributing to a vibrant and inclusive society.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* What We Do */}
      <Section>
        <SectionHeader
          eyebrow="What We Do"
          title="Supporting Young People"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Build intercultural relationships and understanding",
            "Develop leadership skills and confidence",
            "Provide mentorship and guidance",
            "Create volunteer opportunities",
            "Support capacity-building activities",
            "Foster community engagement",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-secondary">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
              <p className="text-foreground font-medium">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-secondary">
        <SectionHeader
          eyebrow="Our Community"
          title="Meet the Young Leaders"
          description="Get to know the individuals who make up the Multicultural Youth Group."
        />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-muted">
              <img
                src="https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.18-PM.jpeg"
                alt="MYG member"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Our Members</h4>
            <p className="text-muted-foreground">
              Passionate young leaders from diverse backgrounds driving positive change.
            </p>
          </div>
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-muted">
              <img
                src="https://myg.org.au/wp-content/uploads/2023/10/Multicultural-Leadership-in-Action-1.jpg"
                alt="MYG volunteers"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Our Volunteers</h4>
            <p className="text-muted-foreground">
              Dedicated individuals giving their time to support our community.
            </p>
          </div>
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-muted">
              <img
                src="https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.32.02-PM.jpeg"
                alt="MYG mentors"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Our Mentors</h4>
            <p className="text-muted-foreground">
              Experienced professionals guiding the next generation of leaders.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-primary-foreground mb-6">Join Us Today</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            If you're looking to grow your leadership, expand your network, or make a difference, MYG is the ideal place for you.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/get-involved">
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;
