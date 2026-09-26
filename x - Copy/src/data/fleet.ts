import busLuxury from "@/assets/bus-luxury.jpg";
import busShuttle from "@/assets/bus-shuttle.jpg";
import busStandard from "@/assets/bus-standard.jpg";
import busDoubledecker from "@/assets/bus-doubledecker.jpg";
import busSchoolbus from "@/assets/bus-schoolbus.jpg";
import busCoaster from "@/assets/bus-coaster.jpg";
import bus14van from "@/assets/bus-14van.jpg";
import busMidcoach from "@/assets/bus-midcoach.jpg";
import busStaffbus from "@/assets/bus-staffbus.jpg";
import busHeavybus from "@/assets/bus-heavybus.jpg";
import carMercedes from "@/assets/car-mercedes.jpg";
import carVclass from "@/assets/car-vclass.jpg";

export interface Bus {
  id: string;
  name: string;
  type: string;
  category?: 'bus' | 'car';
  capacity: number;
  pricePerDay?: number;
  features: string[];
  image: string;
}

export const fleet: Bus[] = [
  {
    id: "sch-001",
    name: "School Bus (30-50 Seater)",
    type: "School Transport",
    category: "bus",
    capacity: 50,
    features: ["Safety Belts on All Seats", "Heavy Duty AC", "GPS Tracking & CCTV", "RTA Compliant", "First Aid & Emergency Stop"],
    image: busSchoolbus,
  },
  {
    id: "cst-002",
    name: "Toyota Coaster (22-24 Seater)",
    type: "Minibus",
    category: "bus",
    capacity: 24,
    features: ["High Cool AC", "Reclining Seats", "Luggage Space", "Bluetooth Audio"],
    image: busCoaster,
  },
  {
    id: "lux-004",
    name: "Executive Coach (50-53 Seater)",
    type: "Luxury Coach",
    category: "bus",
    capacity: 53,
    features: ["AC", "WiFi", "Reclining Leather Seats", "USB Charging", "Entertainment System", "PA System"],
    image: busLuxury,
  },
  {
    id: "ros-005",
    name: "Mitsubishi Rosa (30-34 Seater)",
    type: "Mid-Size Bus",
    category: "bus",
    capacity: 34,
    features: ["Dual AC", "Comfortable Seating", "PA System", "GPS Tracking"],
    image: busStandard,
  },
  {
    id: "mid-007",
    name: "35/37-Seater Luxury Coach",
    type: "Luxury Bus",
    category: "bus",
    capacity: 37,
    features: ["Climate Control AC", "Reclining Seats", "Underbed Storage", "Microphone System"],
    image: busMidcoach,
  },
  {
    id: "stf-008",
    name: "60-Seater AC Staff Bus",
    type: "Staff Transport",
    category: "bus",
    capacity: 60,
    features: ["Powerful AC", "Safety Belts", "First Aid Kit", "Daily/Monthly Rental"],
    image: busStaffbus,
  },
  {
    id: "lbr-009",
    name: "84-Seater Transport Bus",
    type: "Group Transport",
    category: "bus",
    capacity: 84,
    features: ["Heavy Duty AC", "High Capacity", "GPS Monitored", "Emergency Exits"],
    image: busHeavybus,
  },
  {
    id: "dbl-010",
    name: "Grand Tourer Double Decker",
    type: "Double Decker",
    category: "bus",
    capacity: 72,
    features: ["AC", "WiFi", "Open Top Deck Option", "Tour Guide Mic", "Panoramic Windows"],
    image: busDoubledecker,
  },
  {
    id: "sht-003",
    name: "14-Seater High Roof Van",
    type: "Van / Shuttle",
    category: "car",
    capacity: 14,
    features: ["AC", "WiFi", "Ample Luggage Space", "GPS Tracking", "Tinted Windows"],
    image: bus14van,
  },
  {
    id: "lux-006",
    name: "7-Seater Luxury Minivan",
    type: "Luxury Van",
    category: "car",
    capacity: 7,
    features: ["Leather Captain Seats", "Dual AC", "WiFi", "Privacy Glass"],
    image: busShuttle,
  },
  {
    id: "car-011",
    name: "Mercedes-Benz S-Class Luxury Sedan",
    type: "Chauffeur Car",
    category: "car",
    capacity: 4,
    features: ["Leather Interior", "Dual Climate Control", "Free WiFi", "Chauffeur Service"],
    image: carMercedes,
  },
  {
    id: "car-012",
    name: "VIP Mercedes V-Class Luxury Car",
    type: "VIP Chauffeur",
    category: "car",
    capacity: 7,
    features: ["Conference Seating", "Reclining Leather Seats", "Privacy Glass", "Ambient Lighting"],
    image: carVclass,
  },
];
