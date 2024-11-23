import Image from "next/image";
import { TitleSection } from "./title.section";
import { FaBusinessTime } from "react-icons/fa";

export function SkillsSection() {
  return (
    <section className="bg-black/40 pt-32 section pl-52 text-white" data-section="skills">
      <TitleSection number="02" title="Especialidades" bg="bg-white" color="text-white" />
      <div className="">
        <div>
          <h1 className="text-6xl font-black w-2/5 text-left">Áreas de atuação.</h1>
          <p className="mt-8 w-2/4 font-black opacity-50">Como advogada, ofereço soluções jurídicas personalizadas, focadas em resolver os desafios legais de meus clientes com agilidade e eficiência.</p>
        </div>
        <ul className="grid grid-cols-2 mb-32 max-w-[900px] w-full h-[600px] mt-10">
          <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border-t border-x">
            <FaBusinessTime size={60} />
            <h3 className="text-xl font-semibold text-white tracking-widest">Direito Trabalhista 1 </h3>
          </li>
          <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border-t border-r">
            <FaBusinessTime size={60} />
            <h3 className="text-xl font-semibold text-white tracking-widest">Direito Trabalhista 2</h3>
          </li>
          <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border">
            <FaBusinessTime size={60} />
            <h3 className="text-xl font-semibold text-white tracking-widest">Direito Trabalhista 3</h3>
          </li>
          <li className="flex text-accentSecondary justify-between px-9 py-12 flex-col h-full w-full border-y border-r">
            <FaBusinessTime size={60} />
            <h3 className="text-xl font-semibold text-white tracking-widest">Direito Trabalhista 4</h3>
          </li>
        </ul>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
