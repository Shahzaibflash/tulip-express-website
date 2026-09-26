import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bus, Handshake, ThumbsUp, Users } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  target: number;
  label: string;
  suffix?: string;
}

const statsData: StatItem[] = [
  {
    icon: Bus,
    target: 25,
    label: "Buses Ready",
    suffix: "+",
  },
  {
    icon: Handshake,
    target: 2640,
    label: "Satisfied Customer",
    suffix: "+",
  },
  {
    icon: ThumbsUp,
    target: 2836,
    label: "Booking Done",
    suffix: "+",
  },
  {
    icon: Users,
    target: 75,
    label: "Professional Team",
    suffix: "+",
  },
];

const AnimatedCounter = ({ target, isVisible }: { target: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds count-up animation

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth ease-out cubic curve
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [isVisible, target]);

  return (
    <span>{count.toLocaleString()}</span>
  );
};

const StatsCounter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#070A11] py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-white/10"
      aria-label="Key statistics and achievements"
    >
      {/* Subtle background ambient glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {statsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-primary/40 backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_-10px_rgba(224,45,68,0.25)] hover:-translate-y-1 text-center"
              >
                {/* Glowing top border highlight on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-3/4 transition-all duration-500 rounded-full" />

                {/* Icon Container with Coral / Orange-Red Accent */}
                <div className="mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary border border-primary/25 shadow-[0_0_15px_rgba(224,45,68,0.15)] group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(224,45,68,0.5)] transition-all duration-300">
                  <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:rotate-6" />
                </div>

                {/* Counter & Fixed '+' Symbol */}
                <div className="flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display mb-1 sm:mb-2">
                  <AnimatedCounter target={item.target} isVisible={isVisible} />
                  <span className="text-primary ml-0.5 select-none">{item.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm lg:text-base font-semibold text-white/70 group-hover:text-white/90 transition-colors duration-200">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
