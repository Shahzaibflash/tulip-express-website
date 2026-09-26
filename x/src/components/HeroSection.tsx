import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import heroBus from "@/assets/hero-bus.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ pickup: "", date: "", passengers: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(form).toString();
    navigate(`/contact?${params}`);
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-28 sm:pt-36 lg:pt-32 pb-14 sm:pb-20 lg:py-32">
      {/* Background with layered gradient & ambient lighting */}
      <div className="absolute inset-0">
        <img
          src={heroBus}
          alt="Luxury coach bus on highway"
          className="h-full w-full object-cover object-center -scale-x-105 scale-y-105 transform filter brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/75 to-navy/95 sm:bg-gradient-to-r sm:from-navy/95 sm:via-navy/70 sm:to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
        {/* Ambient glow accent */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-[110px] pointer-events-none" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left — Bold, high-conversion copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="badge-pill mb-3 sm:mb-6 bg-white/10 text-white border-white/20 backdrop-blur-xl shadow-md inline-flex items-center gap-2 py-1.5 px-3.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span>Trusted by 500+ companies</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.18] sm:leading-[1.15] text-white mb-4 sm:mb-6 tracking-tight font-display"
            >
              <span className="text-gradient drop-shadow-[0_4px_16px_rgba(224,45,68,0.4)]">Tulip Express</span> Passenger Transport by rented buses L.L.C.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl text-sm sm:text-lg text-white/85 leading-relaxed mb-6 sm:mb-8 font-normal"
            >
              From corporate events to wedding shuttles — our modern fleet and professional
              drivers deliver comfort, safety, and punctuality every time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="block rounded-xl bg-gradient-to-r from-primary via-red-600 to-primary px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-center text-white shadow-[0_8px_25px_-5px_rgba(224,45,68,0.5)] transition-all duration-300 hover:shadow-glow border border-white/20"
                >
                  Book Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/fleet"
                  className="block rounded-xl border border-white/25 bg-white/10 backdrop-blur-xl px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-center text-white shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40"
                >
                  View Fleet
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right — Quick Quote form with transparent glassmorphism */}
          <motion.div
            id="quote-form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 w-full max-w-full min-w-0"
          >
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col w-full max-w-full min-w-0 box-border rounded-3xl p-5 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] space-y-4 sm:space-y-5 border border-white/20 bg-navy/60 sm:bg-black/35 backdrop-blur-xl overflow-hidden group"
            >
              {/* Inner ambient card light */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-xl sm:text-3xl font-bold font-display text-white mb-0.5 sm:mb-1">Quick Quote</h2>
                <p className="text-xs sm:text-sm text-white/80">Get instant pricing for your trip</p>
              </div>

              <div className="relative z-10 w-full max-w-full min-w-0 box-border">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary pointer-events-none z-10" />
                <input
                  type="text"
                  placeholder="Pickup location"
                  value={form.pickup}
                  onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                  className="w-full max-w-full min-w-0 box-border rounded-xl border border-white/20 bg-white/10 backdrop-blur-md py-3 sm:py-3.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/80 focus:bg-white/15 transition-all shadow-inner"
                  required
                />
              </div>

              <div className="relative z-10 w-full max-w-full min-w-0 box-border">
                <CalendarDays className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary pointer-events-none z-10" />
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full max-w-full min-w-0 box-border appearance-none rounded-xl border border-white/20 bg-white/10 backdrop-blur-md py-3 sm:py-3.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/80 focus:bg-white/15 transition-all shadow-inner [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-80 [&::-webkit-datetime-edit]:max-w-full [&::-webkit-date-and-time-value]:max-w-full [&::-webkit-date-and-time-value]:text-left"
                  required
                />
              </div>

              <div className="relative z-10 w-full max-w-full min-w-0 box-border">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary pointer-events-none z-10" />
                <input
                  type="number"
                  placeholder="Number of passengers"
                  min={1}
                  value={form.passengers}
                  onChange={(e) => setForm({ ...form, passengers: e.target.value })}
                  className="w-full max-w-full min-w-0 box-border rounded-xl border border-white/20 bg-white/10 backdrop-blur-md py-3 sm:py-3.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary/80 focus:bg-white/15 transition-all shadow-inner"
                  required
                />
              </div>

              <button
                type="submit"
                className="relative z-10 w-full max-w-full min-w-0 box-border rounded-xl bg-gradient-to-r from-primary via-red-600 to-primary py-3.5 sm:py-4 font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,45,68,0.5)] transition-all duration-300 hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] border border-white/20 flex items-center justify-center gap-1.5"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

