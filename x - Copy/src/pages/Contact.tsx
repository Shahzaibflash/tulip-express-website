import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    busType: searchParams.get("bus") || "",
    pickup: searchParams.get("pickup") || "",
    date: searchParams.get("date") || "",
    passengers: searchParams.get("passengers") || "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message with all form details
    const message = `
🚌 *Bus Rental Inquiry*

*Customer Details:*
Name: ${form.name}
Email: ${form.email}
${form.phone ? `Phone: ${form.phone}` : ''}

*Trip Details:*
${form.busType ? `Preferred Bus: ${form.busType}` : ''}
${form.pickup ? `Pickup Location: ${form.pickup}` : ''}
${form.date ? `Date: ${form.date}` : ''}
${form.passengers ? `Passengers: ${form.passengers}` : ''}

${form.message ? `*Additional Details:*\n${form.message}` : ''}
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL with your Dubai number
    const whatsappURL = `https://wa.me/971554517728?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // Show success message
    toast.success("Redirecting to WhatsApp...");

    // Optional: Clear form after a delay
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", busType: "", pickup: "", date: "", passengers: "", message: "" });
    }, 1000);
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-background py-3.5 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm";

  return (
    <Layout>
      <Helmet>
        <title>Tulip Express Passenger Transport by rented buses L.L.C.</title>
        <meta name="description" content="Request a free quote or get in touch with our team. We respond within 2 hours. Call +1 (800) 555-RIDE or fill out our inquiry form." />
        <meta name="keywords" content="bus rental quote, contact, bus booking, charter inquiry, group transportation" />
      </Helmet>

      <section className="pt-32 pb-24 lg:pb-32 bg-background relative min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14 sm:mb-16"
          >
            <span className="badge-pill mb-4">
              Instant Quote & Support
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
              Fill out the form below and our team will get back to you within 2 hours with a personalized quote.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-3 items-start">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-5"
            >
              {[
                { icon: Phone, label: "Call Us", value: "+971 55 451 7728", href: "tel:+971554517728" },
                { icon: Mail, label: "Email Us", value: "info@tulipexpress.ae", href: "mailto:info@tulipexpress.ae" },
                { icon: MapPin, label: "Visit Us", value: "OFFICE M50, New al safiya building, Abu hail, Dubai", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-card border border-border/60 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/30 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-card-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-muted-foreground leading-relaxed">{item.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:col-span-2 rounded-3xl bg-card p-7 sm:p-10 shadow-xl border border-border/60 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <input type="text" placeholder="Full Name *" required value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                <input type="email" placeholder="Email *" required value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                <input type="text" placeholder="Preferred Bus Type" value={form.busType} onChange={(e) => update("busType", e.target.value)} className={inputClass} />
                <input type="text" placeholder="Pickup Location" value={form.pickup} onChange={(e) => update("pickup", e.target.value)} className={inputClass} />
                <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className={inputClass} />
                <input type="number" placeholder="Number of Passengers" min={1} value={form.passengers} onChange={(e) => update("passengers", e.target.value)} className={inputClass} />
              </div>
              <textarea
                placeholder="Additional details or special requests..."
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={inputClass}
              />
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-[hsl(142,70%,45%)] py-4 font-bold text-white transition-all duration-300 hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 shadow-md border border-white/20"
              >
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
