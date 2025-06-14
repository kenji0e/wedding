"use client";

import React, { useRef, useEffect } from 'react';

const RainEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found!");
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("2D context not supported!");
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    // Array untuk menyimpan setiap tetesan hujan
    const raindrops: Raindrop[] = [];
    const numRaindrops = 200;

    // Kelas untuk satu tetesan hujan
    class Raindrop {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      private canvas: HTMLCanvasElement; // <<< Tambahkan properti canvas
      private ctx: CanvasRenderingContext2D; // <<< Tambahkan properti ctx

      constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) { // <<< Terima canvas dan ctx sebagai argumen
        this.canvas = canvas; // <<< Simpan referensi canvas
        this.ctx = ctx;       // <<< Simpan referensi ctx
        this.x = Math.random() * this.canvas.width; // <<< Gunakan this.canvas.width
        this.y = Math.random() * this.canvas.height; // <<< Gunakan this.canvas.height
        this.length = Math.random() * 8 + 5;
        this.speed = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.4 + 0.3;
      }

      // Metode untuk menggambar tetesan hujan
      draw() {
        this.ctx.beginPath(); // <<< Gunakan this.ctx
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x, this.y + this.length);
        this.ctx.strokeStyle = `rgba(174, 194, 224, ${this.opacity})`;
        this.ctx.lineWidth = 1;
        this.ctx.lineCap = 'round';
        this.ctx.stroke();
      }

      // Metode untuk memperbarui posisi tetesan hujan
      update() {
        this.y += this.speed;
        // Jika tetesan keluar dari bawah layar, reset ke atas
        if (this.y > this.canvas.height) { // <<< Gunakan this.canvas.height
          this.y = -this.length;
          this.x = Math.random() * this.canvas.width; // <<< Gunakan this.canvas.width
          this.speed = Math.random() * 3 + 2;
        }
      }
    }

    // Inisialisasi tetesan hujan
    for (let i = 0; i < numRaindrops; i++) {
      raindrops.push(new Raindrop(canvas, ctx)); // <<< Lewatkan canvas dan ctx saat membuat instance
    }

    // Fungsi animasi utama
    const animate = () => {
      // Tidak perlu lagi pengecekan null di sini karena canvas dan ctx sudah dijamin oleh closure
      // dan diteruskan ke Raindrop.
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Masih gunakan ctx dan canvas lokal di sini

      for (const drop of raindrops) {
        drop.update();
        drop.draw();
      }

      requestAnimationFrame(animate);
    };

    // Mulai animasi
    animate();

    // Cleanup function: hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
};

export default RainEffect;