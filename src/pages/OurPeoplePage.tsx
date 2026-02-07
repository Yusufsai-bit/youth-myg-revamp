import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Linkedin, Globe } from "lucide-react";

// Board member images
import tasneemChopraImg from "@/assets/board/tasneem-chopra.jpg";

interface BoardMember {
  name: string;
  role: string;
  shortSummary: string;
  bio: string;
  linkedin?: string;
  website?: string;
  image?: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "Leela Gray",
    role: "Board Member",
    shortSummary: "Senior policy and advocacy leader focused on Aboriginal youth justice and bicultural leadership.",
    bio: "Leela Gray is a Senior Policy and Advocacy Officer at the Commission for Children and Young People. She brings strong experience in policy and advocacy, with a clear focus on improving outcomes for young people. Leela is a champion of Aboriginal youth justice and bicultural leadership, and she is committed to ensuring systems are safer, fairer, and more responsive to the needs of young people and communities. Through her work, she supports approaches that centre voice, lived experience, and cultural strength. Leela contributes a grounded understanding of how policy and systems can better support multicultural young people, and she brings a strong commitment to equity, accountability, and meaningful change.",
  },
  {
    name: "Krushnadevsinh (Kano) Ravalji",
    role: "Board Member",
    shortSummary: "Founder of Third Culture Australia and community advocate for belonging, wellbeing and representation.",
    bio: "Krushnadevsinh (Kano) Ravalji is the founder of Third Culture Australia and a former Youth Commissioner at the Victorian Multicultural Commission. A recognised advocate and changemaker, Kano has worked across the multicultural and wellbeing sectors to elevate diverse voices and improve community outcomes. He has led mental health and wellbeing programs for international students, delivered in language health initiatives and co design projects during COVID, and collaborated with the Victorian Electoral Commission to strengthen civic participation among multicultural communities. As a regular contributor to national radio and media, Kano brings an authentic voice to conversations on belonging, wellbeing, and representation. Through Third Culture, he has delivered award winning programs that empower young people and communities to lead meaningful change.",
    linkedin: "https://www.linkedin.com/in/kanoravalji/",
    website: "https://www.thirdculture.com.au/",
  },
  {
    name: "Yasmin Poole",
    role: "Board Member",
    shortSummary: "Policy leader and youth advocate focused on intersectional change and gender equity.",
    bio: "Yasmin Poole seeks to challenge policymakers to think differently. Her vision is for Australia to become a global leader in intersectional policymaking, with a Parliament that truly reflects the diversity of our communities. Yasmin is a Manager at MindTribes focusing on intersectional anti racism strategy. She is Plan International's National Ambassador, advocating for young women's human rights. She is the Non Executive Board Director of OzHarvest and the Australian Republic Movement. She also sits on the Law Advisory Board of the University of Wollongong and the Advocacy, Stakeholder Engagement and Fundraising Committee for the Multicultural Centre for Women's Health. Yasmin holds a Master of Public Policy and a Master of Women's, Gender and Sexuality Studies from the University of Oxford, where she studied on a Rhodes Scholarship.",
    linkedin: "https://www.linkedin.com/in/yasmin-poole/",
  },
  {
    name: "Yusuf Liban",
    role: "Board Member",
    shortSummary: "Youth leader and community advocate focused on refugee empowerment and multicultural engagement.",
    bio: "Yusuf Liban is a youth leader and community advocate with a strong focus on refugee empowerment and multicultural engagement. He is committed to creating practical pathways for young people to build confidence, connection, and leadership capability. Yusuf brings deep insight into the experiences and aspirations of multicultural young people, and he supports approaches that strengthen belonging and representation across communities and mainstream platforms. Yusuf is a finalist for the 2025 Australian of the Year. He is passionate about building programs and partnerships that help young people turn ideas into action and create lasting community impact.",
    linkedin: "https://www.linkedin.com/in/yusuf-liban/",
  },
  {
    name: "Hakan Akyol",
    role: "Board Member",
    shortSummary: "Senior multicultural affairs leader with extensive public service experience.",
    bio: "Hakan Akyol is the Executive Director at the Australian Multicultural Foundation Research Trust. He brings decades of experience in multicultural affairs and public service leadership, with a strong understanding of how government, community organisations, and institutions can work together to strengthen inclusion and social cohesion. Hakan's work reflects a commitment to supporting multicultural communities through thoughtful engagement and long term capability building. He contributes strategic oversight, governance maturity, and a clear focus on sustainable impact. Hakan supports MYG to build strong partnerships, strengthen organisational foundations, and ensure the organisation is positioned to scale its work in a way that remains community led and youth centred.",
    linkedin: "https://www.linkedin.com/in/hakan-akyol-0b1b1b1b/",
  },
  {
    name: "Tasneem Chopra OAM",
    role: "Board Member",
    shortSummary: "Cross cultural consultant and equity advocate working across government, corporate and community sectors.",
    bio: "Tasneem Chopra is a cross cultural consultant who addresses issues of equity and belonging through an intersectional lens across government, corporate, arts and not for profit sectors within Australia and overseas. She supports organisations with diversity and inclusion policy as an industry expert, delivers workshops, curates exhibitions and promotes social change towards greater cultural inclusion. Tasneem is also an accomplished MC and keynote speaker. As a commentator her expertise has been sought on leadership, cultural inclusion, gender justice, intersectionality, migration, social cohesion and social justice. For her efforts she was appointed inaugural Ambassador for Women of Colour, Australia, is a former Anti Racism Champion with the Australian Human Rights Commission and was awarded an Order of Australia Medal.",
    linkedin: "https://www.linkedin.com/in/tasneemchopra/",
    website: "https://tasneemchopra.com/",
    image: tasneemChopraImg,
  },
  {
    name: "Aynur Simsirel",
    role: "Board Member",
    shortSummary: "Education leader and CEO with deep governance experience and a focus on inclusive schooling.",
    bio: "Aynur Simsirel is the CEO of Ilim College and has over 20 years of experience in education leadership and governance. She brings a strong commitment to inclusive schooling and interfaith dialogue, and she understands the role education can play in building belonging, confidence, and opportunity for young people. Aynur's leadership experience supports practical youth development and the conditions young people need to thrive. She contributes a focus on strong governance, organisational sustainability, and programs that are safe, inclusive, and high quality. Aynur is passionate about supporting young people to build leadership skills, strengthen connection across communities, and engage confidently in education, work, and civic life.",
    linkedin: "https://www.linkedin.com/in/aynur-simsirel/",
  },
  {
    name: "Jamad Hersi",
    role: "Board Member",
    shortSummary: "Strategist and public sector leader focused on community engagement, equity and youth empowerment.",
    bio: "Jamad Hersi is a strategist and former Manager at the Victorian Multicultural Commission. She is a respected leader in community engagement, policy, and diversity, and she has championed inclusive practice across government. Jamad has co chaired the Victorian Public Sector Women of Colour Network, advocating for equity and representation in public service. She currently works with the Department of Justice and Community Safety in the early youth crime prevention space, focusing on proactive approaches to community safety and youth empowerment. Jamad brings strong systems thinking and a practical understanding of how youth voice can inform better policy and services. She supports strengthening partnerships, elevating lived experience, and expanding pathways for multicultural young people to lead.",
    linkedin: "https://www.linkedin.com/in/jamad-hersi/",
  },
];

