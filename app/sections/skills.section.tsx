"use client";
import Image from "next/image";
import { TitleSection } from "./title.section";
import { FaBalanceScale, FaBusinessTime, FaPeopleArrows, FaUserShield } from "react-icons/fa";
import { FaBuildingShield, FaPeopleRoof } from "react-icons/fa6";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export function SkillsSection() {
  return (
    <section className="bg-[url('/still-life-with-scales-justice.png')] py-32 bg-cover bg-top section pl-52 text-white" data-section="skills">
      <TitleSection number="02" title="Especialidades" bg="bg-white" color="text-white" />
      <div>
        <div>
          <h1 className="text-6xl font-black w-2/5 text-left">Áreas de atuação.</h1>
          <p className="mt-8 w-2/4 font-black opacity-50">Como advogada, ofereço soluções jurídicas personalizadas, focadas em resolver os desafios legais de meus clientes com agilidade e eficiência.</p>
        </div>
        <div className="max-w-[900px] max-h-[700px]">
          <Splide hasTrack={false} aria-label="..." options={{ arrows: true, type: "loop", autoplay: true, rewind: false, pagination: false, perMove: 1, perPage: 1, gap: "0rem" }}>
            <SplideTrack>
              <SplideSlide>
                {" "}
                <ul className="grid grid-cols-2 mb-32 max-w-[900px] w-full h-[600px] mt-10">
                  <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border-t border-x">
                    <FaBusinessTime size={60} />
                    <h3 className="text-xl font-semibold text-white tracking-widest">Direito Trabalhista</h3>
                  </li>
                  <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border-t border-r">
                    <FaUserShield size={60} />
                    <h3 className="text-xl font-semibold text-white tracking-widest">Direito Consumidor</h3>
                  </li>
                  <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border">
                    <FaPeopleArrows size={60} />
                    <h3 className="text-xl font-semibold text-white tracking-widest">Direito Civil</h3>
                  </li>
                  <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border-y border-r">
                    <FaBuildingShield size={60} />
                    <h3 className="text-xl font-semibold text-white tracking-widest">Direito Empresarial</h3>
                  </li>
                </ul>
              </SplideSlide>
              <SplideSlide>
                {" "}
                <ul className="grid grid-rows-2 mb-32 max-w-[900px] w-full h-[600px] mt-10">
                  <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border-t border-x">
                    <FaPeopleRoof size={60} />
                    <h3 className="text-xl font-semibold text-white tracking-widest">Direito Da Familia</h3>
                  </li>
                  <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border-y border-x">
                    <FaBalanceScale size={60} />
                    <h3 className="text-xl font-semibold text-white tracking-widest">Direito Previdenciário</h3>
                  </li>
                </ul>
              </SplideSlide>
            </SplideTrack>
            <div className="flex justify-between items-center absolute bottom-20 w-full">
              <div className="splide__arrows relative flex gap-4">
                <button className="splide__arrow--prev w-3 h-3 bg-white/50 rounded-full"></button>
                <button className="splide__arrow--next w-3 h-3 bg-white/50 rounded-full"></button>
              </div>
              <div className="font-semibold text-lg cta hover-effect">
                <Link href="/areas" className="border-none bg-none cursor-pointer">
                  <span className="hover-underline-animation relative pb-2 tracking-widest flex gap-3 items-center font-normal text-base">
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
      </div>
    </section>
  );
}
