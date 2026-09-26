import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import FleetCard from "@/components/FleetCard";
import { fleet } from "@/data/fleet";
import { motion } from "framer-motion";
import { Bus, Car } from "lucide-react";

const Fleet = () => {
  const buses = fleet.filter((item) => item.category !== "car");
  const cars = fleet.filter((item) => item.category === "car");

  return (
    <Layout>
      <Helmet>
        <title>Tulip Express Passenger Transport by rented buses L.L.C.</title>
        <meta name="description" content="Browse our modern fleet of luxury coaches, shuttles, standard buses and double deckers. All vehicles feature AC, WiFi, and professional drivers." />
        <meta name="keywords" content="bus fleet, luxury coach, shuttle bus, double decker, chartered bus, tour bus" />
      </Helmet>

      <section className="pt-32 pb-24 lg:pb-32 bg-background relative min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="badge-pill mb-4">
              Our Transport Fleet
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-4">
              Our <span className="text-gradient">Fleet</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
              Choose from our diverse range of well-maintained vehicles, each equipped with premium amenities for your comfort.
            </p>
          </motion.div>

          {/* Section A: Buses */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8 border-b border-border/80 pb-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Bus className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-foreground">
                  Buses & Coaches
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">High capacity buses for group transportation and school trips</p>
              </div>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {buses.map((bus) => (
                <FleetCard key={bus.id} bus={bus} />
              ))}
            </div>
          </div>

          {/* Section B: Cars */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8 border-b border-border/80 pb-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Car className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-foreground">
                  Cars & Luxury Vans
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">Premium luxury sedans, VIP minivans, and executive transfers</p>
              </div>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cars.map((car) => (
                <FleetCard key={car.id} bus={car} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fleet;
