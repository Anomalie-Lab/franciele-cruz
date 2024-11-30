"use client";
import { Navbar } from "@/components/navbar/navbar.component";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function Areas() {
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
              02 -<span className={`min-w-8 h-0.5 rounded-md bg-white`}></span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-black text-4xl text-black">Áreas de atuação</h1>
              <p className="max-w-[430px] max-lg:max-w-full text-justify opacity-80 font-bold">Soluções Jurídicas Personalizadas para Empresas e Indivíduos: Proteção, Estratégia e Eficiência em Cada Área do Direito</p>
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
        <div className="font-extrabold text-xl max-lg:text-base ">“Como advogado, acredito que cada cliente merece uma abordagem única e personalizada. Minha missão é oferecer soluções jurídicas que protejam seus direitos, minimizem riscos e resolvam conflitos da maneira mais eficiente possível. Ao longo da minha carreira, tenho trabalhado com um foco claro em áreas específicas do direito, sempre com a intenção de proporcionar a melhor orientação e defesa para empresas e pessoas”.</div>
        <div className="text-lg max-lg:text-sm">Aqui estão as áreas em que posso oferecer todo o suporte jurídico necessário, com foco em soluções personalizadas e eficientes para cada situação:</div>
        <ul className="flex flex-col gap-5 pb-32 text-lg max-lg:text-base mt-12">
          <li className="mt-2 mb-2">
            <h2 className="font-extrabold">Direito Trabalhista</h2>
            <p className="mt-2">Direito Trabalhista Ofereço consultoria preventiva para empresas, elaborando contratos e estratégias para reduzir passivos trabalhistas, evitando litígios. Também defendo trabalhadores em questões como demissões sem justa causa, indenizações e salários atrasados, sempre buscando a melhor solução com ética e transparência.</p>
          </li>
          <li className="mt-2 mb-2">
            <h2 className="font-extrabold">Direito Civil</h2>
            <p className="mt-2">Atuo em contratos, indenizações e disputas sobre direitos de propriedade, buscando proteger seus interesses. Tenho experiência em questões de sucessões, heranças e disputas patrimoniais, oferecendo suporte jurídico completo, seja por meio de acordo ou litígios.</p>
          </li>
          <li className="mt-2 mb-2">
            <h2 className="font-extrabold">Direito Empresarial</h2>
            <p className="mt-2">Especializo-me em consultoria jurídica para pequenas e médias empresas, ajudando a estruturar negócios e garantir a conformidade legal. Ofereço suporte em planejamento societário e questões tributárias, com foco em reduzir riscos e impulsionar o crescimento sustentável da empresa.</p>
          </li>
          <li className="mt-2 mb-2">
            <h2 className="font-extrabold">Direito do Consumidor</h2>
            <p className="mt-2">Defendo consumidores e fornecedores em conflitos comerciais, como produtos defeituosos e vendas indevidas. Também oriento empresas para que cumpram as normas de defesa do consumidor, sempre buscando soluções rápidas e justas.</p>
          </li>
          <li className="mt-2 mb-2">
            <h2 className="font-extrabold">Direito de Família</h2>
            <p className="mt-2">Defendo consumidores e fornecedores em conflitos comerciais, como produtos defeituosos e vendas indevidas. Também oriento empresas para que cumpram as normas de defesa do consumidor, sempre buscando soluções rápidas e justas.</p>
          </li>
          <li className="mt-2 mb-2">
            <h2 className="font-extrabold">Direito Previdenciário</h2>
            <p className="mt-2">Ofereço consultoria e acompanhamento em processos de aposentadoria, auxílio-doença e revisão de benefícios junto ao INSS, garantindo que você tenha acesso aos direitos que lhe são devidos com a melhor estratégia possível.</p>
          </li>
        </ul>
      </motion.div>
    </main>
  );
}

export default Areas;
