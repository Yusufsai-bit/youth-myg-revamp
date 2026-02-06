import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Handshake, Gift, CheckCircle, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const ways = [
  {
    id: "member",
    icon: Users,
    title: "Join as a Member",
    description: "Become part of our thriving community of young leaders.",
    benefits: [
      "Access to all MYG programs and events",
      "Networking opportunities with peers",
      "Leadership development resources",
      "Priority access to workshops",
      "Join a supportive community",
    ],
    color: "card-teal",
  },
  {
    id: "volunteer",
    icon: Heart,
    title: "Volunteer With Us",
    description: "Give your time and skills to support our mission.",
    benefits: [
      "Meaningful volunteer opportunities",
      "Develop new skills and experience",
      "Make a real difference",
      "Flexible volunteering options",
      "Recognition for your contributions",
    ],
    color: "card-coral",
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Partner With Us",
    description: "Collaborate with MYG to support multicultural youth.",
    benefits: [
      "Program co-delivery opportunities",
      "Event sponsorship options",
      "Mentorship connections",
      "Community engagement",
      "Brand visibility with youth audience",
    ],
    color: "card-purple",
  },
  {
    id: "donate",
    icon: Gift,
    title: "Donate",
    description: "Support our work with a financial contribution.",
    benefits: [
      "Fund youth programs and events",
      "Support leadership development",
      "Enable community initiatives",
      "Create lasting impact",
      "Tax-deductible contributions",
    ],
    color: "card-yellow",
  },
];

const GetInvolvedPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-foreground text-background overflow-hidden">
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-coral mb-4 block">
              Get Involved
            </span>
            <h1 className="text-background mb-6">
              Make a Difference
            </h1>
            <p className="text-xl text-background/80">
              There are many ways to be part of the Multicultural Youth Group community. Your contribution makes a difference.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent-coral rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
      </section>

      {/* Ways to Get Involved - Colorful cards */}
      <Section>
        <SectionHeader
          eyebrow="Join Our Community"
          title="Ways to Get Involved"
          description="Choose how you would like to contribute to our mission of empowering multicultural youth."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {ways.map((way) => (
            <div key={way.id} id={way.id} className={`card-colorful ${way.color} p-10`}>
              <way.icon className="h-12 w-12 mb-6 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">{way.title}</h3>
              <p className="opacity-90 mb-6">{way.description}</p>
              <ul className="space-y-3 mb-8">
                {way.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 opacity-80" />
                    <span className="opacity-90 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="secondary"
                className="w-full rounded-full"
                asChild
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Partners Section */}
      <Section className="bg-muted">
        <SectionHeader
          eyebrow="Our Partners"
          title="Empowering Young People Together"
          description="Over the years, MYG has had the privilege to collaborate with a diverse range of organisations."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-16">
          {[
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
          ].map((partner) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Partner CTA Card */}
        <div className="bg-background rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-14">
              <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
              <p className="text-muted-foreground text-lg mb-8">
                We're always looking to expand our network of partners and collaborate with new organisations and businesses. Contact us to learn more.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Contact Us <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative min-h-[300px]">
              <img
                src="https://myg.org.au/wp-content/uploads/2023/04/pexels-fauxels-3184301-scaled-830x647.jpg"
                alt="Partners collaborating"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent-mint to-accent-sky" />
        <div className="container-page relative z-10 text-center">
          <h2 className="text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today to learn more about how you can get involved and make a difference.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolvedPage;
