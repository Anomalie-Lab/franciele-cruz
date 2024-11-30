"use client";
import { FormDefaultComponent } from "@/components/form/form-default.component";
import { TitleSection } from "./title.section";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
export function ContactSection() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  return (
    <section id="contact" className="bg-[url('/view-ancient-greek-bust-figure.png')] bg-cover	section py-32 pl-52 text-white max-[1450px]:pl-4 px-4 h-screen" data-section="contact">
      <TitleSection id="services" number="04" title="Contato" bg="bg-white" color="text-white" />

      <div className="">
        <motion.div ref={ref1} initial={{ opacity: 0, x: 150 }} animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex gap-8 max-md:flex-col">
          <div>
            <h1 className="text-6xl font-black w-2/5 text-left max-lg:w-fit max-md:text-4xl text-accentSecondary">Agende sua consulta.</h1>
            <p className="mt-8 w-3/4 font-base opacity-70 max-lg:w-fit max-md:text-sm text-white">Estou à disposição para ouvir seu caso e oferecer a orientação jurídica personalizada que você precisa. Entre em contato!</p>
          </div>
        </motion.div>
        <motion.div ref={ref2} initial={{ opacity: 0, y: 150 }} animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="flex mt-16 gap-6">
            <FormDefaultComponent />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
