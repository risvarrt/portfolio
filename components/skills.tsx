// components/skills.tsx
"use client";

import React, { useMemo, useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { skillsFullStack, skillsDataScience } from "@/lib/data";

const itemV: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: "easeIn" } },
};
const gridV: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { when: "beforeChildren", staggerChildren: 0.028, duration: 0.35 },
  },
  exit: { opacity: 0, y: -10, filter: "blur(4px)", transition: { duration: 0.2 } },
};

const Badge: React.FC<{ children: React.ReactNode; variant: "fs" | "ds" }> = ({ children, variant }) => {
  const base =
    "rounded-md border px-3.5 py-1.5 text-sm font-medium select-none transition-all duration-150 ease-out will-change-transform";
  const fs =
    "border-sky-300 bg-sky-100 text-sky-900 hover:bg-sky-200/60 hover:shadow-sm hover:-translate-y-0.5 " +
    "dark:border-sky-500/40 dark:bg-sky-400/25 dark:text-white dark:ring-1 dark:ring-sky-500/40 " +
    "dark:hover:bg-sky-400/40 dark:hover:ring-2 dark:hover:shadow-md";
  const ds =
    "border-emerald-300 bg-emerald-100 text-emerald-900 hover:bg-emerald-200/60 hover:shadow-sm hover:-translate-y-0.5 " +
    "dark:border-emerald-500/40 dark:bg-emerald-400/25 dark:text-white dark:ring-1 dark:ring-emerald-500/40 " +
    "dark:hover:bg-emerald-400/40 dark:hover:ring-2 dark:hover:shadow-md";

  return (
    <motion.span className={`${base} ${variant === "fs" ? fs : ds}`} variants={itemV}>
      {children}
    </motion.span>
  );
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [tab, setTab] = useState<"fs" | "ds">("fs");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const fsSkills = useMemo(
    () => [
      ...skillsFullStack.languages,
      ...skillsFullStack.frameworks,
      ...skillsFullStack.libraries,
      ...skillsFullStack.databases,
      ...skillsFullStack.devopsCloud,
      ...skillsFullStack.messaging,
      ...skillsFullStack.monitoring,
      ...skillsFullStack.concepts,
      ...skillsFullStack.certifications,
    ],
    []
  );
  const dsSkills = useMemo(
    () => [
      ...skillsDataScience.frameworksLibs,
      ...skillsDataScience.concepts,
      ...skillsDataScience.certifications,
    ],
    []
  );
  const skills = tab === "fs" ? fsSkills : dsSkills;

  return (
    <section id="skills" ref={ref} className="mb-28 w-full max-w-[65rem] scroll-mt-28 sm:mb-40">
      {/* Heading: client-only so it “appears” instead of being fixed on SSR */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <SectionHeading>My Skills & Certifications</SectionHeading>
        </motion.div>
      )}

      {/* Toggle pill: client-only + entrance animation */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="mb-6 inline-flex rounded-full border border-black/10 bg-white/70 p-1 backdrop-blur-md dark:border-white/10 dark:bg-white/10"
        >
          <div className="relative flex min-w-[16rem]">
            <button
              onClick={() => setTab("fs")}
              className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                tab === "fs" ? "text-white" : "text-neutral-800 dark:text-white/80"
              }`}
            >
              Software Dev
            </button>
            <button
              onClick={() => setTab("ds")}
              className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                tab === "ds" ? "text-white" : "text-neutral-800 dark:text-white/80"
              }`}
            >
              Data Science
            </button>
            <motion.div
              layout
              className={`absolute inset-y-0 w-1/2 rounded-full ${
                tab === "fs" ? "left-0 bg-sky-600" : "left-1/2 bg-emerald-600"
              }`}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          </div>
        </motion.div>
      )}

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          variants={gridV}
          initial="hidden"
          animate="show"
          exit="exit"
          className={`w-full rounded-2xl border p-5 ${
            tab === "fs"
              ? "bg-sky-50 border-black/5 dark:bg-sky-900/20 dark:border-white/10"
              : "bg-emerald-50 border-black/5 dark:bg-emerald-900/20 dark:border-white/10"
          }`}
        >
          <motion.div className="flex flex-wrap justify-start gap-2" variants={gridV}>
            {skills.map((s) => (
              <Badge key={`${tab}-${s}`} variant={tab}>
                {s}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
