"use client";
import { useApp } from "@/app/contexts/app.context";
import { useEffect, useState } from "react";
import { DrawerActionTrigger, DrawerBackdrop, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerRoot } from "@/components/ui/drawer";
import { Button } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
export function NavbarMobile() {
  const { sectionVisible, setSectionVisible } = useApp();
  const [open, setOpen] = useState(false);
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
    <>
      <Button onClick={() => setOpen(!open)} className=" menu-button cursor-pointer group absolute top-10 left-8 z-50 hidden max-lg:block">
        <input checked={open} type="checkbox" className="hidden" />
        <svg viewBox="0 0 32 32" width={80} height={80} className="transition-transform duration-[600ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] scale-[180%]">
          <path className="scale-110 line-top-bottom fill-none transition-[stroke,stroke-dasharray,stroke-dashoffset] ease-[cubic-bezier(0.4, 0, 0.2, 2)] stroke-white  hover-effect group-hover:stroke-accentSecondary" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="scale-110 line fill-none transition-[stroke,stroke-dasharray,stroke-dashoffset]  ease-[cubic-bezier(0.4, 0, 0.2, 1)] stroke-white hover-effect group-hover:stroke-accentSecondary" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16 27 16"></path>
        </svg>
      </Button>
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="full" placement="start">
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader className="flex w-full items-center justify-end mt-5">
            <DrawerActionTrigger asChild>
              <IoMdClose size={35} className="cursor-pointer hover-effect hover:text-accentSecondary" />
            </DrawerActionTrigger>
          </DrawerHeader>
          <DrawerBody className="flex items-center text-2xl justify-center max-[380px]:text-xl">
            {" "}
            <menu className="flex flex-col gap-20 items-center">
              <li className={`font-light cta hover-effect ${sectionVisible === "track" ? "active" : ""}`}>
                <Link onClick={() => setOpen(false)} href="/#track" className="border-none bg-none cursor-pointer">
                  <span className="hover-underline-animation relative pb-2 tracking-widest">Trajetória</span>
                </Link>
              </li>
              <li className={`font-light cta hover-effect ${sectionVisible === "skills" ? "active" : ""}`}>
                <Link onClick={() => setOpen(false)} href="/#skills" className="border-none bg-none cursor-pointer">
                  <span className="hover-underline-animation relative pb-2 tracking-widest">Áreas de atuação</span>
                </Link>
              </li>
              <li className={`font-light cta hover-effect ${sectionVisible === "services" ? "active" : ""}`}>
                <Link onClick={() => setOpen(false)} href="/#services" className="border-none bg-none cursor-pointer">
                  <span className="hover-underline-animation relative pb-2 tracking-widest">Serviços</span>
                </Link>
              </li>
              <li className={`font-light cta hover-effect ${sectionVisible === "contact" ? "active" : ""}`}>
                <Link onClick={() => setOpen(false)} href="/#contact" className="border-none bg-none cursor-pointer">
                  <span className="hover-underline-animation relative pb-2 tracking-widest">Contato</span>
                </Link>
              </li>
            </menu>
          </DrawerBody>
          <DrawerFooter className="w-full flex justify-center items-center gap-12 text-lg">
            <Link href="#" className="opacity-50 hover:opacity-100 hover-effect">
              WhatsApp
            </Link>
            <Link href="#" className="opacity-50 hover:opacity-100 hover-effect">
              Maps
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </DrawerRoot>
    </>
  );
}
