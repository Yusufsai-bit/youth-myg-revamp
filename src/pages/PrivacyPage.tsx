import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Section } from "@/components/ui/section";

const PrivacyPage = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Learn how MYG collects, uses, and protects your personal information."
        url="/privacy"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-myg-teal-light via-background to-background">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Legal
            </span>
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Introduction</h2>
          <p>
            Multicultural Youth Group (MYG) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our programs and services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Register for our programs or events</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our website</li>
            <li>Volunteer or become a member</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, and any other details you choose to provide.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Deliver and manage our programs and services</li>
            <li>Send you updates about MYG activities and events</li>
            <li>Respond to your enquiries and requests</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist us in operating our organisation, provided they agree to keep this information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at{" "}
            <a href="mailto:info@myg.org.au" className="text-primary hover:underline">
              info@myg.org.au
            </a>.
          </p>

          <p className="text-sm text-muted-foreground mt-12">
            Last updated: February 2026
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPage;
