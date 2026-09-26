import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import type { Bus } from "@/data/fleet";

const FleetCard = ({ bus }: { bus: Bus }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative flex flex-col overflow-hidden rounded-3xl bg-card border border-border/60 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 hover:border-primary/30"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
      <img
        src={bus.image}
        alt={bus.name}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute top-4 left-4 rounded-full bg-primary/95 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-md border border-white/20">
        {bus.type}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-6 sm:p-7">
      <h3 className="text-xl font-bold font-display text-card-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
        {bus.name}
      </h3>
      
      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted/80 px-3 py-1 rounded-lg w-fit mb-4 border border-border/40">
        <Users className="h-3.5 w-3.5 text-primary" /> {bus.capacity} passengers
      </div>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {bus.features.slice(0, 3).map((f) => (
          <span key={f} className="rounded-lg bg-muted/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground border border-border/40">
            {f}
          </span>
        ))}
        {bus.features.length > 3 && (
          <span className="rounded-lg bg-muted/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground border border-border/40">
            +{bus.features.length - 3} more
          </span>
        )}
      </div>

      <div className="mt-auto pt-2">
        <Link
          to={`/contact?bus=${encodeURIComponent(bus.name)}`}
          className="block text-center w-full rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] border border-primary/20"
        >
          Book Now
        </Link>
      </div>
    </div>
  </motion.article>
);

export default FleetCard;
