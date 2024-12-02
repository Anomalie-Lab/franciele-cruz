"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { TitleSection } from "./title.section";
import { motion, useInView } from "framer-motion";
export function TrackSection() {
  const [imageCarousel, setImageCarousel] = useState("/fotoLevantada.webp");
  const [btnCarouselColor1, setBtnCarouselColor1] = useState("bg-black");
  const [btnCarouselColor2, setBtnCarouselColor2] = useState("bg-gray-400");
  const [btnCarouselColor3, setBtnCarouselColor3] = useState("bg-gray-400");

  const handleClick = (image: string, btnNum: number) => {
    setImageCarousel(image);
    // Atualiza as cores dos botões
    if (btnNum === 1) {
      setBtnCarouselColor1("bg-black");
      setBtnCarouselColor2("bg-gray-400");
      setBtnCarouselColor3("bg-gray-400");
    } else if (btnNum === 2) {
      setBtnCarouselColor1("bg-gray-400");
      setBtnCarouselColor2("bg-black");
      setBtnCarouselColor3("bg-gray-400");
    } else if (btnNum === 3) {
      setBtnCarouselColor1("bg-gray-400");
      setBtnCarouselColor2("bg-gray-400");
      setBtnCarouselColor3("bg-black");
    }
  };

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  return (
    <section className="mt-[100vh] pb-32 bg-cover bg-top section pl-52  max-[1450px]:pl-4 px-4 bg-white text-black section" data-section="track">
      <TitleSection id="track" number="01" title="Trajetória" bg="bg-black" color="text-black" />
      <div>
        <motion.div ref={ref1} initial={{ opacity: 0, x: 150 }} animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex gap-8 max-md:flex-col">
          <Image className="" src={imageCarousel} alt="Next.js logo" width={454.1} height={460.06} priority />
          <div className="">
            <div className="flex flex-col max-md:flex-row gap-2 align-bottom justify-end max-md:justify-start h-full">
              <button onClick={() => handleClick("/FotoSofa.png", 1)}>
                <div className={`h-2 w-2 ${btnCarouselColor1} rounded`}></div>
              </button>
              <button onClick={() => handleClick("/FotoLevantada.png", 2)}>
                <div className={`h-2 w-2 ${btnCarouselColor2} rounded`}></div>
              </button>
              <button onClick={() => handleClick("/FotoBusto.png", 3)}>
                <div className={`h-2 w-2 ${btnCarouselColor3} rounded`}></div>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div ref={ref2} initial={{ opacity: 0, y: 150 }} animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex gap-8 max-md:flex-col">
          <div className="mt-12">
            <h1 className="text-3xl font-black w-2/5 text-left max-lg:w-fit max-md:text-2xl text-black">“Em 2018, decidi empreender na área jurídica com o objetivo de oferecer um serviço inovador, rápido e eficaz, priorizando a confiança e a honestidade”.</h1>
            <p className="font-base w-1/2	mt-8 text-xl max-lg:w-fit text-justify max-md:text-sm">Meu compromisso é manter os clientes informados de forma clara sobre o andamento dos processos, sempre buscando entender o lado humano por trás do conflito. Acredito que o Direito deve ser acolhedor, sensível e focado na resolução dos problemas de forma humanizada, e não apenas em lucro.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
