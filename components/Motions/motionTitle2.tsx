"use client";
import { motion } from "framer-motion";

export default function MotionTitle2() {
  return (
    <motion.h2
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 10, duration: 2 }}
    >
      BOOK - Belle Nippe
    </motion.h2>
  );
}
