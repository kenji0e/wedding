// components/AutoScrollParagraphs.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AutoScrollParagraphsProps {
  containerId: string; // ID dari container yang berisi paragraf yang akan digulir
  paragraphSelector?: string; // Selector CSS untuk baris/paragraf yang akan digulir (default: '.scroll-line')
  // REMOVE 'scrollSpeed?: number;' from here
  delayBetweenLines?: number; // Penundaan antara guliran satu baris ke baris berikutnya (ms)
  initialDelay?: number; // Penundaan awal sebelum scroll dimulai (ms)
  fixedScrollDuration?: number; // Prop ini yang kita gunakan sekarang untuk durasi tetap
}

const AutoScrollParagraphs: React.FC<AutoScrollParagraphsProps> = ({
  containerId,
  paragraphSelector = '.scroll-line',
  // REMOVE scrollSpeed from the destructured props
  delayBetweenLines = 1000,
  initialDelay = 0,
  fixedScrollDuration = 1000, // Nilai default 1000ms (1 detik)
}) => {
  const [isClient, setIsClient] = useState(false);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID "${containerId}" not found for AutoScrollParagraphs.`);
      return;
    }

    const paragraphs = Array.from(container.querySelectorAll(paragraphSelector)) as HTMLElement[];
    if (paragraphs.length === 0) {
      console.warn(`No paragraphs found with selector "${paragraphSelector}" inside container "${containerId}".`);
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isScrollingRef.current) {
          isScrollingRef.current = true;
          console.log(`Container "${containerId}" is visible. Starting auto-scroll.`);
          timeoutRef.current = setTimeout(() => {
            scrollToNextParagraph(0, paragraphs, container);
          }, initialDelay);
        } else if (!entry.isIntersecting && isScrollingRef.current) {
          isScrollingRef.current = false;
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          console.log(`Container "${containerId}" is not visible. Stopping auto-scroll.`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(container);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      isScrollingRef.current = false;
    };

  }, [isClient, containerId, paragraphSelector, fixedScrollDuration, delayBetweenLines, initialDelay]);

  const scrollToNextParagraph = (index: number, paragraphs: HTMLElement[], container: HTMLElement) => {
    if (index >= paragraphs.length) {
      console.log('Finished scrolling all paragraphs.');
      isScrollingRef.current = false;
      return;
    }

    const paragraph = paragraphs[index];
    const targetScrollTop = paragraph.offsetTop + container.offsetTop;

    const startScrollTop = window.pageYOffset;
    const distance = targetScrollTop - startScrollTop;
    const duration = fixedScrollDuration; // Menggunakan fixedScrollDuration

    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easedProgress = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startScrollTop + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        timeoutRef.current = setTimeout(() => {
          scrollToNextParagraph(index + 1, paragraphs, container);
        }, delayBetweenLines);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return null;
};

export default AutoScrollParagraphs;