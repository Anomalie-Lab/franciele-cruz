"use client";
import { Navbar } from "@/components/navbar/navbar.component";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBalanceScale, FaBusinessTime, FaPeopleArrows, FaUserShield } from "react-icons/fa";
import { FaBuildingShield, FaPeopleRoof } from "react-icons/fa6";
function Areas() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  return (
    <main className="text-white bg-[#030202]/90 bg-cover bg-center p-16 flex flex-col gap-10 absolute w-full z-40 max-[1350px]:pr-64 max-[1350px]:pl-7 max-[1024px]:pr-7">
      <Navbar />
      <div className="flex gap-5 max-lg:flex-col-reverse items-center max-md:mt-12">
        <motion.div ref={ref1} initial={{ opacity: 0, y: -150 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -150 }} transition={{ duration: 0.5 }} className="flex w-full justify-between max-lg:mt-16">
          <div className="flex gap-5">
            <div className="text-3xl font-bold w-fit h-fit flex items-center gap-5 max-lg:hidden">
              02 -<span className={`min-w-8 h-0.5 rounded-md bg-white`}></span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-black text-4xl text-accentSecondary">Áreas de atuação</h1>
              <p className="max-w-[430px] max-lg:max-w-full text-justify opacity-70 font-black">Soluções Jurídicas Personalizadas para Empresas e Indivíduos: Proteção, Estratégia e Eficiência em Cada Área do Direito</p>
            </div>
          </div>
        </motion.div>
        <aside className="w-full">
          <div className="flex flex-col items-end gap-2 h-fit">
            <h1 className="text-4xl text-accentSecondary font-bold font-playfair flex flex-col items-end text-nowrap">Franciele Cruz</h1>
            <h2 className="text-3xl font-bold font-sacramento">Advogada</h2>
          </div>
        </aside>
      </div>
      <motion.div ref={ref2} initial={{ opacity: 0, x: -150 }} animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }} transition={{ duration: 0.5, delay: 0.5 }} className="max-w-[1000px] text-justify flex flex-col gap-5 mt-14">
        <ul className="flex flex-col gap-20 pb-32 text-lg max-lg:text-base mt-12 max-lg:mt-0 text-white">
          <li className="flex gap-9 items-end max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 min-h-72 p-10 flex-col gap-12 border">
              <FaBusinessTime className="text-7xl" />
              <h3 className="text-xl font-semibold text-white tracking-widest">Direito Trabalhista</h3>
            </div>
            <p className="">Ofereço consultoria preventiva para empresas, elaborando contratos e estratégias para reduzir passivos trabalhistas, evitando litígios. Também defendo trabalhadores em questões como demissões sem justa causa, indenizações e salários atrasados, sempre buscando a melhor solução com ética e transparência.</p>
          </li>
          <li className="flex gap-9 items-end max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 min-h-72 p-10 flex-col gap-12 border">
              <FaUserShield className="text-7xl" />
              <h3 className="text-xl font-semibold text-white tracking-widest">Direito Consumidor</h3>
            </div>
            <p className="">Defendo consumidores e fornecedores em conflitos comerciais, como produtos defeituosos e vendas indevidas. Também oriento empresas para que cumpram as normas de defesa do consumidor, sempre buscando soluções rápidas e justas.</p>
          </li>
          <li className="flex gap-9 items-end max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 min-h-72 p-10 flex-col gap-12 border">
              <FaPeopleArrows className="text-7xl" />
              <h3 className="text-xl font-semibold text-white tracking-widest">Direito Civil</h3>
            </div>
            <p className="">Atuo em contratos, indenizações e disputas sobre direitos de propriedade, buscando proteger seus interesses. Tenho experiência em questões de sucessões, heranças e disputas patrimoniais, oferecendo suporte jurídico completo, seja por meio de acordo ou litígios.</p>
          </li>
          <li className="flex gap-9 items-end max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 min-h-72 p-10 flex-col gap-12 border">
              <FaBuildingShield className="text-7xl" />
              <h3 className="text-xl font-semibold text-white tracking-widest">Direito Empresarial</h3>
            </div>
            <p className="">Especializo-me em consultoria jurídica para pequenas e médias empresas, ajudando a estruturar negócios e garantir a conformidade legal. Ofereço suporte em planejamento societário e questões tributárias, com foco em reduzir riscos e impulsionar o crescimento sustentável da empresa.</p>
          </li>
          <li className="flex gap-9 items-end max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 min-h-72 p-10 flex-col gap-12 border">
              <FaPeopleRoof className="text-7xl" />
              <h3 className="text-xl font-semibold text-white tracking-widest">Direito de Família</h3>
            </div>
            <p className="">Apoio em questões de divórcio, guarda de filhos, pensão alimentícia e partilha de bens, com uma abordagem humanizada e voltada para a resolução pacífica de conflitos, priorizando o bem-estar das partes envolvidas, especialmente em casos que envolvem crianças.</p>
          </li>
          <li className="flex gap-9 items-end max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 min-h-72 p-10 flex-col gap-12 border">
              <FaBalanceScale className="text-7xl" />
              <h3 className="text-xl font-semibold text-white tracking-widest">Direito Previdenciário</h3>
            </div>
            <p className="">Ofereço consultoria e acompanhamento em processos de aposentadoria, auxílio-doença e revisão de benefícios junto ao INSS, garantindo que você tenha acesso aos direitos que lhe são devidos com a melhor estratégia possível.</p>
          </li>
        </ul>
      </motion.div>
    </main>
  );
}

export default Areas;
