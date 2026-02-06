import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Heart, Award, Star, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const programs = [
  {
    id: "leadership-training",
    icon: Lightbulb,
    title: "Leadership Training",
    shortDesc: "Develop essential leadership skills through workshops and hands-on experiences.",
    fullDesc: "Our Leadership Training program is designed to help young people develop the skills they need to become effective leaders in their communities. Through a series of workshops, training sessions, and hands-on experiences, participants learn about communication, team building, problem-solving, and more.",
    features: [
      "Interactive workshops and training sessions",
      "Hands-on leadership experiences",
      "Communication and public speaking skills",
      "Team building and collaboration",
      "Problem-solving and decision making",
      "Networking opportunities with other young leaders",
    ],
    color: "card-teal",
    image: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.31.14-PM-1.jpeg",
  },
  {
    id: "volunteer-connect",
    icon: Heart,
    title: "Volunteer Connect",
    shortDesc: "Connect with volunteer opportunities that make a real difference.",
    fullDesc: "Volunteer Connect helps young people find meaningful volunteer opportunities in their communities. We partner with a range of organisations to offer diverse volunteering experiences. Volunteering is a great way to give back, develop new skills, and meet like-minded people.",
    features: [
      "Diverse volunteer opportunities",
      "Skills development through service",
      "Community engagement and connection",
      "Flexible volunteering options",
      "Recognition for volunteer contributions",
      "Networking with community organisations",
    ],
    color: "card-coral",
    image: "https://myg.org.au/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-3.30.57-PM.jpeg",
  },
  {
    id: "mentormax",
    icon: Award,
    title: "MentorMax",
    shortDesc: "Get matched with experienced mentors for personal and professional growth.",
    fullDesc: "MentorMax connects young people with experienced mentors who can provide guidance, support, and advice on their personal and professional journeys. Our mentors come from a variety of backgrounds and industries, and are committed to helping young people achieve their goals.",
    features: [
      "One-on-one mentoring relationships",
      "Mentors from diverse industries and backgrounds",
      "Career guidance and advice",
      "Personal development support",
      "Goal setting and accountability",
      "Networking and professional connections",
    ],
    color: "card-purple",
    image: "https://myg.org.au/wp-content/uploads/2023/04/pexels-fauxels-3184301-scaled-830x647.jpg",
  },
];

const ProgramsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-muted overflow-hidden">
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Our Programs</span>
            <h1 className="mb-6">
              Programs That <span className="text-highlight">Empower</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We provide a range of programs designed to develop skills, build connections, and empower young people to reach their full potential.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent-coral rounded-full blur-3xl" />
        </div>
      </section>

      {/* Programs Overview - Colorful cards */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <a
              key={program.id}
              href={`#${program.id}`}
              className={`card-colorful ${program.color} card-hover group`}
            >
              <program.icon className="h-12 w-12 mb-6 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
              <p className="opacity-90 mb-6">{program.shortDesc}</p>
              <span className="inline-flex items-center font-semibold group-hover:gap-2 transition-all">
                Learn more <ArrowUpRight className="ml-1 h-5 w-5" />
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Detailed Program Sections */}
      {programs.map((program, idx) => (
        <Section
          key={program.id}
          id={program.id}
          className={idx % 2 === 0 ? "bg-muted" : "bg-background"}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  idx === 0 ? "bg-primary text-primary-foreground" :
                  idx === 1 ? "bg-accent-coral text-white" :
                  "bg-accent-purple text-white"
                }`}>
                  <program.icon className="h-7 w-7" />
                </div>
              </div>
              <h2 className="mb-6">{program.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {program.fullDesc}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {program.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Star className={`h-5 w-5 shrink-0 ${
                      idx === 0 ? "text-primary" :
                      idx === 1 ? "text-accent-coral" :
                      "text-accent-purple"
                    }`} />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" asChild>
                <Link to="/get-involved">
                  Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <div className="relative">
                <div className={`absolute -top-4 ${idx % 2 === 0 ? "-right-4" : "-left-4"} w-full h-full rounded-3xl ${
                  idx === 0 ? "bg-primary/20" :
                  idx === 1 ? "bg-accent-coral/20" :
                  "bg-accent-purple/20"
                }`} />
                <img
                  src={program.image}
                  alt={program.title}
                  className="relative w-full h-auto rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-coral via-accent-purple to-primary" />
        <div className="container-page relative z-10 text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join one of our programs today and start your journey towards leadership, connection, and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/get-involved">Join Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramsPage;
