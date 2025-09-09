// src/app/menu/[category]/page.tsx
import { menuData } from "@/data/mock"; // atau "@/data/menu" sesuai file kamu
import { FullMenu } from "@/components/sections/menu/FullMenu";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function FullMenuPage({ params }: Props) {
  const { category } = await params; // <- wajib di-await

  return (
    <div className="container mx-auto px-6 py-24 pt-36 min-h-screen">
      <FullMenu allMenuItems={menuData} initialCategory={category} />
    </div>
  );
}
