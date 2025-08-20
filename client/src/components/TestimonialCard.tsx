import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

export function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <Card className="transition-smooth hover-lift bg-card/50 backdrop-blur-sm border-border/50">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "text-yellow-400 fill-current"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <blockquote className="text-foreground font-medium leading-relaxed mb-4">
          "{quote}"
        </blockquote>
        <cite className="text-muted-foreground font-medium">— {author}</cite>
      </CardContent>
    </Card>
  );
}