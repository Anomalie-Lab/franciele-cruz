"use client";
import { Navbar } from "@/components/navbar/navbar.component";
import { motion, useInView } from "framer-motion";
import { Image } from "@chakra-ui/react";
import { useRef } from "react";
import { FooterSection } from "../sections/footer.section";
import Link from "next/link";

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
              <h1 className="font-black text-4xl text-black">
                Apoio Jurídico Personalizado
              </h1>
              <p className="max-w-[430px] font-base opacity-70 max-lg:max-w-full text-justify">
                 Garanta seus direitos com soluções jurídicas criativas e eficientes, tanto para sua vida pessoal quanto profissional.
              </p>
            </div>
          </div>
        </motion.div>
        <aside className="w-full">
          <Link href="/#home" className="flex flex-col items-end gap-2 h-fit">
            <h3 className="font-sacramento text-2xl w-[200px] text-accentSecondary max-md:text-xl max-md:w-[160px]">Advogada</h3>
            <h1 className="text-3xl font-playfair font-semibold max-md:text-2xl">Franciele Cruz</h1>
          </Link>
        </aside>
      </div>
      <motion.div ref={ref2} initial={{ opacity: 0, x: -150 }} animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }} transition={{ duration: 0.5, delay: 0.5 }} className="max-w-[1000px] text-justify flex flex-col gap-5 mt-14">
      <ul className="grid grid-cols-2 gap-24 w-full pb-32 text-lg max-lg:text-base max-md:grid-cols-1 mt-12">
        <li className="mt-2 mb-2">
          <Image src="/Empresarial.png" className="w-full drop-shadow"/>
          <h2 className="font-black mt-6 text-xl text-justify">Planejamento societário e empresarial</h2>
          <p className="mt-4 text-md text-justify opacity-85">
            Especializo-me em consultoria jurídica para <span className="font-semibold">pequenas e médias empresas</span>, ajudando a estruturar negócios e garantir a conformidade legal. Ofereço suporte em <strong>planejamento societário</strong> e <span className="font-semibold">questões tributárias</span>, com foco em reduzir riscos e impulsionar o <span className="italic">crescimento sustentável</span> da empresa.
          </p>
        </li>
        <li className="mt-2 mb-2">
          <Image src="/Trabalhista.png" className="w-full drop-shadow"/>
          <h2 className="font-black mt-6 text-xl text-justify">Consultoria trabalhista</h2>
          <p className="mt-4 text-md text-justify opacity-85">
            <strong>Orientação preventiva</strong>, elaboração de <em>contratos</em> e acompanhamento de <span className="font-semibold">reclamações trabalhistas</span>.
          </p>
        </li>
        <li className="mt-2 mb-2">
          <Image src="/Contratos.png" className="w-full drop-shadow"/>
          <h2 className="font-black mt-6 text-xl text-justify">Revisão e elaboração de contratos</h2>
          <p className="mt-4 text-md text-justify opacity-85">
            Análise de <span className="font-semibold">contratos comerciais</span>, <em>locação</em>, <span className="font-semibold">prestação de serviços</span> e outros documentos essenciais.
          </p>
        </li>
        <li className="mt-2 mb-2">
          <Image src="/Consumidor.png" className="w-full drop-shadow"/>
          <h2 className="font-black mt-6 text-xl text-justify">Assessoria em Direito do Consumidor</h2>
          <p className="mt-4 text-md text-justify opacity-85">
            Defendo <span className="font-semibold">consumidores</span> e <span className="font-semibold">fornecedores</span> em conflitos comerciais, como <strong>produtos defeituosos</strong> e <em>vendas indevidas</em>. Também oriento empresas para que cumpram as normas de <span className="italic">defesa do consumidor</span>, sempre buscando soluções rápidas e justas.
          </p>
        </li>
        <li className="mt-2 mb-2">
          <Image src="/Trabalhista.png" className="w-full drop-shadow"/>
          <h2 className="font-black mt-6 text-xl text-justify">Contencioso estratégico</h2>
          <p className="mt-4 text-md text-justify opacity-85">
            Defesa em <span className="font-semibold">processos judiciais</span> e administrativos, atuando de forma assertiva para proteger os interesses da sua empresa.
          </p>
        </li>
      </ul>
      </motion.div>
    </main>
  );
}

export default Support;
