import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export function FooterSection() {
  return (
    <footer className="bg-black mt-16 h-96 flex flex-col">
      <div className="flex justify-around pt-20 pb-14 border-b border-white border-opacity-5 mx-20">
        <div className="flex flex-col bg-black p-0 m-0">
          <h1 className="text-[40px] text-accentSecondary font-bold font-playfair flex flex-col items-end">
            <span>Franciele Cruz</span>
          </h1>
          <h2 className="text-3xl font-sacramento text-end text-white">Advogada</h2>
        </div>
        <div className="flex flex-col gap-4 text-white font-base">
          <a>Trajetória</a>
          <a>Especialidades</a>
          <a>Serviços</a>
        </div>
        <div className="flex flex-col gap-4 text-white font-base">
          <a>Contato</a>
          <a>Localização</a>
        </div>
        <div>
          <h4 className="text-accentSecondary font-base">Redes Sociais</h4>
          <div className="flex mt-6 gap-2 text-white">
            <FaInstagram size={35} />
            <FaWhatsapp size={35} />
          </div>
        </div>
      </div>
    </footer>
  );
}
