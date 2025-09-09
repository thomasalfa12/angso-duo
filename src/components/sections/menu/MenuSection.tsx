// src/components/sections/MenuSection.tsx

import { MenuTabs } from "./MenuTabs";
import { menuData } from "@/data/mock"; // <-- 1. Impor data dari file mock lokal

// Tidak perlu lagi import/panggil fungsi API di sini

export function MenuSection() {
  // 2. Tidak perlu lagi `async` atau `await Promise.all`

  // 3. Langsung filter data dari array yang sudah kita impor
  const makananData = menuData.filter((item) => item.category === "Makanan");
  const cemilanData = menuData.filter((item) => item.category === "Cemilan");
  const minumanData = menuData.filter((item) => item.category === "Minuman");

  return (
    <section id="menu" className="py-24 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Jelajahi Menu Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Setiap hidangan dibuat dengan cinta dan bahan-bahan segar pilihan
            untuk Anda.
          </p>
        </div>

        {/* 4. Kirim data yang sudah terfilter dan kaya (dengan harga & deskripsi) */}
        <MenuTabs
          makanan={makananData}
          cemilan={cemilanData}
          minuman={minumanData}
        />
      </div>
    </section>
  );
}
