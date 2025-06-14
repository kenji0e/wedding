import React from 'react';

const FloatingWhatsAppButton = () => {
  const phoneNumber = '+62811181558';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 transition-transform duration-300 hover:scale-110 animate-bounce"
      style={{ zIndex: 1000 }} // Memastikan ikon tetap di atas
    >
      {/* Menggunakan elemen <img> untuk ikon WhatsApp */}
      <img
        src="/images/icon-whatsapp.png" // <<< GANTI DENGAN PATH GAMBAR ANDA
        alt="WhatsApp Icon"
        className="h-16 w-16 object-contain" // Ukuran ikon, sesuaikan jika perlu
      />
    </a>
  );
};

export default FloatingWhatsAppButton;