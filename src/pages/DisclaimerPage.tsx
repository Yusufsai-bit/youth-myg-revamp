import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Section } from "@/components/ui/section";

const DisclaimerPage = () => {
  return (
    <Layout>
      <SEO
        title="Disclaimer"
        description="Terms and conditions for using the MYG website."
        url="/disclaimer"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-myg-teal-light via-background to-background">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Legal
            </span>
            <h1 className="mb-6">Disclaimer</h1>
            <p className="text-xl text-muted-foreground">
              Terms and conditions for using the MYG website.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Website Disclaimer</h2>
          <p>
            The information provided on the Multicultural Youth Group (MYG) website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
          </p>

          <h2>External Links</h2>
          <p>
            This website may contain links to external websites that are not provided or maintained by MYG. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event will MYG be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>

          <h2>Content Accuracy</h2>
          <p>
            Every effort is made to keep the website running smoothly. However, MYG takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Multicultural Youth Group or its content suppliers and is protected by Australian and international copyright laws.
          </p>

          <h2>Changes to This Disclaimer</h2>
          <p>
            MYG reserves the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at{" "}
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

export default DisclaimerPage;