const BoardMemberCard = ({ member }: { member: BoardMember }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image or Placeholder */}
      <div className="aspect-[4/5] bg-muted flex items-center justify-center overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted-foreground/10 flex items-center justify-center">
              <span className="text-4xl text-muted-foreground/40">
                {member.name.charAt(0)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Image coming soon</p>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Name and Role */}
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-sm font-medium text-primary mb-3">{member.role}</p>

        {/* Short Summary */}
        <p className="text-muted-foreground text-sm mb-4">{member.shortSummary}</p>

        {/* Expandable Bio */}
        <div className="mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
          >
            {isExpanded ? (
              <>
                Read less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>

          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-border animate-fade-in">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 pt-4 border-t border-border">
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Linkedin className="h-4 w-4" />
              LinkedIn link to be added
            </span>
          )}

          {member.website ? (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Globe className="h-4 w-4" />
              Website
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              Website link to be added
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const OurPeoplePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 md:py-28 lg:py-32">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our People
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A dedicated Board supporting multicultural young people to connect, grow and lead.
            </p>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <Section className="bg-background">
        <SectionHeader
          eyebrow="Leadership"
          title="Meet the Board"
          description="Our Board brings together experienced leaders from across policy, education, community development, and advocacy to guide MYG's mission."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <BoardMemberCard key={member.name} member={member} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default OurPeoplePage;
