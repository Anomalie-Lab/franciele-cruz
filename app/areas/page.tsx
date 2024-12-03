"use client";
import { Navbar } from "@/components/navbar/navbar.component";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaBalanceScale, FaBusinessTime, FaPeopleArrows, FaUserShield } from "react-icons/fa";
import { FaBuildingShield, FaPeopleRoof } from "react-icons/fa6";
function Areas() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  return (
    <main className="text-white bg-[url('/still-life-with-scales-justice.png')]  bg-cover bg-center p-16 flex flex-col gap-10 absolute w-full z-40 max-[1350px]:pr-64 max-[1350px]:pl-7 max-[1024px]:pr-7">
      <Navbar />
      <div className="flex gap-5 max-lg:flex-col-reverse items-center max-md:mt-12">
        <motion.div ref={ref1} initial={{ opacity: 0, y: -150 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -150 }} transition={{ duration: 0.5 }} className="flex w-full justify-between max-lg:mt-16">
          <div className="flex gap-5">
            <div className="text-3xl font-bold w-fit h-fit flex items-center gap-5 max-lg:hidden">
              02 <span className={`min-w-8 h-0.5 rounded-md bg-white`}></span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-black text-4xl text-accentSecondary">Áreas de atuação</h1>
              <p className="max-w-[430px] font-base opacity-70 max-lg:max-w-full text-justify">Soluções Jurídicas Personalizadas para Empresas e Indivíduos: Proteção, Estratégia e Eficiência em Cada Área do Direito</p>
            </div>
          </div>
        </motion.div>
        <aside className="w-full">
          <Link className="flex flex-col items-end gap-2 h-fit" href="/#home">
            <h3 className="font-sacramento text-2xl w-[200px] text-accentSecondary max-md:text-xl max-md:w-[160px]">Advogada</h3>
            <h1 className="text-3xl font-playfair max-md:text-2xl">Franciele Cruz</h1>
          </Link>
        </aside>
      </div>
      <motion.div ref={ref2} initial={{ opacity: 0, x: -150 }} animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }} transition={{ duration: 0.5, delay: 0.5 }} className="max-w-[1000px] text-justify flex flex-col gap-5 mt-14">
        <ul className="flex opacity-85 flex-col gap-20 pb-32 text-lg max-lg:text-base mt-12 max-lg:mt-0 text-white">
          <li className="flex gap-4 flex-col max-lg:flex-col">
            <div className="flex text-accentSecondary  max-lg:w-full justify-between min-w-80 flex-col">
              <FaBusinessTime className="text-7xl mb-3" />
            </div>
            <h3 className="text-xl font-black tracking-widest">Direito Trabalhista</h3>
            <p className="text-justify leading-8 mb-3">
              Ofereço <strong>consultoria preventiva</strong> para empresas, elaborando <strong>contratos</strong> e estratégias para reduzir passivos trabalhistas, evitando litígios. Também defendo trabalhadores em questões como <strong>demissões sem justa causa</strong>, <strong>indenizações</strong> e <em>salários atrasados</em>, sempre buscando a melhor solução com ética e transparência.
            </p>
          </li>
          <li className="flex gap-4 flex-col max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 flex-col">
              <FaUserShield className="text-7xl mb-3" />
            </div>
            <h3 className="text-xl font-black tracking-widest">Direito Consumidor</h3>
            <p className="text-justify leading-8 mb-3">
              Defendo consumidores e fornecedores em <strong>conflitos comerciais</strong>, como <em>produtos defeituosos</em> e <strong>vendas indevidas</strong>. Também oriento empresas para que cumpram as normas de <strong>defesa do consumidor</strong>, sempre buscando soluções rápidas e justas.
            </p>
          </li>
          <li className="flex gap-4 flex-col max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 flex-col">
              <FaPeopleArrows className="text-7xl mb-3" />
            </div>
            <h3 className="text-xl font-black tracking-widest">Direito Civil</h3>
            <p className="text-justify leading-8 mb-3">
              Atuo em <strong>contratos</strong>, <strong>indenizações</strong> e disputas sobre <strong>direitos de propriedade</strong>, buscando proteger seus interesses. Tenho experiência em questões de <strong>sucessões</strong>, <strong>heranças</strong> e disputas patrimoniais, oferecendo suporte jurídico completo, seja por meio de <em>acordo</em> ou <strong>litígios</strong>.
            </p>
          </li>
          <li className="flex gap-4 flex-col max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 flex-col">
              <FaBuildingShield className="text-7xl mb-3" />
            </div>
            <h3 className="text-xl font-black tracking-widest">Direito Empresarial</h3>
            <p className="text-justify leading-8 mb-3">
              Especializo-me em <strong>consultoria jurídica</strong> para pequenas e médias empresas, ajudando a estruturar negócios e garantir a conformidade legal. Ofereço suporte em <strong>planejamento societário</strong> e questões <strong>tributárias</strong>, com foco em reduzir riscos e impulsionar o <strong>crescimento sustentável</strong> da empresa.
            </p>
          </li>
          <li className="flex gap-4 flex-col max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 flex-col">
              <FaPeopleRoof className="text-7xl mb-3" />
            </div>
            <h3 className="text-xl font-black tracking-widest">Direito de Família</h3>
            <p className="text-justify leading-8 mb-3">
              Apoio em questões de <strong>divórcio</strong>, <strong>guarda de filhos</strong>, <strong>pensão alimentícia</strong> e <strong>partilha de bens</strong>, com uma abordagem humanizada e voltada para a resolução pacífica de conflitos, priorizando o bem-estar das partes envolvidas, especialmente em casos que envolvem <em>crianças</em>.
            </p>
          </li>
          <li className="flex gap-4 flex-col max-lg:flex-col">
            <div className="flex text-accentSecondary max-lg:w-full justify-between min-w-80 flex-col">
              <FaBalanceScale className="text-7xl mb-3" />
            </div>
            <h3 className="text-xl font-black tracking-widest">Direito Previdenciário</h3>
            <p className="text-justify leading-8 mb-3">
              Ofereço consultoria e acompanhamento em processos de <strong>aposentadoria</strong>, <strong>auxílio-doença</strong> e revisão de benefícios junto ao <strong>INSS</strong>, garantindo que você tenha acesso aos direitos que lhe são devidos com a melhor estratégia possível.
            </p>
          </li>
        </ul>
      </motion.div>
    </main>
  );
}

export default Areas;
