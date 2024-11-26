import { FormDefaultComponent } from "@/components/form/form-default.component";
import { TitleSection } from "./title.section";
export function ContactSection() {
  return (
    <section id="contact" className="bg-[url('/view-ancient-greek-bust-figure.png')] bg-cover	section py-32 h-full pl-52 text-white max-[1450px]:pl-4 px-4" data-section="contact">
      <TitleSection id="services" number="04" title="Contato" bg="bg-white" color="text-white" />
      <div className="">
        <div>
          <h1 className="text-6xl font-black w-2/5 text-left max-lg:w-fit max-md:text-4xl text-accentSecondary">Agende sua consulta.</h1>
          <p className="mt-8 w-2/4 font-base opacity-70 max-lg:w-fit max-md:text-sm text-white">Estou à disposição para ouvir seu caso e oferecer a orientação jurídica personalizada que você precisa. Entre em contato!</p>
        </div>
        <div className="flex mt-16 gap-6">
          <FormDefaultComponent />
        </div>
      </div>
    </section>
  );
}
