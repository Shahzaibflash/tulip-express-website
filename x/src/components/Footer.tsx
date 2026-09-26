import { Bus, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-navy text-secondary-foreground relative border-t border-white/10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/20 text-primary border border-primary/30">
              <Bus className="h-6 w-6 shrink-0 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display text-tulip-red leading-tight">
                Tulip Express
              </span>
              <span className="text-xs font-semibold text-muted-foreground font-sans">
                Passenger Transport by rented buses L.L.C.
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pr-4">
            Premium group travel solutions for corporate events, weddings, school trips,
            and more. Trusted by hundreds of clients nationwide.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Home</Link></li>
            <li><Link to="/fleet" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Our Fleet</Link></li>
            <li><Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-primary">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="hover:text-white transition-colors cursor-default">Corporate Travel</li>
            <li className="hover:text-white transition-colors cursor-default">Wedding Transport</li>
            <li className="hover:text-white transition-colors cursor-default">Airport Transfers</li>
            <li className="hover:text-white transition-colors cursor-default">School Trips</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-primary">Contact</h4>
          <ul className="space-y-3.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-primary">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              +971 55 451 7728
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-primary">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              info@tulipexpressllc.com
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-primary">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              OFFICE M50, Abu hail, Dubai
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-muted-foreground font-medium">
        © {new Date().getFullYear()} Muhammad Shahzaib. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
