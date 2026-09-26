import { Snowflake, Wifi, ShieldCheck, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Snowflake, label: "Full AC Fleet" },
  { icon: Wifi, label: "Free WiFi Onboard" },
  { icon: ShieldCheck, label: "Professional Drivers" },
  { icon: Headphones, label: "24/7 Support" },
];

const TrustBar = () => (
  <section className="bg-secondary py-12 lg:py-16 border-y border-white/10 relative overflow-hidden" aria-label="Trust indicators">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary border border-primary/30 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <item.icon className="h-7 w-7" />
            </div>
            <span className="text-sm font-bold text-secondary-foreground tracking-wide">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
