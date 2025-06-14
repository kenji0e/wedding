// app/page.tsx
import HeroSection from '../components/HeroSection';
import AboutCouple from '../components/AboutCouple';
import EventDetails from '../components/EventDetails';
import React from 'react'; // Penting untuk JSX dalam komponen React
import { Lora, Great_Vibes } from 'next/font/google'; // Import font dari Next.js
import RainEffect from '../components/RainEffect';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';


// Inisialisasi font Google
// Lora: Untuk teks paragraf umum, body, dll.
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora', // Digunakan di tailwind.config.js
  weight: ['400', '700'],   // Pilih bobot yang ingin Anda gunakan
  display: 'swap',          // Strategi tampilan font
});

// Great Vibes: Untuk judul yang artistik atau tanda tangan
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes', // Digunakan di tailwind.config.js
  weight: '400',                  // Great Vibes biasanya hanya punya satu bobot
  display: 'swap',
});

// Komponen halaman utama
export default function Home() {
  return (
    // Terapkan variabel CSS font ke elemen <div> root
    // Ini akan membuat font tersedia di seluruh komponen anak
    <div className={`${lora.variable} ${greatVibes.variable} font-sans`}>
      <main>
        {/* Render komponen-komponen undangan Anda */}
        <RainEffect />
        <HeroSection />
        <AboutCouple />
        <EventDetails />
        <FloatingWhatsAppButton />
  
  

        {/* Anda bisa menambahkan komponen lain di sini, contoh: */}
        {/* <GallerySection /> */}
        {/* <RSVPForm /> */}
        {/* <GiftSection /> */}
        {/* <GuestbookSection /> */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}

