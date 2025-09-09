"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useReservationStore } from "@/hooks/useReservationStore";
import Link from "next/link";

const DEFAULT_CATEGORY = "minuman";

export function HeroSection() {
  const { onOpen } = useReservationStore();
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      {/* Elemen Dekoratif Gradien di Latar Belakang */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Kolom Kiri: Teks & CTA */}
        <div className="text-center lg:text-left animate-fade-in-right">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-foreground leading-tight">
            Secangkir{" "}
            <span className="[font-family:var(--font-lora)] text-primary">
              Cerita
            </span>
            ,
            <br />
            Sejuta{" "}
            <span className="[font-family:var(--font-lora)] text-primary">
              Rasa
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-muted-foreground">
            Temukan kehangatan dalam setiap sajian kopi dan makanan yang kami
            siapkan khusus untuk Anda.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <Button
              asChild
              size="lg"
              className="font-bold text-lg px-8 py-6 transition-transform duration-300 hover:scale-105"
            >
              <Link href={`/menu/${DEFAULT_CATEGORY}`}>Lihat Menu</Link>
            </Button>

            <Button
              onClick={onOpen}
              asChild
              variant="outline"
              size="lg"
              className="font-bold text-lg px-8 py-6 transition-transform duration-300 hover:scale-105"
            >
              <a href="#reservation">Reservasi</a>
            </Button>
          </div>
        </div>

        {/* Kolom Kanan: Komposisi Visual Dinamis dengan Doodles */}
        <div className="relative h-96 lg:h-[550px] flex items-center justify-center animate-fade-in-left">
          {/* Doodle Latar (di belakang kartu) */}
          <motion.div
            className="absolute w-[120%] h-[120%] text-foreground"
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 120, repeat: Infinity }}
          >
            <Image
              src="/images/doodle-blob.svg"
              alt="Abstract Shape Background"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Doodle Utama (di tengah) */}
          <motion.div
            className="relative w-[80%] h-[80%] lg:w-[85%] lg:h-[85%] z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/coffee.svg"
              alt="Ilustrasi Cangkir Kopi"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Doodle Depan (di depan kartu) dengan animasi float */}
          <div className="absolute -top-4 -right-4 w-24 h-24 lg:-top-8 lg:-right-8 lg:w-32 lg:h-32 z-20 text-primary animate-[float_4s_ease-in-out_infinite]">
            <Image src="/images/coffee-beans.svg" alt="Sparkle Doodle" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
