function Areas() {
  return (
    <main className="p-16 flex flex-col gap-10">
      <div className="flex gap-5">
        <div className="flex w-full justify-between">
          <div className="flex gap-5">
            <div className="text-3xl font-bold w-fit h-fit flex items-center gap-5">
              02 <span className={`min-w-8 h-0.5 rounded-md bg-white`}></span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-black text-4xl text-accentSecondary">Áreas de atuação</h1>
              <p className="max-w-[430px] opacity-80 font-bold">Soluções Jurídicas Personalizadas para Empresas e Indivíduos: Proteção, Estratégia e Eficiência em Cada Área do Direito</p>
            </div>
          </div>
        </div>
        <aside>
          <div className="flex flex-col items-end gap-2 h-fit">
            <h1 className="text-4xl text-accentSecondary font-bold font-playfair flex flex-col items-end text-nowrap">Franciele Cruz</h1>
            <h2 className="text-3xl font-bold font-sacramento">Advogada</h2>
          </div>
        </aside>
      </div>
      <div className="max-w-[1000px] text-justify flex flex-col gap-5 mt-14">
        <div className="font-extrabold text-xl">“Como advogado, acredito que cada cliente merece uma abordagem única e personalizada. Minha missão é oferecer soluções jurídicas que protejam seus direitos, minimizem riscos e resolvam conflitos da maneira mais eficiente possível. Ao longo da minha carreira, tenho trabalhado com um foco claro em áreas específicas do direito, sempre com a intenção de proporcionar a melhor orientação e defesa para empresas e pessoas”.</div>
        <div className="text-lg">Aqui estão as áreas em que posso oferecer todo o suporte jurídico necessário, com foco em soluções personalizadas e eficientes para cada situação:</div>
        <ul className="flex flex-col gap-5 pb-32 text-lg">
          <li>
            <h2 className="font-extrabold">Direito Trabalhista</h2>
            <p>Direito Trabalhista Ofereço consultoria preventiva para empresas, elaborando contratos e estratégias para reduzir passivos trabalhistas, evitando litígios. Também defendo trabalhadores em questões como demissões sem justa causa, indenizações e salários atrasados, sempre buscando a melhor solução com ética e transparência.</p>
          </li>
          <li>
            <h2 className="font-extrabold">Direito Civil</h2>
            <p>Atuo em contratos, indenizações e disputas sobre direitos de propriedade, buscando proteger seus interesses. Tenho experiência em questões de sucessões, heranças e disputas patrimoniais, oferecendo suporte jurídico completo, seja por meio de acordo ou litígios.</p>
          </li>
          <li>
            <h2 className="font-extrabold">Direito Empresarial</h2>
            <p>Especializo-me em consultoria jurídica para pequenas e médias empresas, ajudando a estruturar negócios e garantir a conformidade legal. Ofereço suporte em planejamento societário e questões tributárias, com foco em reduzir riscos e impulsionar o crescimento sustentável da empresa.</p>
          </li>
          <li>
            <h2 className="font-extrabold">Direito do Consumidor</h2>
            <p>Defendo consumidores e fornecedores em conflitos comerciais, como produtos defeituosos e vendas indevidas. Também oriento empresas para que cumpram as normas de defesa do consumidor, sempre buscando soluções rápidas e justas.</p>
          </li>
          <li>
            <h2 className="font-extrabold">Direito de Família</h2>
            <p>Defendo consumidores e fornecedores em conflitos comerciais, como produtos defeituosos e vendas indevidas. Também oriento empresas para que cumpram as normas de defesa do consumidor, sempre buscando soluções rápidas e justas.</p>
          </li>
          <li>
            <h2 className="font-extrabold">Direito Previdenciário</h2>
            <p>Ofereço consultoria e acompanhamento em processos de aposentadoria, auxílio-doença e revisão de benefícios junto ao INSS, garantindo que você tenha acesso aos direitos que lhe são devidos com a melhor estratégia possível.</p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Areas;
