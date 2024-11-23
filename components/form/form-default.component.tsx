import { FiChevronRight } from "react-icons/fi"
import { IoLogoWhatsapp } from "react-icons/io";



export const FormDefaultComponent=()=> {
    return (
        <>
        <form className="h-auto w-1/2 p-0">
            <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                    <label className="block text-white mb-2 font-base" htmlFor="nome">Nome</label>
                    <input
                        id="nome"
                        className="w-full border border-white p-3 bg-transparent placeholder-white text-sm"
                        type="text"
                        placeholder="Digite seu nome"
                    />
                </div>
                <div className="w-1/2">
                    <label className="block text-white mb-2 font-base" htmlFor="email">Email</label>
                    <input
                        id="email"
                        className="w-full border border-white p-3 bg-transparent placeholder-white text-sm"
                        type="email"
                        placeholder="Digite seu email"
                    />
                </div>
            </div>

            <div className="mb-4 mt-8">
                <label className="block text-white mb-2 font-base" htmlFor="mensagem">Mensagem</label>
                <textarea
                    id="mensagem"
                    className="w-full border border-white p-3 bg-transparent placeholder-white text-sm"
                    rows="4"
                    placeholder="Adicione sua mensagem aqui."
                />
            </div>

            <div className="flex justify-between items-center mt-14">
                <div className="text-white rounded-full border border-white bg-transparent h-16 w-16 flex items-center justify-center">
                    <IoLogoWhatsapp size={30}/>
                </div>
                <button className="border border-white text-white p-2 hover:bg-white hover:text-black transition w-56 h-12 flex items-center justify-around">
                    <p className="text-sm font-base">Agende sua consulta</p>
                    <FiChevronRight className="w-6 h-6" />
                </button>
            </div>
        </form>
    </>
    )
}