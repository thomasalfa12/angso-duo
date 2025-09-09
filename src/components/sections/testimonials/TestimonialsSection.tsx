// src/components/sections/TestimonialSection.tsx
import { testimonialData } from "@/data/mock";
import { TestimonialCard } from "./TestimonialsCard"; // Pastikan nama file ini benar (TestimonialCard.tsx)

export function TestimonialSection() {
  const duplicatedTestimonials = [...testimonialData, ...testimonialData];

  return (
    <section
      id="testimonials"
      className="bg-secondary/50 dark:bg-secondary/20 py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Apa Kata Mereka?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Kami bangga telah menjadi bagian dari momen-momen berharga para
            pelanggan kami.
          </p>
        </div>
      </div>

      <div
        className="relative group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        {/* Baris Pertama: Bergerak ke kiri */}
        <div className="flex gap-8 animate-[scroll_60s_linear_infinite] group-hover:animate-pause">
          {duplicatedTestimonials.map((item, index) => (
            <TestimonialCard key={`row1-${item.id}-${index}`} item={item} />
          ))}
        </div>

        {/* Baris Kedua: Bergerak ke kanan */}
        <div className="flex gap-8 animate-[scroll-reverse_60s_linear_infinite] group-hover:animate-pause mt-8">
          {duplicatedTestimonials.map((item, index) => (
            <TestimonialCard key={`row2-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
