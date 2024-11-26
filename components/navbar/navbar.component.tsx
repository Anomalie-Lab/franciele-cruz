"use client";
import { useApp } from "@/app/contexts/app.context";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Navbar() {
  const { sectionVisible, setSectionVisible } = useApp();

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section");
            setSectionVisible(section);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setSectionVisible]);

  return (
    <motion.aside ref={ref} initial={{ opacity: 0, x: 150, y: -200 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150, y: -200 }} transition={{ duration: 0.5 }} className="fixed z-20 top-1/2 -translate-y-1/2 right-24 flex flex-col gap-16 mix-blend-difference text-white max-[1200px]:right-5 max-[1024px]:hidden">
      <menu className="flex flex-col gap-10 items-end">
        <li className={`font-light text-lg cta hover-effect ${sectionVisible === "track" ? "active" : ""}`}>
          <Link href="/#track" className="border-none bg-none cursor-pointer">
            <span className="hover-underline-animation relative pb-2 tracking-widest">Trajetória</span>
          </Link>
        </li>
        <li className={`font-light text-lg cta hover-effect ${sectionVisible === "skills" ? "active" : ""}`}>
          <Link href="/#skills" className="border-none bg-none cursor-pointer">
            <span className="hover-underline-animation relative pb-2 tracking-widest">Áreas de atuação</span>
          </Link>
        </li>
        <li className={`font-light text-lg cta hover-effect ${sectionVisible === "services" ? "active" : ""}`}>
          <Link href="/#services" className="border-none bg-none cursor-pointer">
            <span className="hover-underline-animation relative pb-2 tracking-widest">Serviços</span>
          </Link>
        </li>
        <li className={`font-light text-lg cta hover-effect ${sectionVisible === "contact" ? "active" : ""}`}>
          <Link href="/#contact" className="border-none bg-none cursor-pointer">
            <span className="hover-underline-animation relative pb-2 tracking-widest">Contato</span>
          </Link>
        </li>
      </menu>
      <ul className="flex gap-6 font-light text-xl">
        <li>
          <h4>01</h4>
          <span></span>
        </li>
        <li>
          <h4>01</h4>
          <span></span>
        </li>
        <li>
          <h4>01</h4>
          <span></span>
        </li>
      </ul>
    </motion.aside>
  );
}
