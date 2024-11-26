"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselDefaultComponent } from "../../components/carousel/carousel-default.component";
import { TitleSection } from "./title.section";

export function ServicesSection() {
  return (
    <section className="bg-white section py-32 h-full pl-52 text-white max-[1450px]:pl-4 px-4" data-section="services">
      <TitleSection id="services" number="03" title="Serviços" bg="bg-black" color="text-black" />
      <div className="">
        <div>
          <h1 className="text-6xl font-black w-2/5 text-left max-lg:w-fit max-md:text-4xl text-black">Apoio Jurídico Personalizado.</h1>
          <p className="mt-8 w-2/4 font-base opacity-70 max-lg:w-fit max-md:text-sm text-black">Garanta seus direitos com soluções jurídicas criativas e eficientes, tanto para sua vida pessoal quanto profissional.</p>
        </div>
        <div className="flex mt-16 md:mt-10 sm:mt-0 gap-6">
          <CarouselDefaultComponent />
        </div>
      </div>
    </section>
  );
}
