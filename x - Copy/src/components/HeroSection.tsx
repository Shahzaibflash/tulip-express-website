import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users } from "lucide-react";
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
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-36 sm:pt-40 lg:pt-32 pb-16 sm:pb-20 lg:py-32">
      {/* Background with layered gradient */}
      <div className="absolute inset-0">
        <img src={heroBus} alt="Luxury coach bus on highway" className="h-full w-full object-cover object-center -scale-x-105 scale-y-105 transform filter brightness-95" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
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
              className="badge-pill mb-4 sm:mb-6 bg-white/10 text-white border-white/20 backdrop-blur-md"
            >
              Trusted by 500+ companies
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-5xl lg:text-6xl font-black leading-[1.15] text-white mb-5 sm:mb-6 tracking-tight font-display"
            >
              <span className="text-gradient drop-shadow-lg">Tulip Express</span> Passenger Transport by rented buses L.L.C.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl text-sm sm:text-lg text-white/90 leading-relaxed mb-6 sm:mb-8 font-normal"
            >
              From corporate events to wedding shuttles — our modern fleet and professional
              drivers deliver comfort, safety, and punctuality every time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="block rounded-xl bg-primary px-8 py-3.5 sm:py-4 font-bold text-center text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-glow border border-primary/30"
                >
                  Book Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/fleet"
                  className="block rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-md px-8 py-3.5 sm:py-4 font-bold text-center text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50"
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
              className="flex flex-col w-full max-w-full min-w-0 box-border rounded-3xl p-6 sm:p-9 shadow-2xl space-y-4 sm:space-y-5 border border-white/30 bg-black/35 backdrop-blur-md overflow-hidden"
            >
              <div>
                <h2 className="text-xl sm:text-3xl font-bold font-display text-white mb-1">Quick Quote</h2>
                <p className="text-xs sm:text-sm text-white/80">Get instant pricing for your trip</p>
              </div>

              <div className="relative w-full max-w-full min-w-0 box-border">
                <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-primary pointer-events-none z-10" />
                <input
                  type="text"
                  placeholder="Pickup location"
                  value={form.pickup}
                  onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                  className="w-full max-w-full min-w-0 box-border rounded-xl border border-white/20 bg-white/15 backdrop-blur-md py-3.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                  required
                />
              </div>

              <div className="relative w-full max-w-full min-w-0 box-border">
                <CalendarDays className="absolute left-3.5 top-3.5 h-4 w-4 text-primary pointer-events-none z-10" />
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full max-w-full min-w-0 box-border appearance-none rounded-xl border border-white/20 bg-white/15 backdrop-blur-md py-3.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-80 [&::-webkit-datetime-edit]:max-w-full [&::-webkit-date-and-time-value]:max-w-full [&::-webkit-date-and-time-value]:text-left"
                  required
                />
              </div>

              <div className="relative w-full max-w-full min-w-0 box-border">
                <Users className="absolute left-3.5 top-3.5 h-4 w-4 text-primary pointer-events-none z-10" />
                <input
                  type="number"
                  placeholder="Number of passengers"
                  min={1}
                  value={form.passengers}
                  onChange={(e) => setForm({ ...form, passengers: e.target.value })}
                  className="w-full max-w-full min-w-0 box-border rounded-xl border border-white/20 bg-white/15 backdrop-blur-md py-3.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full max-w-full min-w-0 box-border rounded-xl bg-primary py-3.5 sm:py-4 font-bold text-primary-foreground shadow-md transition-all duration-300 hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] border border-primary/30"
              >
                Request Quote →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
