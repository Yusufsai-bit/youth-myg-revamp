import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Handshake, Gift, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Import local images
import mygEvent1 from "@/assets/home/myg-event-1.jpeg";

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
  },
];

const GetInvolvedPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-myg-teal-light via-background to-background">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Get Involved
            </span>
            <h1 className="mb-6">Make a Difference</h1>
            <p className="text-xl text-muted-foreground">
              There are many ways to be part of the Multicultural Youth Group community. Whether you want to join as a member, volunteer, partner, or donate, your contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <Section>
        <SectionHeader
          eyebrow="Join Our Community"
          title="Ways to Get Involved"
          description="Choose how you would like to contribute to our mission of empowering multicultural youth."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {ways.map((way) => (
            <Card key={way.id} id={way.id} className="card-hover border shadow-sm">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <way.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">{way.title}</CardTitle>
                <CardDescription className="text-base">
                  {way.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {way.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Partners Section */}
      <Section className="bg-secondary">
        <SectionHeader
          eyebrow="Our Partners"
          title="Empowering Young People Together"
          description="Over the years, MYG has had the privilege to work with and collaborate with a diverse range of organisations."
        />
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking to expand our network of partners and collaborate with new organisations and businesses. If you're interested in learning more about how you can become a partner, please contact us.
              </p>
              <p className="text-muted-foreground mb-6">
                Our partners include Somali Australian Council, Melbourne Fashion Week, BANSIC, Himilo, Banyule City Council, Melbourne Victory, County Court of Victoria, RCAA, Victoria Police, Southern Migrant and Refugee Centre, Football Victoria, Crime Stoppers, City of Darebin, and Small Business Victoria.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src={mygEvent1}
                alt="MYG partners collaborating"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-primary-foreground mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us today to learn more about how you can get involved and make a difference in the lives of multicultural youth.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default GetInvolvedPage;
