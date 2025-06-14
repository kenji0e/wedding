// app/page.tsx
"use client";

import HeroSection from '../components/HeroSection';
import AboutCouple from '../components/AboutCouple';
import EventDetails from '../components/EventDetails';
import React, { useRef } from 'react';
import { Lora, Great_Vibes } from 'next/font/google';
import RainEffect from '../components/RainEffect';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import AutoScrollParagraphs from '../components/AutoScrollParagraphs';

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

export default function Home() {
  const eventDetailsRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${lora.variable} ${greatVibes.variable} font-sans`}>
      <main>
        <RainEffect />
        {/* REMOVE eventDetailsRef from HeroSection call */}
        <HeroSection />
        <AboutCouple />
        {/* eventDetailsRef still needs to be passed to EventDetails */}
        <EventDetails ref={eventDetailsRef} />
        <FloatingWhatsAppButton />

        <AutoScrollParagraphs
          containerId="about-couple-section"
          paragraphSelector=".about-line"
          fixedScrollDuration={8000}
          delayBetweenLines={5000}
          initialDelay={3000}
        />
      </main>
    </div>
  );
}