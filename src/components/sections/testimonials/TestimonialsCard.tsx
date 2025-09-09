// src/components/sections/TestimonialCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialItem } from "@/data/mock";
import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  item: TestimonialItem;
}

// Komponen kecil untuk menampilkan bintang rating
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-primary">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <Card className="w-80 shrink-0">
      <CardContent className="p-6 flex flex-col items-start">
        <StarRating rating={item.rating} />
        <blockquote className="mt-4 text-gray-700 italic">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center">
          <Image
            src={item.image}
            alt={item.name}
            width={48}
            height={48}
            className="rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
