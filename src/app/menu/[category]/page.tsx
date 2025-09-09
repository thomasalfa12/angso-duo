import { menuData } from "@/data/mock";
import { FullMenu } from "@/components/sections/menu/FullMenu";

// 1. Definisikan tipe untuk props di sini menggunakan interface
interface FullMenuPageProps {
  params: {
    category: string;
  };
}

// 2. Gunakan interface yang sudah dibuat sebagai tipe untuk props
export default function FullMenuPage({ params }: FullMenuPageProps) {
  const allMenuItems = menuData;

  return (
    <div className="container mx-auto px-6 py-24 pt-36 min-h-screen">
      <FullMenu allMenuItems={allMenuItems} initialCategory={params.category} />
    </div>
  );
}
