import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import mygLogo from "@/assets/myg-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - connect to backend later
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for subscribing",
      description: "You have been added to our newsletter.",
    });
    
    setEmail("");
    setName("");
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-page section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={mygLogo}
                alt="Multicultural Youth Group"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Empowering multicultural youth to connect, lead, and reach their full potential.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/mikieforyouth/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/myg_australia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/multicultural-youth-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Programs", href: "/programs" },
                { name: "Get Involved", href: "/get-involved" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  215 Bell St, Preston<br />
                  Victoria, Australia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@myg.org.au"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  info@myg.org.au
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to our newsletter for updates on programs and events.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Multicultural Youth Group. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-background/60 hover:text-background text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/disclaimer"
                className="text-background/60 hover:text-background text-sm transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
