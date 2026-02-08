import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowRight, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const suggestedLinks = [
    { name: "Home", href: "/", description: "Go back to the home page" },
    { name: "About Us", href: "/about", description: "Learn about MYG" },
    { name: "Programs", href: "/programs", description: "Explore our programs" },
    { name: "Gallery", href: "/gallery", description: "View event photos" },
    { name: "Contact", href: "/contact", description: "Get in touch with us" },
  ];

  return (
    <Layout>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Find your way back to MYG."
      />
      <section className="min-h-[70vh] flex items-center justify-center py-16">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8">
              It seems we can't find what you're looking for. The page may have been moved, deleted, or doesn't exist.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Suggested Pages */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">
              Maybe you were looking for:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestedLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group p-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{link.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
