export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company?: string;
    rating: number;
    comment: string;
    image?: string;
    tripType: string;
    date: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "test-001",
        name: "Ahmed Al Mansouri",
        role: "Event Manager",
        company: "Emirates Corporate Solutions",
        rating: 5,
        comment: "Exceptional service! Tulip Express handled our company retreat flawlessly. The buses were pristine, drivers were professional, and everything ran like clockwork. Highly recommend for corporate events!",
        tripType: "Corporate Event",
        date: "January 2026",
    },
    {
        id: "test-002",
        name: "Sarah Johnson",
        role: "Bride",
        rating: 5,
        comment: "Our wedding day was perfect thanks to Tulip Express! They coordinated multiple buses for our guests with such elegance. The drivers were punctual and the buses were beautifully maintained. Thank you for making our day special!",
        tripType: "Wedding Transport",
        date: "December 2025",
    },
    {
        id: "test-003",
        name: "Mohammed Hassan",
        role: "Operations Director",
        company: "Dubai Tours & Travel",
        rating: 5,
        comment: "We've been using Tulip Express for our city tours for over a year. Their fleet is modern, well-maintained, and always on time. Customer satisfaction has increased significantly!",
        tripType: "City Tours",
        date: "November 2025",
    },
    {
        id: "test-004",
        name: "Fatima Al Zarooni",
        role: "School Principal",
        company: "International School Dubai",
        rating: 5,
        comment: "Safety is our top priority for school trips, and Tulip Express exceeded our expectations. Professional drivers, clean buses, and excellent communication. Our students and parents are very happy!",
        tripType: "School Trip",
        date: "October 2025",
    },
    {
        id: "test-005",
        name: "David Miller",
        role: "Travel Coordinator",
        rating: 4,
        comment: "Great service for airport transfers! The booking process was smooth, and the driver was waiting for us on time. Very comfortable ride to the hotel. Will definitely use again.",
        tripType: "Airport Transfer",
        date: "January 2026",
    },
    {
        id: "test-006",
        name: "Layla Ibrahim",
        role: "HR Manager",
        company: "Tech Innovations LLC",
        rating: 5,
        comment: "Tulip Express made our annual team outing stress-free! From booking to drop-off, everything was seamless. The buses had WiFi and AC which kept everyone comfortable. Excellent value for money!",
        tripType: "Corporate Outing",
        date: "December 2025",
    },
];
