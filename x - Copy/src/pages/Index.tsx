import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import FleetCard from "@/components/FleetCard";
import Testimonials from "@/components/Testimonials";
import { fleet } from "@/data/fleet";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => (
  <Layout>
    <Helmet>
      <title>Tulip Express Passenger Transport by rented buses L.L.C.</title>
      <meta name="description" content="Book luxury coach buses for corporate events, weddings, school trips and more. Professional drivers, modern fleet, 24/7 support. Get a free quote today." />
      <meta name="keywords" content="bus rental, coach bus, group travel, corporate transportation, wedding shuttle, luxury bus" />
    </Helmet>

    <HeroSection />
    <TrustBar />

    {/* Fleet Preview */}
    <section className="py-20 lg:py-28 bg-background relative" aria-label="Featured fleet">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="badge-pill mb-4">
            Featured Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-foreground mb-4">
            Our <span className="text-gradient">Fleet</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Modern, well-maintained vehicles for every occasion and group size.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.slice(0, 3).map((bus) => (
            <FleetCard key={bus.id} bus={bus} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2.5 text-sm font-bold text-primary hover:text-primary/80 group transition-all duration-200 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20"
          >
            View Full Fleet <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>

    <Testimonials />

    {/* CTA */}
    <section className="bg-secondary py-20 lg:py-28 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white border border-white/20 backdrop-blur-md mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-secondary-foreground mb-4 leading-tight">
            Ready to Hit the Road?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
            Get a personalized quote in minutes. No obligation, no hidden fees.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-primary px-9 py-4 font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-95 border border-primary/30"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
