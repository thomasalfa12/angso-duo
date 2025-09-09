import type { GalleryItem } from "@/lib/types";
import type { TestimonialItem } from "@/lib/types";
import type { MenuItem } from "@/lib/types";

// Helper untuk membuat URL placeholder dari dummyimage.com
const placeholderUrl = (text: string) => {
  const formattedText = text.replace(/\s/g, '+');
  // Format: ukuran/warna_bg/warna_teks.format&text=IsiTeks
  return `https://dummyimage.com/400x400/FDF9F0/6B4F4F.png&text=${formattedText}`;
}

const avatarUrl = (name: string) => {
  const formattedName = name.replace(/\s/g, '+');
  // Format: api/?name=Nama+Anda&background=warna_bg&color=warna_teks
  return `https://ui-avatars.com/api/?name=${formattedName}&background=D97706&color=FDF9F0&font-size=0.4`;
};

  // src/data/menu.ts


  export const menuData: MenuItem[] = [
    // Minuman
    {
      id: "min01",
      name: "Kopi Susu Gula Aren",
      description: "Perpaduan espresso kuat, susu segar, dan manis alami dari gula aren asli Jambi, menciptakan rasa hangat dan autentik.",
      price: 22000,
      image: placeholderUrl('Kopi Susu'),
      category: "Minuman",
      tags: ["Best Seller"],
    },
    {
      id: "min02",
      name: "V60 Manual Brew",
      description: "Metode pour-over dengan alat V60 untuk menonjolkan karakteristik kopi arabika single origin.",
      price: 25000,
      image: placeholderUrl('V60 Brew'),
      category: "Minuman",
    },
    {
      id: "min03",
      name: "Iced Americano",
      description: "Espresso shot yang dipadukan dengan air dingin, memberikan sensasi segar dengan aftertaste yang ringan.",
      price: 20000,
      image: placeholderUrl('Iced Americano'),
      category: "Minuman",
    },
    {
      id: "min04",
      name: "Vietnam Drip",
      description: "Kopi pekat dengan metode tetes khas Vietnam, disajikan dengan pilihan susu kental manis.",
      price: 24000,
      image: placeholderUrl('Vietnam Drip'),
      category: "Minuman",
    },
    {
      id: "min05",
      name: "Oat Latte",
      description: "Espresso dengan campuran susu oat, pilihan sehat dengan rasa lembut dan creamy.",
      price: 28000,
      image: placeholderUrl('Oat Latte'),
      category: "Minuman",
    },
    {
      id: "min06",
      name: "Matcha Latte",
      description: "Bubuk teh hijau premium dipadukan dengan susu segar, menghasilkan rasa earthy yang menenangkan.",
      price: 27000,
      image: placeholderUrl('Matcha Latte'),
      category: "Minuman",
    },
    {
      id: "min07",
      name: "Lemon Tea",
      description: "Teh hitam segar dengan perasan lemon alami, minuman ringan dan menyegarkan.",
      price: 18000,
      image: placeholderUrl('Lemon Tea'),
      category: "Minuman",
    },
  
    // Makanan
    {
      id: "mak01",
      name: "Nasi Goreng Angso Duo",
      description: "Nasi goreng spesial dengan bumbu rahasia, disajikan dengan telur mata sapi, acar, dan kerupuk renyah.",
      price: 35000,
      image: placeholderUrl('Nasi Goreng'),
      category: "Makanan",
      tags: ["Best Seller"],
    },
    {
      id: "mak02",
      name: "Spaghetti Bolognese",
      description: "Pasta Italia al dente dengan saus tomat daging cincang, taburan parmesan, dan herbs aromatik.",
      price: 45000,
      image: placeholderUrl('Spaghetti'),
      category: "Makanan",
    },
    {
      id: "mak03",
      name: "Ayam Sambal Matah",
      description: "Ayam goreng renyah disiram dengan sambal matah segar khas Bali yang pedas dan harum.",
      price: 38000,
      image: placeholderUrl('Sambal Matah'),
      category: "Makanan",
    },
    {
      id: "mak04",
      name: "Kentucky Fried Chicken",
      description: "Potongan ayam goreng krispi dengan bumbu khas, gurih di luar dan juicy di dalam.",
      price: 30000,
      image: placeholderUrl('Kentucky'),
      category: "Makanan",
    },
    {
      id: "mak05",
      name: "Pizzeria",
      description: "Pizza tipis dengan topping keju mozarella leleh, saus tomat, dan pepperoni pilihan.",
      price: 50000,
      image: placeholderUrl('Pizzeria'),
      category: "Makanan",
    },
    {
      id: "mak06",
      name: "Chicken Teriyaki Rice Bowl",
      description: "Nasi hangat dengan topping ayam teriyaki manis gurih, disajikan bersama sayuran segar.",
      price: 42000,
      image: placeholderUrl('Teriyaki'),
      category: "Makanan",
    },
    {
      id: "mak07",
      name: "Mie Goreng Spesial",
      description: "Mie goreng dengan bumbu khas, telur, irisan ayam, sayuran, dan topping kerupuk.",
      price: 32000,
      image: placeholderUrl('Mie Goreng'),
      category: "Makanan",
    },
  
    // Cemilan
    {
      id: "cem01",
      name: "Pisang Goreng Keju",
      description: "Pisang goreng krispi dengan topping keju parut dan susu kental manis.",
      price: 18000,
      image: placeholderUrl('Pisang Goreng'),
      category: "Cemilan",
    },
    {
      id: "cem02",
      name: "Croissant Coklat",
      description: "Pastry berlapis renyah dengan isian coklat premium yang meleleh di mulut.",
      price: 22000,
      image: placeholderUrl('Croissant'),
      category: "Cemilan",
    },
    {
      id: "cem03",
      name: "French Fries",
      description: "Kentang goreng renyah, gurih, dan disajikan dengan saus pilihan.",
      price: 20000,
      image: placeholderUrl('French Fries'),
      category: "Cemilan",
    },
    {
      id: "cem04",
      name: "Onion Rings",
      description: "Bawang bombay digoreng tepung renyah, cocok sebagai camilan santai.",
      price: 21000,
      image: placeholderUrl('Onion Rings'),
      category: "Cemilan",
    },
    {
      id: "cem05",
      name: "Churros Cinnamon",
      description: "Churros renyah ditaburi gula kayu manis, disajikan dengan saus coklat celup.",
      price: 25000,
      image: placeholderUrl('Churros'),
      category: "Cemilan",
    },
    {
      id: "cem06",
      name: "Donat Gula",
      description: "Donat klasik tabur gula halus, lembut dan manis sederhana.",
      price: 15000,
      image: placeholderUrl('Donut'),
      category: "Cemilan",
    },
    {
      id: "cem07",
      name: "Tahu Crispy",
      description: "Tahu goreng tepung garing dengan bumbu tabur pedas gurih.",
      price: 17000,
      image: placeholderUrl('Tahu Crispy'),
      category: "Cemilan",
    },
  ];
  
  
  export const galleryData: GalleryItem[] = [
    {
      id: 1,
      title: 'Suasana Pagi Hari',
      description: 'Sinar matahari pagi yang hangat perlahan menembus jendela kaca, menciptakan cahaya keemasan yang menenangkan. Di meja kayu sederhana, secangkir kopi panas mengepul, mengeluarkan aroma khas yang menenangkan pikiran. Suasana ini mengundang siapa pun untuk berhenti sejenak, menarik napas dalam-dalam, dan merasakan ketenangan sebelum memulai aktivitas sehari-hari.',
      image: '/images/gallery/suasana-pagi.jpg',
    },
    {
      id: 2,
      title: 'Seni di Atas Kopi',
      description: 'Setiap cangkir kopi bukan sekadar minuman, melainkan sebuah karya seni. Barista kami dengan penuh konsentrasi menuangkan susu ke dalam espresso, membentuk pola-pola indah yang halus dan presisi. Dari bentuk hati sederhana hingga motif rumit seperti tulip atau angsa, setiap latte art mencerminkan dedikasi dan gairah dalam merayakan keindahan kopi.',
      image: '/images/gallery/latte-art.jpg',
    },
    {
      id: 3,
      title: 'Sudut Baca Favorit',
      description: 'Di sudut kafe yang tenang, terdapat sebuah ruang baca yang nyaman dengan kursi empuk dan rak buku yang penuh cerita. Suasana hening hanya ditemani suara halaman yang dibalik dan dentingan sendok kecil yang beradu dengan cangkir. Tempat ini menjadi oase bagi para pecinta buku, di mana kopi hangat menemani setiap perjalanan imajinasi dari satu halaman ke halaman lainnya.',
      image: '/images/gallery/sudut-baca.jpg',
    },
    {
      id: 4,
      title: 'Dari Biji Pilihan',
      description: 'Setiap tetes kopi yang Anda nikmati berasal dari biji arabika pilihan yang tumbuh subur di tanah Jambi. Proses panen dilakukan dengan teliti, hanya memilih buah kopi yang matang sempurna. Setelah itu, biji diproses dengan teknik tradisional sekaligus modern untuk menjaga keaslian cita rasa. Hasilnya adalah kopi dengan karakter rasa yang kaya, seimbang, dan meninggalkan kesan mendalam di setiap tegukan.',
      image: '/images/gallery/biji-kopi.jpg',
    },
  ];
  

 
  export const testimonialData: TestimonialItem[] = [
    {
      id: 1,
      name: 'Ahmad Maulana',
      title: 'Pencinta Kopi',
      quote: 'Espresso di sini benar-benar mengubah cara saya memandang kopi. Strong, bold, dan tak terlupakan!',
      image: avatarUrl('Ahmad Maulana'), // <-- GANTI DENGAN FUNGSI INI
      rating: 5,
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      title: 'Mahasiswi',
      quote: 'Tempat ternyaman untuk nugas. Wifinya kencang, suasananya tenang, dan croissant coklatnya juara!',
      image: avatarUrl('Siti Nurhaliza'), // <-- GANTI DENGAN FUNGSI INI
      rating: 5,
    },
    {
      id: 3,
      name: 'Budi Santoso',
      title: 'Freelancer',
      quote: 'Sering meeting dengan klien di sini. Tempatnya representatif dan pelayanannya selalu ramah.',
      image: avatarUrl('Budi Santoso'), // <-- GANTI DENGAN FUNGSI INI
      rating: 4,
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      title: 'Pengunjung Setia',
      quote: 'Dari dulu sampai sekarang kualitasnya tidak pernah turun. Angso Duo adalah rumah kedua bagi saya.',
      image: avatarUrl('Dewi Lestari'), // <-- GANTI DENGAN FUNGSI INI
      rating: 5,
    },
  ];