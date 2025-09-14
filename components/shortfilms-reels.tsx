// components/shortfilms-shorts.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useCallback } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

// ---------- helpers ----------
const ytIdFromUrl = (url: string) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    return u.searchParams.get("v");
  } catch {
    return null;
  }
};
const ytThumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

const scrollByCard = (el: HTMLDivElement | null, px = 340) => {
  if (!el) return;
  el.scrollBy({ left: px, behavior: "smooth" });
};

// ---------- Row with in-view reveal ----------
const Row: React.FC<{
  children: React.ReactNode[];
  autoplay?: boolean;
  speedMs?: number;
  cardWidth?: number;
  gapPx?: number;
  // reveal controls
  stagger?: number;
}> = ({ children, autoplay = true, speedMs = 2600, cardWidth = 340, gapPx = 12, stagger = 0.06 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hovering = useRef(false);

  // autoplay ping-pong (smooth reverse at ends)
  const getMaxScrollLeft = useCallback(() => {
    const el = ref.current;
    if (!el) return 0;
    return Math.max(0, el.scrollWidth - el.clientWidth);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const el = ref.current;
    if (!el) return;

    const epsilon = 2;
    let dir: 1 | -1 = 1;
    const id = setInterval(() => {
      if (hovering.current) return;
      const maxX = getMaxScrollLeft();
      const x = el.scrollLeft;

      if (x >= maxX - epsilon) dir = -1;
      if (x <= 0 + epsilon) dir = 1;

      scrollByCard(el, dir * cardWidth);
    }, speedMs);

    return () => clearInterval(id);
  }, [autoplay, speedMs, cardWidth, getMaxScrollLeft]);

  // reveal variants
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: stagger, when: "beforeChildren" },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
  };

  return (
    <div className="relative">
<motion.div
  ref={ref}
  className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 py-2"
  onMouseEnter={() => (hovering.current = true)}
  onMouseLeave={() => (hovering.current = false)}
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
>
  {React.Children.map(children, (child) => (
    <motion.div
      variants={item}
      className="shrink-0 snap-start"   // ⬅️ keep each card’s width
      style={{ display: "inline-flex" }} // ⬅️ let the child define its own size
    >
      {child}
    </motion.div>
  ))}
</motion.div>

{/* arrows on top of content */}
<button
  aria-label="scroll left"
  onClick={() => scrollByCard(ref.current, -cardWidth)}
  className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white shadow hover:bg-black/70 focus:outline-none z-10"
/>
<button
  aria-label="scroll right"
  onClick={() => scrollByCard(ref.current, cardWidth)}
  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white shadow hover:bg-black/70 focus:outline-none z-10"
/>

    </div>
  );
};

// ---------- DATA ----------
const YOUTUBE_FILMS = [
  "https://www.youtube.com/watch?v=EMgDqzUhacU",
  "https://www.youtube.com/watch?v=ggKbSQ3WwAY",
  "https://www.youtube.com/watch?v=p1TNK_x01RU",
  "https://www.youtube.com/watch?v=dHS-yyUm2iM",
  "https://www.youtube.com/watch?v=8g5Qcxy1Ghg",
];

const YT_SHORTS_IDS: string[] = [
  "ZFWfW-pD2SM","kjvOVqpJp3k","Zs1NwjMKG0c","4MfNDI9uLgk","R1ree96qWeA","w_N8Pkx9fls","V-DIpeimfhY","f4QRF_PphTY"
];

export default function ShortfilmsAndShorts() {
  const filmCards = useMemo(() => {
    return YOUTUBE_FILMS.map((href) => {
      const id = ytIdFromUrl(href);
      if (!id) return null;
      return (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group relative aspect-video w-[320px] shrink-0 snap-start overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
        >
          <Image
            src={ytThumb(id)}
            alt="YouTube thumbnail"
            fill
            sizes="320px"
            className="object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
          <div className="pointer-events-none absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white">
            Watch →
          </div>
        </a>
      );
    }).filter(Boolean) as React.ReactNode[];
  }, []);

  const shortCards = useMemo(() => {
    return YT_SHORTS_IDS.map((id) => (
      <a
        key={id}
        href={`https://www.youtube.com/shorts/${id}`}
        target="_blank"
        rel="noreferrer"
        className="relative w-[210px] shrink-0 snap-start overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
        style={{ aspectRatio: "9/16" }}
      >
        <Image
          src={ytThumb(id)}
          alt="YouTube Short thumbnail"
          fill
          sizes="210px"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white">
          @rishivarman6998
        </div>
      </a>
    ));
  }, []);

  return (
    <section id="contents" className="mb-28 w-full max-w-7xl scroll-mt-28 sm:mb-40">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <SectionHeading>My Short-Films & Contents</SectionHeading>
      </motion.div>

      {/* Row 1: Films */}
      <Row autoplay speedMs={2400} cardWidth={320} gapPx={12} stagger={0.07}>
        {filmCards}
      </Row>

      {/* Row 2: Shorts */}
      <div className="mt-6" />
      <Row autoplay speedMs={2200} cardWidth={210} gapPx={12} stagger={0.06}>
        {shortCards.length > 0 ? shortCards : [
          <div className="text-sm text-gray-500 dark:text-white/60 px-4" key="no-shorts">
            Add your Shorts IDs to <code>YT_SHORTS_IDS</code> in <code>shortfilms-shorts.tsx</code>.
          </div>
        ]}
      </Row>

      {/* hide horizontal scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
