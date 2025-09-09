// src/components/sections/MenuItemCard.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MenuItem } from "@/lib/types";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const formatRupiah = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <CardContent className="p-0 flex-grow flex flex-col">
          {/* Kontainer untuk Gambar Foto */}
          <div className="relative w-full h-48">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {item.tags && (
              <div className="absolute top-3 right-3">
                <Badge>{item.tags[0]}</Badge>
              </div>
            )}
          </div>
          {/* Detail Teks */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 flex-grow">
              {item.description}
            </p>
            <p className="font-bold text-primary text-lg mt-4">
              {formatRupiah(item.price)}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
