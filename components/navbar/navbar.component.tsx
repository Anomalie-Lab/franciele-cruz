"use client";
import { useApp } from "@/app/contexts/app.context";
import Link from "next/link";
import { useEffect } from "react";

export function Navbar() {
  const { sectionVisible, setSectionVisible } = useApp();

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
    <aside className="fixed top-1/2 -translate-y-1/2 right-24 flex flex-col gap-16 mix-blend-difference text-white">
      <menu className="flex flex-col gap-10 items-end">
        <li className={`font-semibold text-lg cta hover-effect ${sectionVisible === "track" ? "text-accentPrimary active" : ""}`}>
          <Link href="#track" className="border-none bg-none cursor-pointer">
            <span className="hover-underline-animation relative pb-2 pr-4 tracking-widest">Trajetória</span>
          </Link>
        </li>
        <li className={`font-semibold text-lg cta hover-effect ${sectionVisible === "skills" ? "text-accentPrimary active" : ""}`}>
          <Link href="#skills" className="border-none bg-none cursor-pointer">
            <span className="hover-underline-animation relative pb-2 pr-4 tracking-widest">Áreas de atuação</span>
          </Link>
        </li>
        <li className={`font-semibold text-lg cta hover-effect ${sectionVisible === "services" ? "text-accentPrimary active" : ""}`}>
          <Link href="#services" className="border-none bg-none cursor-pointer">
            <span className="hover-underline-animation relative pb-2 pr-4 tracking-widest">Serviços</span>
          </Link>
        </li>
        <li className={`font-semibold text-lg cta hover-effect ${sectionVisible === "contact" ? "text-accentPrimary active" : ""}`}>
          <Link href="#contact" className="border-none bg-none cursor-pointer">
            <span className="hover-underline-animation relative pb-2 pr-4 tracking-widest">Contato</span>
          </Link>
        </li>
        <li className={`font-semibold text-lg cta hover-effect ${sectionVisible === "location" ? "text-accentPrimary active" : ""}`}>
          <Link href="#location" className="border-none bg-none cursor-pointer">
            <span className="hover-underline-animation relative pb-2 pr-4 tracking-widest">Localização</span>
          </Link>
        </li>
      </menu>
      <ul className="flex gap-6 font-black text-xl">
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
    </aside>
  );
}
