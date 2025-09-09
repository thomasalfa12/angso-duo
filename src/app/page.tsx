// src/app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { MenuSection } from "@/components/sections/menu/MenuSection";
import { GallerySection } from "@/components/sections/gallery/GallerySection";
import { TestimonialSection } from "@/components/sections/testimonials/TestimonialsSection"; // Impor

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <TestimonialSection />
    </main>
  );
}
