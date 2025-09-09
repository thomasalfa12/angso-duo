// src/components/sections/MenuTabs.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MenuItem } from "@/lib/types";
import { MenuItemCard } from "../menu/MenuItemCard"; // <-- Impor komponen baru kita

interface MenuTabsProps {
  makanan: MenuItem[];
  cemilan: MenuItem[];
  minuman: MenuItem[];
}

export function MenuTabs({ makanan, cemilan, minuman }: MenuTabsProps) {
  const categories = [
    { name: "Makanan", data: makanan, slug: "makanan" },
    { name: "Minuman", data: minuman, slug: "minuman" },
    { name: "Cemilan", data: cemilan, slug: "cemilan" },
  ];

  return (
    <Tabs defaultValue="Minuman" className="w-full">
      <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
        {categories.map((cat) => (
          <TabsTrigger key={cat.name} value={cat.name}>
            {cat.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((cat) => (
        <TabsContent key={cat.name} value={cat.name}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Tampilkan 3 item pertama menggunakan MenuItemCard */}
            {cat.data.slice(0, 3).map((item, index) => (
              <MenuItemCard key={item.id} item={item} index={index} />
            ))}

            {/* Kartu Spesial "Lihat Semua" */}
            {cat.data.length > 3 && (
              <Link href={`/menu/${cat.slug}`} passHref>
                <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col items-center justify-center bg-secondary/50 hover:bg-secondary">
                  <CardContent className="p-4 text-center">
                    <ArrowRight className="w-12 h-12 text-primary mx-auto mb-4 transition-transform group-hover:translate-x-2" />
                    <h3 className="font-bold text-lg">
                      Lihat Semua
                      <br />
                      {cat.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
