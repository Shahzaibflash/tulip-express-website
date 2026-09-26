import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials as initialTestimonials } from "@/data/testimonials";
import type { Testimonial } from "@/data/testimonials";
import AddReviewDialog from "./AddReviewDialog";

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <Star
                key={star}
                className={`h-4 w-4 ${star <= rating
                    ? "fill-tulip-red text-tulip-red"
                    : "fill-muted-foreground/20 text-muted-foreground/40"
                    }`}
            />
        ))}
    </div>
);

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-7 sm:p-8 shadow-card border border-border/60 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 hover:border-tulip-red/30"
    >
        <Quote className="absolute top-6 right-6 h-12 w-12 text-tulip-red/10 rotate-180 group-hover:text-tulip-red/20 transition-colors" />

        <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
                <div className="flex items-start justify-between mb-4 gap-4">
                    <div>
                        <h4 className="text-lg font-bold font-display text-card-foreground mb-0.5">
                            {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                            {testimonial.role}
                            {testimonial.company && (
                                <span className="block text-xs text-muted-foreground/80 mt-0.5">{testimonial.company}</span>
                            )}
                        </p>
                    </div>
                    <StarRating rating={testimonial.rating} />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.comment}"
                </p>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/60 pt-4 mt-auto">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[11px]">
                    {testimonial.tripType}
                </span>
                <span className="font-medium text-muted-foreground/80">{testimonial.date}</span>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const [reviews, setReviews] = useState<Testimonial[]>(initialTestimonials);

    const handleAddReview = (review: Testimonial) => {
        setReviews((prev) => [review, ...prev]);
    };

    return (
        <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden" aria-label="Customer testimonials">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 sm:mb-16"
                >
                    <span className="badge-pill mb-4">
                        Customer Reviews
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-foreground mb-4">
                        Trusted by <span className="text-gradient">500+ Clients</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base leading-relaxed">
                        Don't just take our word for it. Here's what our customers have to say about their experience with Tulip Express.
                    </p>
                    <AddReviewDialog onSubmit={handleAddReview} />
                </motion.div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* Overall Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-7 py-4.5 rounded-2xl bg-card shadow-card border border-border/80 backdrop-blur-sm">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-5 w-5 fill-tulip-red text-tulip-red" />
                            ))}
                        </div>
                        <div className="text-left border-l border-border/80 pl-4">
                            <p className="text-2xl font-bold text-foreground font-display leading-tight">4.9/5</p>
                            <p className="text-xs font-semibold text-muted-foreground">Based on 500+ reviews</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
