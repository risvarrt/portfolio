"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-10 sm:mb-14 w-[min(100%,40rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Let's craft something Spectacular</SectionHeading>

      <form
        id="SubmitForm"
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");

          // @ts-ignore
          document.getElementById("SubmitForm").reset();
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderName"
          type="name"
          required
          maxLength={500}
          placeholder="Your name"
        />
        <input
          className="h-14 px-4 my-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 mb-4 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>

        {/* Location + Email row */}
<motion.div
  className="flex flex-col items-center justify-center gap-4 text-gray-700 dark:text-gray-300 text-lg mt-6"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  {/* Location */}
  <div className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-blue-500" />
    <span>Canada</span>
  </div>

  {/* Email */}
  <div className="flex items-center gap-2">
    <FaEnvelope className="text-blue-500" />
    <a
      href="mailto:rishivarmanofficial@gmail.com"
      className="hover:underline hover:text-blue-500"
    >
      rishivarmanofficial@gmail.com
    </a>
  </div>
</motion.div>

    </motion.section>

    
  );
}
