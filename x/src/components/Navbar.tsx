import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bus, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-card border-b border-border/50 py-3 sm:py-3.5"
          : "bg-gradient-to-b from-black/40 via-black/20 to-transparent py-5 sm:py-6"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="flex items-center gap-3 group" 
          aria-label="Tulip Express Passenger Transport by rented buses L.L.C."
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
            className={`flex items-center justify-center p-2.5 rounded-2xl transition-all duration-300 ${
              scrolled
                ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20"
                : "bg-white/15 text-white backdrop-blur-md group-hover:bg-primary group-hover:text-primary-foreground border border-white/20"
            }`}
          >
            <Bus className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" />
          </motion.div>
          <div className="flex flex-col max-w-[190px] min-[380px]:max-w-[230px] sm:max-w-none">
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-sm sm:text-lg md:text-xl font-extrabold font-display leading-tight tracking-tight ${
                scrolled ? "text-tulip-red" : "text-white"
              }`}
            >
              Tulip Express
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-[9px] sm:text-xs font-semibold leading-tight tracking-normal font-sans truncate sm:whitespace-normal ${
                scrolled ? "text-muted-foreground" : "text-white/80"
              }`}
            >
              Passenger Transport by rented buses L.L.C.
            </motion.span>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`relative text-sm font-semibold transition-all duration-200 py-1.5 px-3 rounded-lg ${
                    isActive
                      ? scrolled
                        ? "text-primary font-bold bg-primary/10"
                        : "text-white font-bold bg-white/15 backdrop-blur-md border border-white/20"
                      : scrolled
                      ? "text-secondary hover:text-primary hover:bg-muted/50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/contact"
                className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-all duration-300 hover:shadow-glow inline-block border border-primary/20"
              >
                Book Now
              </Link>
            </motion.div>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-xl border transition-colors ${
            scrolled
              ? "text-secondary border-border bg-card"
              : "text-white border-white/20 bg-white/10 backdrop-blur-md"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 mx-4 rounded-2xl bg-card/95 backdrop-blur-2xl border border-border shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col gap-3 p-5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`block text-base font-semibold px-4 py-2.5 rounded-xl transition-colors ${
                      location.pathname === l.to
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-secondary hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-border/60">
                <Link
                  to="/contact"
                  className="block text-center rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-md"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
