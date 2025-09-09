import { Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";

// Komponen sederhana untuk konsistensi logo
const Logo = () => (
  <Link
    href="/"
    className="text-2xl font-bold text-primary-foreground hover:opacity-90 transition-opacity"
  >
    Angso Duo Cafe
  </Link>
);

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    // Tambahkan media sosial lain di sini jika perlu
    // { icon: Facebook, href: "#", name: "Facebook" },
    // { icon: X, href: "#", name: "X" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 pt-16 pb-12">
        {/* === Area Konten Utama Footer === */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Kolom Tentang (dibuat lebih lebar di layar besar) */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-primary-foreground/80 max-w-sm">
              Menyajikan kopi terbaik dengan biji pilihan dan suasana hangat di
              jantung kota Jambi.
            </p>
          </div>

          {/* Kolom Kontak & Alamat */}
          <div>
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/90 mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Jl. Jend. Sudirman No. 123, Thehok, Jambi Selatan, Kota Jambi
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>(0741) 123456 / 0812-3456-7890</span>
              </li>
            </ul>
          </div>

          {/* Kolom Jam Buka */}
          <div>
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/90 mb-4">
              Jam Buka
            </h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Senin - Jumat: 08:00 - 22:00</li>
              <li>Sabtu - Minggu: 09:00 - 23:00</li>
            </ul>
          </div>
        </div>

        {/* === Sub-Footer: Copyright & Social Media === */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Angso Duo Cafe. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
