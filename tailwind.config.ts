// tailwind.config.ts
import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Daftarkan warna kustom kita di sini
      colors: {
        brown: 'var(--brown)', // 'brown' sekarang menjadi nama warna resmi di Tailwind
      },
      // Daftarkan juga font kustom kita di sini
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [animate],
}
export default config