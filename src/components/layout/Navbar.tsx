"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReservationStore } from "@/hooks/useReservationStore"; // Menggunakan path store Anda
import {
  Home,
  UtensilsCrossed,
  GalleryHorizontal,
  BookMarked,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Hapus "Reservasi" dari data link utama
const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Menu", href: "#menu", icon: UtensilsCrossed },
  { name: "Galeri", href: "#gallery", icon: GalleryHorizontal },
];

export function Navbar() {
  const { onOpen } = useReservationStore();
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Tampilkan navbar setelah scroll melewati tinggi viewport
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsMobileNavVisible(true);
      } else {
        setIsMobileNavVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Mobile Navbar (Docked at Bottom) */}
      <AnimatePresence>
        {isMobileNavVisible && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm 
                       bg-card/60 backdrop-blur-lg rounded-full shadow-lg z-50 overflow-hidden"
          >
            <div className="flex justify-around items-center h-16">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5 mb-1" />
                  <span>{link.name}</span>
                </a>
              ))}
              {/* Tombol Reservasi terpisah */}
              <button
                onClick={onOpen}
                className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <BookMarked className="w-5 h-5 mb-1" />
                <span>Reservasi</span>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Navbar (Floating Pill) */}
      <nav className="hidden md:flex justify-center w-full fixed top-4 z-50 animate-fade-in-down">
        <div className="flex items-center justify-between gap-8 bg-card/60 backdrop-blur-lg rounded-full shadow-lg px-6 py-2">
          <a href="#home" className="text-xl font-bold text-primary">
            Angso Duo
          </a>
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button onClick={onOpen} size="sm" className="rounded-full">
            Reservasi
          </Button>
        </div>
      </nav>
    </>
  );
}
