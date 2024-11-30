"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselDefaultComponent } from "../../components/carousel/carousel-default.component";
import { TitleSection } from "./title.section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export function ServicesSection() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  return (
    <section className="bg-white section pb-32 h-full pl-52 text-white max-[1450px]:pl-4 px-4" data-section="services">
      <TitleSection id="services" number="03" title="Serviços" bg="bg-black" color="text-black" />
      <div className="">
        <motion.div ref={ref1} initial={{ opacity: 0, x: 150 }} animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex gap-8 max-md:flex-col">
          <div>
            <h1 className="text-6xl font-black w-4/5 text-left max-lg:w-fit max-md:text-4xl text-black">Apoio Jurídico Personalizado.</h1>
            <p className="mt-8 w-3/4 font-base opacity-70 max-lg:w-fit max-md:text-sm text-black">Garanta seus direitos com soluções jurídicas criativas e eficientes, tanto para sua vida pessoal quanto profissional.</p>
          </div>
        </motion.div>
        <motion.div ref={ref2} initial={{ opacity: 0, y: 150 }} animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex gap-8 max-md:flex-col">
          <div className="flex mt-16 md:mt-10 sm:mt-0 gap-6">
            <CarouselDefaultComponent />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
