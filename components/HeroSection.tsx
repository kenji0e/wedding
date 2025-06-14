"use client";

import React, { useRef, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

const HeroSection: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Tanggal Pernikahan Anda (GANTI DENGAN TANGGAL ASLI ANDA)
  const weddingDate = "2025-06-22T10:00:00"; // Contoh: 14 September 2025, jam 9 pagi WIB

  // Fungsi untuk memutar musik dan melakukan scroll (dipanggil oleh tombol)
  const handleOpenInvite = () => {
    // Mencoba memutar musik. Ini akan berhasil hanya jika ada interaksi pengguna sebelumnya.
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Gagal memutar musik secara otomatis:", error);
        // Anda bisa menambahkan UI di sini untuk memberitahu pengguna
        // "Klik tombol play di pojok kanan bawah untuk memutar musik"
      });
    }

    // Scroll ke bawah setinggi viewport untuk menampilkan konten berikutnya
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  
       return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image: Ganti URL gambar di sini */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bunga.jpg')" }} // <<< GANTI BARIS INI
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay hitam untuk kontras */}
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

        {/* CountdownTimer */}
        <CountdownTimer targetDate={weddingDate} />

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