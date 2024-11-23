"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselDefaultComponent } from "../../components/carousel/carousel-default.component";
import { TitleSection } from "./title.section";

export function ServicesSection() {
  return (
    <section className="bg-white py-32 section pl-52" data-section="services">
      <TitleSection number="01" title="Servicos" bg="bg-black" color="text-black" />
      <div className="">
        <div>
          <h1 className="text-6xl font-black w-2/5 text-left text-black">Apoio Jurídico Personalizado.</h1>
          <p className="mt-8 w-2/4 font-black opacity-50 text-black">Garanta seus direitos com soluções jurídicas criativas e eficientes, tanto para sua vida pessoal quanto profissional.</p>
        </div>
        <div className="flex mt-16 gap-6">
          <CarouselDefaultComponent />
        </div>
      </div>
    </section>
  );
}
