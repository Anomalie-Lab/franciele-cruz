"use client";
import Image from "next/image";
import { TitleSection } from "./title.section";
import { FaBalanceScale, FaBusinessTime, FaPeopleArrows, FaUserShield } from "react-icons/fa";
import { FaBuildingShield, FaPeopleRoof } from "react-icons/fa6";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="bg-[url('/still-life-with-scales-justice.png')] py-32 bg-cover bg-top section pl-52 text-white max-[1450px]:pl-4 px-4" data-section="skills">
      <TitleSection id="skills" number="02" title="Especialidades" bg="bg-white" color="text-white" />
      <motion.div ref={ref} initial={{ opacity: 0, x: 150 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <div>
          <h1 className="text-6xl font-black w-2/5 text-left max-lg:w-fit max-md:text-4xl">Áreas de atuação.</h1>
          <p className="mt-8 w-2/4 font-black opacity-50 max-lg:w-fit max-md:text-sm">Como advogada, ofereço soluções jurídicas personalizadas, focadas em resolver os desafios legais de meus clientes com agilidade e eficiência.</p>
        </div>
        <div className="max-w-[900px] max-h-[700px] pb-16">
          <Splide hasTrack={false} aria-label="..." options={{ arrows: true, type: "loop", autoplay: true, rewind: false, pagination: false, perMove: 1, perPage: 1, gap: "0rem" }}>
            <SplideTrack>
              <SplideSlide>
                {" "}
                <ul className="grid grid-cols-2 max-w-[900px] w-full h-[600px] mt-10 max-md:h-[300px]">
                  <li className="flex text-accentSecondary justify-between px-9 max-md:px-3 max-md:py-5 py-12 flex-col h-full w-full border-t border-x">
                    <FaBusinessTime className="text-7xl max-md:text-4xl" />
                    <h3 className="text-xl font-semibold text-white tracking-widest max-md:text-base max-md:max-w-36">Direito Trabalhista</h3>
                  </li>
                  <li className="flex text-accentSecondary justify-between px-9 max-md:px-3 max-md:py-5 py-12 flex-col h-full w-full border-t border-r">
                    <FaUserShield className="text-7xl max-md:text-4xl" />
                    <h3 className="text-xl font-semibold text-white tracking-widest max-md:text-base max-md:max-w-36">Direito Consumidor</h3>
                  </li>
                  <li className="flex text-accentSecondary justify-between px-9 max-md:px-3 max-md:py-5 py-12 flex-col h-full w-full border">
                    <FaPeopleArrows className="text-7xl max-md:text-4xl" />
                    <h3 className="text-xl font-semibold text-white tracking-widest max-md:text-base max-md:max-w-36">Direito Civil</h3>
                  </li>
                  <li className="flex text-accentSecondary justify-between px-9 max-md:px-3 max-md:py-5 py-12 flex-col h-full w-full border-y border-r">
                    <FaBuildingShield className="text-7xl max-md:text-4xl" />
                    <h3 className="text-xl font-semibold text-white tracking-widest max-md:text-base max-md:max-w-36">Direito Empresarial</h3>
                  </li>
                </ul>
              </SplideSlide>
              <SplideSlide>
                <ul className="grid grid-rows-2 max-w-[900px] w-full h-[600px] mt-10 max-md:h-[300px]">
                  <li className="flex text-accentSecondary justify-between px-9 max-md:px-3 max-md:py-5 py-12 flex-col h-full w-full border-t border-x">
                    <FaPeopleRoof className="text-7xl max-md:text-4xl" />
                    <h3 className="text-xl font-semibold text-white tracking-widest max-md:text-base max-md:max-w-36">Direito Da Familia</h3>
                  </li>
                  <li className="flex text-accentSecondary justify-between px-9 max-md:px-3 max-md:py-5 py-12 flex-col h-full w-full border-y border-x">
                    <FaBalanceScale className="text-7xl max-md:text-4xl" />
                    <h3 className="text-xl font-semibold text-white tracking-widest max-md:text-base max-md:max-w-36">Direito Previdenciário</h3>
                  </li>
                </ul>
              </SplideSlide>
            </SplideTrack>
            <div className="flex justify-between items-center absolute -bottom-20 w-full">
              <div className="splide__arrows relative flex gap-4">
                <button className="splide__arrow--prev w-3 h-3 bg-white/50 rounded-full"></button>
                <button className="splide__arrow--next w-3 h-3 bg-white/50 rounded-full"></button>
              </div>
              <div className="font-semibold text-lg cta hover-effect">
                <Link href="/areas" className="border-none bg-none cursor-pointer">
                  <span className="hover-underline-animation relative pb-2 tracking-widest flex gap-3 items-center font-normal text-base max-md:text-xs">
                    Veja Todos <IoIosArrowForward />
                  </span>
                </Link>
              </div>
            </div>
          </Splide>
        </div>
        <div>
          <div></div>
        </div>
      </motion.div>
    </section>
  );
}
