"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  // split work vs education
  const work = experiencesData.filter((i: any) => i.category === "work");
  const education = experiencesData.filter((i: any) => i.category === "education");

  const cardBg = theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)";
  const arrowBorder =
    theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.5)";
  const lineColor = theme === "light" ? "#e5e7eb" : "rgba(255,255,255,0.15)";

  // The circle behind the icon
  const baseIconStyle: React.CSSProperties = {
    background: theme === "light" ? "#ffffff" : "rgba(2, 1, 1, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    // fontSize helps react-icons too (fallback), but we’ll also clone the icon
    fontSize: "24px",
  };

  // normalize a react-icons element (or any SVG-based icon)
  const normalizeIcon = (icon: React.ReactNode) => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement, {
        // react-icons respects `size`
        size: 24,
        // hard-stop the library CSS from offsetting the SVG
        style: {
          display: "block",
          width: 24,
          height: 24,
          position: "static",
          left: "auto",
          top: "auto",
          margin: 0,
          transform: "none",
          verticalAlign: "middle",
          ...(icon as any).props?.style,
        },
      });
    }
    return icon;
  };

  const Wrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12 rounded-2xl p-[1px] shadow-xl bg-gradient-to-r from-indigo-300/40 via-fuchsia-300/40 to-rose-300/40 dark:from-indigo-500/30 dark:via-fuchsia-500/30 dark:to-rose-500/30">
      <div className="rounded-2xl bg-white/70 px-5 py-6 backdrop-blur-md dark:bg-zinc-900/60">
        <h2 className="mb-6 text-center text-xl sm:text-2xl font-medium text-neutral-700 dark:text-neutral-200">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );

  const renderTimeline = (items: any[]) => (
    <VerticalTimeline lineColor={lineColor}>
      {items.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{
            background: cardBg,
            boxShadow: "none",
            border: "1px solid rgba(0,0,0,0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{ borderRight: arrowBorder }}
          date={item.date}
          icon={
            <div className="flex h-full w-full items-center justify-center">
              {normalizeIcon(item.icon)}
            </div>
          }
          iconStyle={baseIconStyle}
        >
          <h3 className="font-semibold">{item.title}</h3>
          <p className="font-normal !mt-0">{item.location}</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {item.description}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <Wrapper title="Work">{renderTimeline(work)}</Wrapper>
      <Wrapper title="Education">{renderTimeline(education)}</Wrapper>

    
    </section>
  );
}
