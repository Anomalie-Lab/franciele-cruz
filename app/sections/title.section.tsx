"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export function TitleSection({ number, title, color, bg, id }: { id: string; number: string; title: string; color: string; bg: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -150 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }} transition={{ duration: 0.5 }} id={id} className={`flex gap-4 items-center ${color} text-xl mb-10 pt-32`}>
      <span className="font-bold ">{number}</span>
      <span className={`w-8 h-0.5 rounded-md ${bg}`}></span>
      <h1>{title}</h1>
    </motion.div>
  );
}
