import type { Metadata } from 'next';
import { Lora, Great_Vibes } from 'next/font/google';
import './globals.css'; // Pastikan ini diimpor

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '700'],
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Undangan Pernikahan Ihlan & Rizka',
  description: 'Undangan Pernikahan Ihlan & Rizka',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${lora.variable} ${greatVibes.variable}`}>
      <body className="bg-amber-700 flex justify-center py-8 px-4 md:px-6"  style={{ backgroundImage: "url('/images/sakura.jpg')" }} > {/* <<< Perubahan di sini */}
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden"> {/* <<< Container baru */}
          {children}
        </div>
      </body>
    </html>
  );
}