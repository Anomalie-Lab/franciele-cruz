"use client";
import { FormEvent, useCallback } from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
interface InputsFormContactI {
  name: string;
  email: string;
  message: string;
}
const schema = yup.object().shape({
  name: yup.string().required("Esse campo e obrigatorio!"),
  email: yup.string().email("Insira um email valido").required("Esse campo e obrigatorio"),
  message: yup.string().required("Esse campo e obrigatorio!"),
});

export const FormDefaultComponent = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: InputsFormContactI) => {
    try {
      // setLoading(true)
      const res = await axios.post("/messenger", { email: data.email, html: `<h1>${data.name}</h1>`, subject: "Alguma parada ai" });

      if (res.status !== 200) {
        alert("deu erro emmmms");
      }

      alert("deu bom emmmmmm");
    } catch (error) {
      alert("deu erro maior ainda emmm");
    } finally {
      // setLoading(false)
    }
  };

  return (
    <>
      <form className="h-auto p-0 w-1/2 max-md:w-full " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-white mb-2 font-base" htmlFor="nome">
              Nome
            </label>
            <input id="nome" className="w-full border border-white p-3 bg-transparent placeholder-white text-sm" type="text" placeholder="Digite seu nome" {...register("name")} />
            <span>{formState?.errors?.name?.message}</span>
          </div>
          <div className="w-1/2">
            <label className="block text-white mb-2 font-base" htmlFor="email">
              Email
            </label>
            <input id="email" className="w-full border border-white p-3 bg-transparent placeholder-white text-sm" type="email" placeholder="Digite seu email" {...register("email")} />
            <span>{formState?.errors?.email?.message}</span>
          </div>
        </div>

        {/* <div className="mb-4 mt-8">
          <label className="block text-white mb-2 font-base" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea id="mensagem" className="w-full border border-white p-3 bg-transparent placeholder-white text-sm" rows={4} placeholder="Adicione sua mensagem aqui." {...register("message")} />
          <span>{formState?.errors?.message?.message}</span>
        </div> */}

        <div className="flex justify-between items-center mt-14">
          <div className="text-white rounded-full border-2 border-white bg-transparent h-16 w-16 flex items-center justify-center">
            <IoLogoWhatsapp size={30} />
          </div>
          <button type="submit" className="border border-white text-white p-2 hover:bg-white hover:text-black transition w-56 h-12 flex items-center justify-around">
            <p className="text-sm font-base">Agende sua consulta</p>
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </form>
    </>
  );
};
