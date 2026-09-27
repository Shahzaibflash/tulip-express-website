import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/971554517728?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20bus%20rental%20services."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-4 right-4 sm:bottom-16 sm:right-6 lg:bottom-20 lg:right-6 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-xl animate-pulse-glow hover:animate-none transition-all duration-300 hover:scale-110"
  >
    <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
  </a>
);

export default WhatsAppButton;
