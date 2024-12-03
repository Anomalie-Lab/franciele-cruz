"use client";
import { Navbar } from "@/components/navbar/navbar.component";
import { motion, useInView } from "framer-motion";
import { Image } from "@chakra-ui/react";
import { useRef } from "react";
import { FooterSection } from "../sections/footer.section";
function Support() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  
  return (
    <main className="text-black bg-white bg-cover bg-center p-16 flex flex-col gap-10 absolute w-full z-40 max-[1350px]:pr-64 max-[1350px]:pl-4 max-[1024px]:pr-4">
      <Navbar />
      <div className="flex gap-5 max-lg:flex-col-reverse items-center">
        <motion.div ref={ref1} initial={{ opacity: 0, y: -150 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -150 }} transition={{ duration: 0.5 }} className="flex w-full justify-between max-lg:mt-16">
          <div className="flex gap-5">
            <div className="text-3xl font-bold w-fit h-fit flex items-center gap-5 max-lg:hidden">
              03 -<span className={`min-w-8 h-0.5 rounded-md bg-white`}></span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-black text-5xl text-black w-96">
                Apoio Jurídico Personalizado
              </h1>
              <p className="max-w-[430px] max-lg:max-w-full text-justify opacity-80 font-bold">
                 Garanta seus direitos com soluções jurídicas criativas e eficientes, tanto para sua vida pessoal quanto profissional.
              </p>
            </div>
          </div>
        </motion.div>
        <aside>
          <div className="flex flex-col items-end gap-2 h-fit">
            <h1 className="text-4xl text-black font-bold font-playfair flex flex-col items-end text-nowrap">Franciele Cruz</h1>
            <h2 className="text-3xl font-bold font-sacramento text-accentSecondary">Advogada</h2>
          </div>
        </aside>
      </div>
      <motion.div ref={ref2} initial={{ opacity: 0, x: -150 }} animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }} transition={{ duration: 0.5, delay: 0.5 }} className="max-w-[1000px] text-justify flex flex-col gap-5 mt-14">
      <ul className="grid grid-cols-2 gap-24 w-full pb-32 text-lg max-lg:text-base mt-12">
        <li className="mt-2 mb-2">
          <Image src="/Trabalhista.png" className="w-full"/>
          <h2 className="font-black mt-6 text-xl text-justify">Consultoria trabalhista</h2>
          <p className="mt-4 text-md text-justify opacity-85">Orientação preventiva, elaboração de contratos e acompanhamento de reclamações trabalhistas.</p>
        </li>
        <li className="mt-2 mb-2">
          <Image src="/Contratos.png" className="w-full"/>
          <h2 className="font-black mt-6 text-xl text-justify">Revisão e elaboração de contratos</h2>
          <p className="mt-4 text-md text-justify opacity-85">Análise de contratos comerciais, locação, prestação de serviços e outros documentos essenciais.</p>
        </li>
        <li className="mt-2 mb-2">
          <Image src="/Empresarial.png" className="w-full"/>
          <h2 className="font-black mt-6 text-xl text-justify">Planejamento societário e empresarial</h2>
          <p className="mt-4 text-md  text-justify opacity-85">Especializo-me em consultoria jurídica para pequenas e médias empresas, ajudando a estruturar negócios e garantir a conformidade legal. Ofereço suporte em planejamento societário e questões tributárias, com foco em reduzir riscos e impulsionar o crescimento sustentável da empresa.</p>
        </li>
        <li className="mt-2 mb-2">
          <Image src="/Consumidor.png" className="w-full"/>
          <h2 className="font-black mt-6 text-xl text-justify">Assessoria em Direito do Consumidor</h2>
          <p className="mt-4 text-md text-justify opacity-85">Defendo consumidores e fornecedores em conflitos comerciais, como produtos defeituosos e vendas indevidas. Também oriento empresas para que cumpram as normas de defesa do consumidor, sempre buscando soluções rápidas e justas.</p>
        </li>
        <li className="mt-2 mb-2">
          <Image src="/Trabalhista.png" className="w-full"/>
          <h2 className="font-black mt-6 text-xl text-justify">Contencioso estratégico</h2>
          <p className="mt-4 text-md text-justify opacity-85">Defesa em processos judiciais e administrativos, atuando de forma assertiva para proteger os interesses da sua empresa.</p>
        </li>
      </ul>
      </motion.div>
    </main>
  );
}

export default Support;
