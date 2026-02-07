import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Heart, Award, Users, Star, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

const programs = [
  {
    id: "leadership-training",
    icon: Lightbulb,
    title: "Leadership Training",
    shortDesc: "Develop essential leadership skills through workshops and hands-on experiences.",
    fullDesc: "Our Leadership Training program is designed to help young people develop the skills they need to become effective leaders in their communities. Through a series of workshops, training sessions, and hands-on experiences, participants learn about communication, team building, problem-solving, and more. The program is open to all young people who are interested in developing their leadership potential.",
    features: [
      "Interactive workshops and training sessions",
      "Hands-on leadership experiences",
      "Communication and public speaking skills",
      "Team building and collaboration",
      "Problem-solving and decision making",
      "Networking opportunities with other young leaders",
    ],
  },
  {
    id: "volunteer-connect",
    icon: Heart,
    title: "Volunteer Connect",
    shortDesc: "Connect with volunteer opportunities that make a real difference.",
    fullDesc: "Volunteer Connect helps young people find meaningful volunteer opportunities in their communities. We partner with a range of organisations to offer diverse volunteering experiences, from community events to ongoing programs. Volunteering is a great way to give back, develop new skills, and meet like-minded people who share your passion for making a difference.",
    features: [
      "Diverse volunteer opportunities",
      "Skills development through service",
      "Community engagement and connection",
      "Flexible volunteering options",
      "Recognition for volunteer contributions",
      "Networking with community organisations",
    ],
  },
  {
    id: "mentormax",
    icon: Award,
    title: "MentorMax",
    shortDesc: "Get matched with experienced mentors for personal and professional growth.",
    fullDesc: "MentorMax connects young people with experienced mentors who can provide guidance, support, and advice on their personal and professional journeys. Our mentors come from a variety of backgrounds and industries, and are committed to helping young people achieve their goals. Whether you're looking for career advice, personal development support, or just someone to talk to, MentorMax can help.",
    features: [
      "One-on-one mentoring relationships",
      "Mentors from diverse industries and backgrounds",
      "Career guidance and advice",
      "Personal development support",
      "Goal setting and accountability",
      "Networking and professional connections",
    ],
  },
];

const ProgramsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-myg-teal-light via-background to-background">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Programs
            </span>
            <h1 className="mb-6">Programs That Empower</h1>
            <p className="text-xl text-muted-foreground">
              We provide a range of programs designed to develop skills, build connections, and empower young people to reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <Card key={program.id} className="card-hover border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <program.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.shortDesc}</p>
                <a
                  href={`#${program.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Detailed Program Sections */}
      {programs.map((program, idx) => (
        <Section
          key={program.id}
          id={program.id}
          className={idx % 2 === 0 ? "bg-secondary" : "bg-background"}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <program.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mb-0">{program.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                {program.fullDesc}
              </p>
              <div className="space-y-4 mb-8">
                {program.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/get-involved">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <img
                src={
                  idx === 0
                    ? "https://myg.org.au/wp-content/uploads/2023/10/Multicultural-Leadership-in-Action-1.jpg"
                    : idx === 1
                    ? "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.30.57-PM.jpeg"
                    : "https://myg.org.au/wp-content/uploads/2023/04/pexels-fauxels-3184301-scaled-830x647.jpg"
                }
                alt={program.title}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-primary-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join one of our programs today and start your journey towards leadership, connection, and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/get-involved">Join Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ProgramsPage;
