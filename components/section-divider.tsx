"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Recent Graduate",
  "Full-Stack Engineer",
  "Data Engineer",
  "Machine Learning Enthusiast",
  "Video Creator",
  "Filmmaker",
];

export default function SectionDivider() {
  const roles = useMemo(() => ROLES, []);
  const [i, setI] = useState(0); // role index
  const [j, setJ] = useState(0); // char index
  const [back, setBack] = useState(false);
  const mounted = useRef(true);

  useEffect(() => () => { mounted.current = false; }, []);

  useEffect(() => {
    const current = roles[i];
    const atEnd = j === current.length;
    const atStart = j === 0;
    const hold = back ? 200 : 900;
    const typeSpeed = back ? 35 : 85;

    let t: number;
    if (!back && atEnd) {
      t = window.setTimeout(() => mounted.current && setBack(true), hold);
    } else if (back && atStart) {
      t = window.setTimeout(() => {
        if (!mounted.current) return;
        setBack(false);
        setI((p) => (p + 1) % roles.length);
      }, 220);
    } else {
      t = window.setTimeout(
        () => mounted.current && setJ((p) => p + (back ? -1 : 1)),
        typeSpeed
      );
    }
    return () => clearTimeout(t);
  }, [i, j, back, roles]);

  return (
    <div className="relative my-16 flex items-center justify-center">
      <div className="relative mx-4">
        {/* glow behind card (also theme-aware) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl opacity-60 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          // color comes from CSS variables set below
          style={{ background: "radial-gradient(400px circle at 50% 0%, var(--glow-a), var(--glow-b), transparent 70%)" }}
        />

        {/* card */}
        <motion.div
          className="rounded-2xl border border-black/10 bg-white/70 px-6 py-5 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/10"
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-center text-xl font-extrabold sm:text-2xl">
            I am a{" "}
            <span className="type-gradient bg-clip-text text-transparent">
              {roles[i].slice(0, j)}
            </span>
            <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-[2px] animate-pulse bg-gray-900 dark:bg-white/80" />
          </h2>
        </motion.div>
      </div>

      {/* Theme tokens for gradient + glow */}
      <style jsx global>{`
        /* Light mode defaults */
        .type-gradient {
          --grad-from: #4f46e5; /* indigo-600 */
          --grad-via:  #ec4899; /* pink-500   */
          --grad-to:   #f43f5e; /* rose-500   */
          background-image: linear-gradient(90deg, var(--grad-from), var(--grad-via), var(--grad-to));
        }
        /* Soft purple/pink glow in light */
        :root {
          --glow-a: rgba(99, 102, 241, 0.25);  /* indigo-500 */
          --glow-b: rgba(236, 72, 153, 0.18);  /* pink-500   */
        }

        /* Dark mode overrides */
        .dark .type-gradient {
          /* slightly lighter/brighter stops so they read on dark bg */
          --grad-from: #93c5fd; /* sky-300    */
          --grad-via:  #c084fc; /* purple-300 */
          --grad-to:   #fca5a5; /* red-300    */
          background-image: linear-gradient(90deg, var(--grad-from), var(--grad-via), var(--grad-to));
        }
        .dark :root {
          --glow-a: rgba(56, 189, 248, 0.22);  /* cyan-400   */
          --glow-b: rgba(168, 85, 247, 0.20);  /* purple-500 */
        }
      `}</style>
    </div>
  );
}
