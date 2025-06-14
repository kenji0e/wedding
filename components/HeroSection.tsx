// components/HeroSection.tsx
"use client";

import React, { useRef, useEffect, useState } from 'react';
import CountdownTimer from './CountdownTimer';

// Hapus interface HeroSectionProps karena tidak lagi menerima eventDetailsRef
// Jika komponen ini tidak menerima props, interface tidak lagi diperlukan.
// interface HeroSectionProps {
//   eventDetailsRef: React.RefObject<HTMLElement>;
// }

// Hapus eventDetailsRef dari parameter fungsi karena tidak lagi diterima sebagai prop
const HeroSection: React.FC = () => { // Tidak ada props lagi di sini
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Tanggal Pernikahan Anda (GANTI DENGAN TANGGAL ASLI ANDA)
  const weddingDate = "2025-06-22T10:00:00";

  // Fungsi untuk memutar musik dan melakukan scroll ke akhir HeroSection
  const handleOpenInvite = () => {
    // 1. Putar Musik
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Gagal memutar musik secara otomatis:", error);
      });
    }

    // 2. Gulir ke bawah setinggi viewport untuk menampilkan konten berikutnya
    // Ini akan menggulir ke akhir HeroSection itu sendiri.
    if (isClient) { // Pastikan operasi window hanya di client
      window.scrollTo({
        top: window.innerHeight, // Gulir setinggi 100% dari viewport saat ini
        behavior: 'smooth'
      });
      console.log('Tombol Buka Undangan diklik. Menggulir ke akhir HeroSection.');
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image: Ganti URL gambar di sini */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bunga.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 max-w-2xl mx-auto flex flex-col items-center">
        <p className="text-lg md:text-xl mb-2 font-serif italic">The Wedding Of</p>
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 leading-tight">
          Rizka & Ihlan
        </h1>
        <p className="text-xl md:text-3xl font-semibold mb-8">
          22 Juni 2025
        </p>

        {isClient && <CountdownTimer targetDate={weddingDate} />}

        <button
          onClick={handleOpenInvite}
          className="px-8 py-3 bg-white text-gray-800 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg mt-8"
        >
          Buka Undangan
        </button>
      </div>

      {/* Elemen Audio (pastikan path ke file audio Anda benar) */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/wedding-song.mp3" type="audio/mpeg" />
        Browser Anda tidak mendukung elemen audio.
      </audio>
    </section>
  );
};

export default HeroSection;