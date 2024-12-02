"use client";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Link from "next/link";

export function HomeSection() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  return (
    <main className="absolute w-full grid grid-cols-2 max-md:grid-cols-1 h-screen bg-cover bg-top section text-white max-md:h-screen z-40 overflow-hidden" data-section="home">
      <div className="flex justify-center	items-center bg-cover bg-center p-4 bg-[url('/greek-busts-standing-line.png')]">
        <motion.div className="flex flex-col gap-6" ref={ref1} initial={{ opacity: 0, x: -150 }} animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h3 className="font-sacramento text-7xl text-accentSecondary max-md:text-5xl">Advogada</h3>
          <h1 className="text-7xl font-playfair max-md:text-5xl">Franciele Cruz</h1>
          <Splide hasTrack={false} aria-label="..." options={{ arrows: true, type: "loop", autoplay: true, rewind: false, pagination: false, perMove: 1, perPage: 1, gap: "0rem" }}>
            <SplideTrack className="max-w-[490px] flex gap-6 max-md:max-w-[340px]">
              <SplideSlide>
                <p className="w-[490px] text-justify font-semibold mt-2 max-md:text-sm max-md:max-w-[340px]">Advogada. Desde 2018, busco oferecer soluções jurídicas rápidas e eficazes, com empatia e transparência. Para mim, o Direito é sobre entender cada história e resolver com humanidade.</p>
              </SplideSlide>
              <SplideSlide>
                <p className="w-[490px] text-justify font-semibold mt-2 max-md:text-sm max-md:max-w-[340px]">Se você busca uma profissional comprometida e com experiência, estou à disposição para ajudar. Entre em contato comigo e receba o suporte jurídico que você precisa!</p>
              </SplideSlide>
            </SplideTrack>
            <div className="flex justify-between items-center absolute -bottom-8 w-full">
              <div className="splide__arrows relative flex gap-4">
                <button className="splide__arrow--prev w-3 h-3 bg-white/50 rounded-full"></button>
                <button className="splide__arrow--next w-3 h-3 bg-white/50 rounded-full"></button>
              </div>
            </div>
          </Splide>
          <Link
            href="https://wa.link/iahv2w"
            className="mt-12 w-60 h-14 text-red hover:before:bg-red 
            relative overflow-hidden border hover:shadow-black border-white bg-transparent px-3 text-w shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-accentSecondary before:transition-all before:duration-500 hover:text-white hover:accentSecondary 
            hover:before:left-0 hover:before:w-full max-md:h-14 max-md:w-52"
          >
            <span className="relative z-10 flex items-center justify-around">
              <FaWhatsapp size={28} className="max-md:size-6" />
              <p className="font-playfair p-3 font-medium max-md:text-sm">Marcar consulta</p>
            </span>
          </Link>
        </motion.div>
      </div>
      <div className="bg-cover bg-center p-4 bg-[url('/FotoBusto.WEBP')] max-md:hidden"></div>
    </main>
  );
}
