// components/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface CountdownProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  // Menginisialisasi timeLeft dengan objek kosong atau nilai default yang akan konsisten di server dan client.
  // Perhitungan sebenarnya akan dimulai di useEffect.
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [hasMounted, setHasMounted] = useState(false); // State untuk melacak hidrasi

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let calculatedTime: TimeLeft = {};

    if (difference > 0) {
      calculatedTime = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return calculatedTime;
  };

  useEffect(() => {
    // Set hasMounted menjadi true setelah komponen dihidrasi di client
    setHasMounted(true);
    // Lakukan perhitungan waktu awal setelah mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => { // Menggunakan setInterval untuk pembaruan setiap detik
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Menggunakan clearInterval untuk cleanup
  }, [targetDate]); // targetDate sebagai dependency jika bisa berubah

  // Jika belum di-mount (masih di server atau sebelum hidrasi), render null atau UI statis
  if (!hasMounted) {
    return (
        <div className="flex justify-center items-center font-bold text-gray-800 bg-white bg-opacity-80 p-4 rounded-xl shadow-lg">
             <span className="text-lg md:text-xl text-pink-700">Loading Countdown...</span>
        </div>
    );
  }

  const timerComponents: React.ReactNode[] = [];

  Object.entries(timeLeft).forEach(([interval, value]) => {
    if (typeof value === 'number') {
      timerComponents.push(
        <span key={interval} className="flex flex-col items-center mx-2 p-3 bg-white bg-opacity-20 rounded-lg">
          <span className="text-3xl md:text-4xl font-bold">{value.toString().padStart(2, '0')}</span>
          <span className="text-sm md:text-base capitalize">{interval}</span>
        </span>
      );
    }
  });

  return (
    <div className="flex justify-center items-center font-bold text-gray-800 bg-white bg-opacity-80 p-4 rounded-xl shadow-lg">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-lg md:text-xl text-pink-700">Acara Telah Dimulai!</span>
      )}
    </div>
  );
};

export default CountdownTimer;