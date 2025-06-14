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
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [hasMounted, setHasMounted] = useState(false);

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
    setHasMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

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
        // PERUBAHAN DI SINI:
        // mx-1 untuk margin horizontal kecil di mobile, mx-2 untuk desktop
        // p-2 untuk padding kecil di mobile, p-3 untuk desktop
        <span key={interval} className="flex flex-col items-center mx-1 sm:mx-2 p-2 sm:p-3 bg-white bg-opacity-60 rounded-lg">
          {/* text-2xl untuk angka di mobile, md:text-4xl untuk desktop */}
          <span className="text-2xl md:text-4xl font-bold">{value.toString().padStart(2, '0')}</span>
          {/* text-xs untuk label di mobile, md:text-base untuk desktop */}
          <span className="text-xs md:text-base capitalize">{interval}</span>
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