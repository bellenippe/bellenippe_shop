"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RevealLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-auto w-[60%] md:w-[25rem] flex items-center justify-center"
    >
      <Image
        className="w-auto h-auto object-contain mx-auto lg:w-[30rem] lg:h-auto"
        src="/images/Logos/bnFullWhiteLogo.png"
        width={500}
        height={500}
        alt="Logo de la marque Belle Nippe"
      />
    </motion.div>
  );
}
