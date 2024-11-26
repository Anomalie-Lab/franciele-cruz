"use client";
import Image from "next/image";
import { useState } from "react";
import { TitleSection } from "./title.section";

export function TrackSection() {
  const [imageCarousel, setImageCarousel] = useState("/fotoBusto.webp");
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

  return (
    <section className="py-32 pl-52 bg-white text-black section" data-section="track">
      <TitleSection id="track" number="02" title="Especialidades" bg="bg-black" color="text-black" />
      <div>
        <div className="flex gap-8">
          <Image className="dark:invert" src={imageCarousel} alt="Next.js logo" width={454.1} height={460.06} priority />
          <div className="">
            <div className="flex flex-col gap-2 align-bottom justify-end h-full">
              <button onClick={() => handleClick("/fotoSofa.webp", 1)}>
                <div className={`h-2 w-2 ${btnCarouselColor1} rounded`}></div>
              </button>
              <button onClick={() => handleClick("/fotoLevantada.webp", 2)}>
                <div className={`h-2 w-2 ${btnCarouselColor2} rounded`}></div>
              </button>
              <button onClick={() => handleClick("/fotoBusto.webp", 3)}>
                <div className={`h-2 w-2 ${btnCarouselColor3} rounded`}></div>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h1 className="font-black w-1/2 text-3xl text-justify">“Em 2018, decidi empreender na área jurídica com o objetivo de oferecer um serviço inovador, rápido e eficaz, priorizando a confiança e a honestidade”.</h1>
          <p className="font-base w-1/2	mt-8 text-xl text-justify ">Meu compromisso é manter os clientes informados de forma clara sobre o andamento dos processos, sempre buscando entender o lado humano por trás do conflito. Acredito que o Direito deve ser acolhedor, sensível e focado na resolução dos problemas de forma humanizada, e não apenas em lucro.</p>
        </div>
      </div>
    </section>
  );
}
