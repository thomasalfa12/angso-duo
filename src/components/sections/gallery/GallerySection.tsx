// src/components/sections/GallerySection.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { galleryData } from "@/data/mock";
import Image from "next/image";

function GalleryImage({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: (typeof galleryData)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0, 1, 1, 0]
  );

  return (
    <motion.div key={item.id} style={{ opacity }} className="absolute inset-0">
      <Image src={item.image} alt={item.title} fill className="object-cover" />
    </motion.div>
  );
}

export function GallerySection() {
  const scrollRef = useRef(null);

  // Hook canggih dari Framer Motion untuk melacak progress scroll di dalam elemen target
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"], // Lacak dari awal sampai akhir elemen
  });

  return (
    <section id="gallery" className="relative bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sebuah Cerita dalam Bingkai
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Lebih dari sekadar tempat, kami adalah pengalaman. Lihat momen-momen
            yang kami abadikan.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* TAMPILAN MOBILE: STACKED CARDS (SEDERHANA & INTUITIF)              */}
        {/* ==================================================================== */}
        <div className="md:hidden space-y-12">
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-card p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================================================================== */}
        {/* TAMPILAN DESKTOP: STICKY SCROLL SINEMATIK                           */}
        {/* ==================================================================== */}
        <div
          className="hidden md:grid md:grid-cols-2 md:gap-16 md:items-start"
          style={{ height: `${galleryData.length * 100}vh` }}
        >
          {/* Kolom Kiri (Desktop): Teks yang di-scroll */}
          <div ref={scrollRef} className="h-full">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="h-screen flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground pr-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Kolom Kanan (Desktop): Gambar Sticky dengan Transisi Halus */}
          <div className="md:sticky md:top-0 h-screen flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-2xl rounded-2xl overflow-hidden shadow-2xl">
              {galleryData.map((item, index) => (
                <GalleryImage
                  key={item.id}
                  item={item}
                  index={index}
                  total={galleryData.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
