// components/AboutCouple.tsx
import React from 'react';

const AboutCouple: React.FC = () => {
  return (
    // <<< ENSURE THIS ID IS PRESENT AND CORRECT
    <section id="about-couple-section" className="py-8 md:py-16 bg-gradient-to-t from-pink-50 to-white text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 text-pink-700 font-script leading-tight">
          Love Story Rizka & Ihlan
        </h2>
        <p className="about-line text-center text-lg md:text-xl leading-relaxed mb-12 text-gray-700 max-w-3xl mx-auto italic">
          "Cinta bukanlah tentang menemukan seseorang yang sempurna, tapi tentang melihat seseorang yang tidak sempurna dengan cara yang sempurna."
        </p>

        {/* Bagian Profil Pasangan */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-16">
          {/* Profil Sarah */}
          <div className="text-center group">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-300 shadow-xl group-hover:border-pink-500 transition duration-300 transform group-hover:scale-105">
              <img
                src="/images/1.png"
                alt="Sarah Amelia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-pink-600 font-script">Rizka Melinda S.Bio K</h3>
            <p className="about-line text-gray-600 italic">
              "My dearest Ihlan, you are my greatest adventure."
            </p>
            <p className="about-line mt-4 text-sm text-gray-700 max-w-xs mx-auto">
              Seorang wanita dengan hati yang lembut dan berkewirausahaan dalam sehari-harinya. Rizka membawa warna dan kebahagiaan dalam setiap momen.
            </p>
          </div>

          {/* Ikon Hati / Simbol */}
          <div className="text-5xl text-pink-500 animate-pulse hidden md:block">
            ❤
          </div>

          {/* Profil David */}
          <div className="text-center group">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-300 shadow-xl group-hover:border-pink-500 transition duration-300 transform group-hover:scale-105">
              <img
                src="/images/2.png"
                alt="David Pratama"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-pink-600 font-script">Muhammad Ihlan Bachtiar</h3>
            <p className="about-line text-gray-600 italic">
              "Rizka, with you, every day feels like a dream."
            </p>
            <p className="about-line mt-4 text-sm text-gray-700 max-w-xs mx-auto">
              Seorang lelaki yang bertanggung jawab dengan jiwa yang tenang, penyayang dan selalu menemukan keindahan dalam setiap hal kecil.
            </p>
          </div>
        </div>

        {/* Bagian Kisah Cinta Kami */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-pink-100 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-pink-600 font-script">
            Our Love Story
          </h3>
          <p className="about-line text-center text-gray-700 mb-8 leading-relaxed">
            Kisah Rizka & Ihlan adalah bukti bahwa takdir punya cara unik mempertemukan dua hati. Dimulai dari sebuah obrolan tak terduga, benih cinta perlahan tumbuh, mengikat mereka dalam janji suci.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Momen 1: Pertemuan Pertama */}
            <div className="flex flex-col items-center p-4">
              <svg className="w-12 h-12 text-pink-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Pertemuan Pertama</h4>
              <p className="about-line text-sm text-gray-600">
                Mei 2022 - Di sebuah festival seni, takdir mempertemukan mereka melalui sebuah lukisan yang sama-sama mereka kagumi.
              </p>
            </div>

            {/* Momen 2: Kencan Pertama */}
            <div className="flex flex-col items-center p-4">
              <svg className="w-12 h-12 text-pink-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Kencan Pertama</h4>
              <p className="about-line text-sm text-gray-600">
                Juli 2022 - Kopi pertama yang berlanjut hingga senja, menyadari betapa banyak kesamaan di antara mereka.
              </p>
            </div>

            {/* Momen 3: Lamaran */}
            <div className="flex flex-col items-center p-4">
              <svg className="w-12 h-12 text-pink-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Lamaran Romantis</h4>
              <p className="about-line text-sm text-gray-600">
                Mei 2025 - Di puncak gunung dengan bintang sebagai saksi, sebuah 'ya' abadi terucap.
              </p>
            </div>
          </div>
        </div>
        <p className="about-line text-center text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
          Setiap momen adalah bagian dari mozaik kisah kami. Kami tidak sabar untuk menulis babak selanjutnya bersama Anda semua.
        </p>
      </div>
    </section>
  );
};

export default AboutCouple;