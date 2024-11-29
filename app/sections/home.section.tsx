"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

export function HomeSection() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  return (
    <main className="grid grid-cols-2 h-screen bg-cover bg-top section text-white bg-blue-600" data-section="home">
        <div className="flex justify-center	items-center bg-blue-500 bg-cover bg-center p-4 bg-[url('/greek-busts-standing-line.png')]">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-sacramento text-7xl text-accentSecondary">Advogada</h3>
              <h1 className="text-7xl font-playfair">Franciele Cruz</h1>
            </div>
            <p className="w-[490px] text-justify font-semibold">Se você busca uma profissional comprometida e com experiência, estou à disposição para ajudar. Entre em contato comigo e receba o suporte jurídico que você precisa!</p>
            <div className="flex gap-3">
              <div className="bg-accentSecondary rounded-full h-3 w-3"></div>
              <div className="bg-white opacity-40 rounded-full h-3 w-3"></div>
            </div>
            <button className="border mt-8 w-60 h-14 p-4 flex items-center justify-around hover:bg-accentSecondary hover:border-none">
              <FaWhatsapp size={28}/>
              <p className="font-playfair font-medium">Marcar consulta</p>
            </button>
          </div>
        </div>
        <div className="bg-green-500 bg-cover bg-center p-4 bg-[url('/FotoBusto.WEBP')]"></div>
    </main>
  );
}
