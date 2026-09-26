import { useState } from "react";
import { Star, PenLine } from "lucide-react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import type { Testimonial } from "@/data/testimonials";

const tripTypes = [
    "Corporate Event",
    "Wedding Transport",
    "City Tours",
    "School Trip",
    "Airport Transfer",
    "Corporate Outing",
    "Private Charter",
    "Other",
];

interface AddReviewDialogProps {
    onSubmit: (review: Testimonial) => void;
}

const InteractiveStarRating = ({
    rating,
    onChange,
}: {
    rating: number;
    onChange: (r: number) => void;
}) => {
    const [hovered, setHovered] = useState(0);

    return (
        <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    className="transition-transform hover:scale-115 focus:outline-none"
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => onChange(star)}
                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                >
                    <Star
                        className={`h-7 w-7 transition-colors ${star <= (hovered || rating)
                            ? "fill-tulip-red text-tulip-red"
                            : "fill-muted-foreground/20 text-muted-foreground/40"
                            }`}
                    />
                </button>
            ))}
        </div>
    );
};

const AddReviewDialog = ({ onSubmit }: AddReviewDialogProps) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [company, setCompany] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [tripType, setTripType] = useState("");
    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const resetForm = () => {
        setName("");
        setRole("");
        setCompany("");
        setRating(0);
        setComment("");
        setTripType("");
        setErrors({});
    };

    const handleSubmit = () => {
        const newErrors: Record<string, boolean> = {};
        if (!name.trim()) newErrors.name = true;
        if (!rating) newErrors.rating = true;
        if (!comment.trim()) newErrors.comment = true;
        if (!tripType) newErrors.tripType = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const now = new Date();
        const monthYear = now.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
        });

        const review: Testimonial = {
            id: `user-${Date.now()}`,
            name: name.trim(),
            role: role.trim() || "Customer",
            company: company.trim() || undefined,
            rating,
            comment: comment.trim(),
            tripType,
            date: monthYear,
        };

        onSubmit(review);
        resetForm();
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(v) => {
                setOpen(v);
                if (!v) resetForm();
            }}
        >
            <DialogTrigger asChild>
                <button className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all duration-300 hover:shadow-glow hover:scale-105 border border-primary/20">
                    <PenLine className="h-4 w-4" />
                    Add Your Review
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="font-display text-2xl font-bold text-foreground">
                        Share Your Experience
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground text-sm">
                        Tell us about your journey with Tulip Express.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-3">
                    {/* Star Rating */}
                    <div className="space-y-2">
                        <Label className="font-semibold text-sm">
                            Rating <span className="text-destructive">*</span>
                        </Label>
                        <InteractiveStarRating rating={rating} onChange={setRating} />
                        {errors.rating && (
                            <p className="text-xs font-medium text-destructive">Please select a rating</p>
                        )}
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="review-name" className="font-semibold text-sm">
                            Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="review-name"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setErrors((prev) => ({ ...prev, name: false }));
                            }}
                            className={`rounded-xl border-input py-3 shadow-sm ${errors.name ? "border-destructive focus:ring-destructive" : ""}`}
                        />
                        {errors.name && (
                            <p className="text-xs font-medium text-destructive">Name is required</p>
                        )}
                    </div>

                    {/* Role & Company */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                            <Label htmlFor="review-role" className="font-semibold text-sm">Role</Label>
                            <Input
                                id="review-role"
                                placeholder="e.g. Event Manager"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="rounded-xl border-input py-3 shadow-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="review-company" className="font-semibold text-sm">Company</Label>
                            <Input
                                id="review-company"
                                placeholder="Optional"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="rounded-xl border-input py-3 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Trip Type */}
                    <div className="space-y-2">
                        <Label className="font-semibold text-sm">
                            Trip Type <span className="text-destructive">*</span>
                        </Label>
                        <Select
                            value={tripType}
                            onValueChange={(v) => {
                                setTripType(v);
                                setErrors((prev) => ({ ...prev, tripType: false }));
                            }}
                        >
                            <SelectTrigger
                                className={`rounded-xl border-input py-3 shadow-sm ${errors.tripType ? "border-destructive" : ""}`}
                            >
                                <SelectValue placeholder="Select trip type" />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                                {tripTypes.map((t) => (
                                    <SelectItem key={t} value={t} className="rounded-xl">
                                        {t}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.tripType && (
                            <p className="text-xs font-medium text-destructive">
                                Please select a trip type
                            </p>
                        )}
                    </div>

                    {/* Comment */}
                    <div className="space-y-2">
                        <Label htmlFor="review-comment" className="font-semibold text-sm">
                            Your Review <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                            id="review-comment"
                            placeholder="Share your experience..."
                            rows={4}
                            value={comment}
                            onChange={(e) => {
                                setComment(e.target.value);
                                setErrors((prev) => ({ ...prev, comment: false }));
                            }}
                            className={`rounded-xl border-input shadow-sm ${errors.comment ? "border-destructive focus:ring-destructive" : ""}`}
                        />
                        {errors.comment && (
                            <p className="text-xs font-medium text-destructive">Review is required</p>
                        )}
                    </div>
                </div>

                <DialogFooter className="gap-2 sm:gap-3 pt-2">
                    <DialogClose asChild>
                        <button className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted">
                            Cancel
                        </button>
                    </DialogClose>
                    <button
                        onClick={handleSubmit}
                        className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-all duration-300 hover:shadow-glow border border-primary/20"
                    >
                        Submit Review
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddReviewDialog;
