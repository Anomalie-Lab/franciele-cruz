"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export function HomeSection() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const [textHome,setTextHome]=useState<string>("Advogada. Desde 2018, busco oferecer soluções jurídicas rápidas e eficazes, com empatia e transparência. Para mim, o Direito é sobre entender cada história e resolver com humanidade.");
  const [btnColor,setBtnColor]=useState("bg-accentSecondary")
  const [btnColor2,setBtnColor2]=useState("bg-gray-400")
  

  const handleNext = (text:string,btnNum:number) => {
    setTextHome(text)

    if (btnNum === 1) {
      setBtnColor("bg-accentSecondary");
      setBtnColor2("bg-gray-400");
    } else if (btnNum === 2) {
      setBtnColor("bg-gray-400");
      setBtnColor2("bg-accentSecondary");
    }
  }

  return (
    <main className="grid grid-cols-2 max-md:grid-cols-1 h-screen bg-cover bg-top section text-white max-md:h-screen" data-section="home">
        <div className="flex justify-center	items-center bg-cover bg-center p-4 bg-[url('/greek-busts-standing-line.png')]">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-sacramento text-7xl text-accentSecondary max-md:text-5xl">Advogada</h3>
              <h1 className="text-7xl font-playfair max-md:text-5xl">Franciele Cruz</h1>
            </div>
            <p className="w-[490px] text-justify font-semibold mt-2 max-md:text-sm max-md:w-[340px]">{textHome}</p>
            <div className="flex gap-3">
              <button  className={`${btnColor} rounded-full h-2 w-2`} onClick={()=>handleNext("Advogada. Desde 2018, busco oferecer soluções jurídicas rápidas e eficazes, com empatia e transparência. Para mim, o Direito é sobre entender cada história e resolver com humanidade.",1)}></button>
              <button  className={`${btnColor2} rounded-full h-2 w-2`} onClick={()=>handleNext('Se você busca uma profissional comprometida e com experiência, estou à disposição para ajudar. Entre em contato comigo e receba o suporte jurídico que você precisa!',2)}></button>
            </div>
            <button className="mt-8 w-60 h-14 text-red hover:before:bg-red 
            relative overflow-hidden border hover:shadow-black border-white bg-transparent px-3 text-w shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-accentSecondary before:transition-all before:duration-500 hover:text-white hover:accentSecondary 
            hover:before:left-0 hover:before:w-full max-md:h-14 max-md:w-52">
              <span className="relative z-10 flex items-center justify-around">
                <FaWhatsapp size={28} className="max-md:size-6"/>
                <p className="font-playfair p-3 font-medium max-md:text-sm">Marcar consulta</p>
              </span></button>
          </div>
        </div>
        <div className="bg-cover bg-center p-4 bg-[url('/FotoBusto.WEBP')] max-md:hidden"></div>
    </main>
  );
}
