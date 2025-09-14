"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45, ease: "easeOut" },
  }),
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[48rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading>About <span className="font-extrabold">Me</span></SectionHeading>
      </motion.div>

    

      <motion.p
        variants={fadeUp}
        custom={1}
        className="mt-6 px-2 text-[1.05rem]"
      >
        My passion for computer science was sparked by <strong>films</strong> and the
        idea that technology can <strong>enhance human life</strong>. That curiosity
        became a drive to craft systems that are <strong>useful</strong>,{" "}
        <strong>fast</strong>, and <strong>reliable</strong>.
      </motion.p>

      <motion.p variants={fadeUp} custom={2} className="mt-4 px-2">
        I work across the stack as a <strong>Full-Stack / Cloud Engineer</strong>,
        architecting and shipping production features. <em>My favorite part of
        programming</em> is problem-solving—finding simple designs for complex
        problems and turning them into maintainable code.
      </motion.p>

      {/* Generative AI callout with animated glow */}
      <motion.div
        variants={fadeUp}
        custom={4}
        className="relative mx-auto mt-8 w-full overflow-hidden rounded-2xl border border-indigo-200/50 p-5 text-left shadow-sm dark:border-indigo-500/20"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            background:
              "radial-gradient(600px circle at 50% -20%, rgba(99,102,241,.25), rgba(236,72,153,.12), transparent 60%)",
          }}
        />
        <div className="relative">
          <p className="text-base sm:text-[1.05rem]">
            <strong>Exploring Generative AI:</strong> I’m actively researching and
            integrating <strong>GenAI</strong> into software systems—RAG pipelines,
            model-augmented features, and agent-style automations—to
            <strong> boost usability and adoption</strong> while keeping solutions
            production-ready and cost-aware.
          </p>
        </div>
      </motion.div>

      <motion.p variants={fadeUp} custom={5} className="mt-6 px-2">
        Outside of code, I’m a <strong>passionate filmmaker and video creator</strong> —
        I direct short films and produce travel-based content. Storytelling
        shapes how I build products: clear narrative, purposeful visuals, and a
        great user experience. 🎬✈️
      </motion.p>

      {/* Subtle CTA underline animation */}
      <motion.div
        variants={fadeUp}
        custom={6}
        className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.section>
  );
}
