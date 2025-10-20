"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const logos = [
  "affies-logo.png",
  "azure.png",
  "figma.png",
  "google.png",
  "intellij-idea-1.svg",
  "microsoft.png",
  "NLC-Logo.png",
  "Open_Window_logo.svg",
  "red_erp-logo.png",
  "visual-studio-code-1.svg",
];

export default function LogoCarousel() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
    });
  }, [controls]);

  return (
    <div className="relative overflow-hidden py-10 bg-black cursor-grab">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-16 items-center"
        drag="x"
        dragConstraints={{ left: -3000, right: 0 }}
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
        animate={controls}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 opacity-0 animate-logo-fade"
            style={{ animationDelay: `${i * 0.15}s` }} // stagger each logo
          >
            <Image
              src={`/logos/${logo}${logo.endsWith(".svg") || logo.endsWith(".png") ? "" : ".svg"}`}
              alt={logo.replace(/\.(svg|png)/, "")}
              width={100}
              height={100}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
