import React, { forwardRef } from 'react'; // Impor forwardRef di sini

const eventData = [
  {
    type: 'Akad & Resepsi Pernikahan',
    date: 'Sabtu, 22 Juni 2025',
    time: 'Pukul 08.00 WIB - Selesai',
    locationName: 'Perum Bukit Waringin',
    address: 'Blok B4 No.5 (Pendopo RT.12)',
    googleMapsPageLink: 'https://maps.app.goo.gl/Bg1jSXEQiq7tiU7e7', // URL Google Maps halaman
    googleMapsEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.763058327157!2d106.78744501994034!3d-6.4952105889992815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c24f59ee6d69%3A0xbe98a37f78f64f03!2sJl.%20Bambu%20Ampel%20Blok%20B4%20No.5%2C%20Kedung%20Waringin%2C%20Kecamatan%20Bojonggede%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016923!5e0!3m2!1sid!2sid!4v1749875179600!5m2!1sid!2sid', // << GANTI INI dengan URL embed ASLI dari Google Maps untuk AKAD
  },
];

// Ubah EventDetails menjadi komponen yang menggunakan forwardRef
// ref akan merujuk ke elemen <section> utama dari EventDetails
const EventDetails = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    // Pasang ref ke elemen <section> utama.
    // Pastikan elemen ini adalah elemen terluar dari komponen yang ingin Anda gulirkan.
    <section ref={ref} id="event-details" className="py-8 md:py-16 bg-gradient-to-br from-pink-50 to-white text-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-pink-700 font-script leading-tight"></h2> */}

        {/* Grid ini akan menampilkan setiap acara (akad & resepsi) dalam kotaknya sendiri */}
        <div className="grid grid-cols-1 gap-6 md:gap-10">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-pink-100 flex flex-col justify-between"
            >
              <div>
                {/* Judul Acara (Akad Nikah / Resepsi Pernikahan) */}
                <h3 className="text-2xl font-semibold text-center mb-6 text-pink-600 font-script">
                  {event.type}
                </h3>

                {/* Detail Waktu dan Lokasi */}
                <div className="space-y-4 mb-6">
                  {/* Tanggal */}
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-4 text-pink-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <p className="text-lg font-medium">{event.date}</p>
                  </div>
                  {/* Waktu */}
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-4 text-pink-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className="text-lg font-medium">{event.time}</p>
                  </div>
                  {/* Nama Lokasi & Alamat */}
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mt-1 mr-4 text-pink-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <p className="text-lg font-medium leading-relaxed">
                      {event.locationName}
                      <br />
                      {event.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bagian Peta Google Maps */}
              {event.googleMapsEmbedSrc && ( // Pastikan ada URL embed sebelum menampilkan peta
                <div className="mt-8 pt-6 border-t border-pink-50"> {/* Border atas untuk pemisah visual */}
                  <h4 className="text-2xl font-semibold text-center mb-4 text-pink-600">Peta Lokasi</h4>
                  <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md mb-6"> {/* Ukuran iframe */}
                    <iframe
                      src={event.googleMapsEmbedSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  {/* Tombol Buka di Google Maps */}
                  <a
                    href={event.googleMapsPageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full text-center px-6 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition duration-300 transform hover:scale-105"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-lg md:text-xl text-gray-700 mt-12 px-4 max-w-3xl mx-auto italic">
          Kehadiran Anda adalah hadiah terindah bagi kami. Mohon doa restu dari Bapak/Ibu/Saudara/i sekalian.
        </p>
      </div>
    </section>
  );
});

// Penting: Berikan nama tampilan untuk debugging React DevTools
EventDetails.displayName = 'EventDetails';

export default EventDetails;