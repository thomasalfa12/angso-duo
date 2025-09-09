// src/lib/types.ts
export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string; // Path ke doodle SVG kita
    category: 'Makanan' | 'Minuman' | 'Cemilan';
    tags?: ('Best Seller' | 'Baru')[];
  }

  export type GalleryItem = {
    id: number;
    title: string;
    description: string;
    image: string;
  };

  export type TestimonialItem = {
    id: number;
    name: string;
    title: string;
    quote: string;
    image: string;
    rating: number; // Rating dari 1 sampai 5
  };
  