// src/app/menu/[category]/page.tsx
import { menuData } from "@/data/mock";
import { FullMenu } from "@/components/sections/menu/FullMenu"; // <-- Impor komponen baru

export default function FullMenuPage({
  params,
}: {
  params: { category: string };
}) {
  // Tugas halaman ini sekarang hanya 2:
  // 1. Mengambil SEMUA data menu.
  const allMenuItems = menuData;

  // 2. Menyerahkan data dan kategori awal dari URL ke Client Component.
  return (
    <div className="container mx-auto px-6 py-24 pt-36 min-h-screen">
      <FullMenu allMenuItems={allMenuItems} initialCategory={params.category} />
    </div>
  );
}
