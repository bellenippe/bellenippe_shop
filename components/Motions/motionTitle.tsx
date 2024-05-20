"use client";
import { motion } from "framer-motion";

export default function MotionTitle() {
  return (
    <motion.h2
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 10, duration: 2 }}
    >
      Belle Nippe - SHOP
    </motion.h2>
  );
}
