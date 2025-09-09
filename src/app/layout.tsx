// src/app/layout.tsx
import type { Metadata } from "next";
// Impor font dari next/font
import { Manrope, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { ReservationModal } from "@/components/sections/reservasi/ReservationModal";
import { Toaster } from "sonner"; // Import langsung dari package

// Konfigurasi font
const fontManrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const fontLora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Angso Duo Cafe - Template Kuliner",
  description: "Template website untuk UMKM kuliner Jambi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* Gabungkan variabel font ke body */}
      <body
        className={cn(fontManrope.variable, fontLora.variable, "font-sans")}
      >
        <Navbar />
        <ReservationModal />
        {children}
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
