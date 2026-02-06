import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
      {/* Main Footer */}
      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://myg.org.au/wp-content/uploads/2019/12/cropped-mgr-logo.png"
                alt="Multicultural Youth Group"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 leading-relaxed mb-8">
              Empowering multicultural youth to connect, lead, and reach their full potential in Victoria, Australia.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/mikieforyouth/", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/myg_australia/", icon: Instagram, label: "Instagram" },
                { href: "https://www.linkedin.com/company/multicultural-youth-group/", icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/10 hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-background">Explore</h4>
            <ul className="space-y-4">
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
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-background">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-background/70 text-sm">
                    215 Bell St, Preston<br />
                    Victoria, Australia
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a
                  href="mailto:info@myg.org.au"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  info@myg.org.au
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-background">Stay Connected</h4>
            <p className="text-background/70 text-sm mb-5">
              Subscribe to our newsletter for updates on programs and events.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-full h-12"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-full h-12"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full"
              >
                {isSubmitting ? "Subscribing..." : (
                  <>Subscribe <ArrowRight className="ml-1 h-4 w-4" /></>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-page py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Multicultural Youth Group. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="text-background/50 hover:text-background text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/disclaimer"
                className="text-background/50 hover:text-background text-sm transition-colors"
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
