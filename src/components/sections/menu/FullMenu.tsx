// src/components/sections/menu/FullMenu.tsx
"use client"; // <-- Tandai sebagai Client Component karena interaktif

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuItemCard } from "@/components/sections/menu/MenuItemCard";
import type { MenuItem } from "@/lib/types";

interface FullMenuProps {
  allMenuItems: MenuItem[];
  initialCategory: string; // Kategori awal dari URL
}

export function FullMenu({ allMenuItems, initialCategory }: FullMenuProps) {
  const categories = [
    { name: "Makanan", slug: "makanan" },
    { name: "Minuman", slug: "minuman" },
    { name: "Cemilan", slug: "cemilan" },
  ];

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Jelajahi Menu Lengkap Kami</h1>
        <p className="text-muted-foreground mb-12">
          Pilih hidangan favorit Anda dari koleksi lengkap kami.
        </p>
      </div>

      <Tabs defaultValue={initialCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
          {categories.map((cat) => (
            <TabsTrigger key={cat.slug} value={cat.slug}>
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.slug} value={cat.slug}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {allMenuItems
                .filter((item) => item.category === cat.name)
                .map((item, index) => (
                  <MenuItemCard key={item.id} item={item} index={index} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
