"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <div className="relative w-full py-10 bg-background/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 h-16 w-full bg-gradient-to-b from-background/50 to-transparent z-10 pointer-events-none" />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-background/50 to-transparent z-10 pointer-events-none" />
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background/50 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Logos */}
      <motion.div
        className="flex gap-24 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0"
          >
            <Image
              src={`/logos/${logo}${logo.endsWith(".svg") || logo.endsWith(".png") ? "" : ".svg"}`}
              alt={logo.replace(/\.(svg|png)/, "")}
              width={60}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
