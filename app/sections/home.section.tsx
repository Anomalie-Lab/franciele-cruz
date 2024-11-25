import Image from "next/image";

export function HomeSection() {
  return (
    <main className="bg-[url('/greek-busts-standing-line.png')] bg-cover bg-center  w-screen h-screen relative pr-80 overflow-hidden section max-[1024px]:pr-0 max-md:h-[90vh]" data-section="home">
      <div className="z-10 flex items-end w-full h-full mt-12 relative max-md:mt-0">
        <Image alt="franciele-cruz poster" src="/franciele-home.svg" width={0} height={0} className="w-fit min-h-[700px] h-[65vw] max-h-[1000px] max-md:hidden" />
        <Image alt="franciele-cruz poster" src="/franciele-home2.svg" width={0} height={0} className="hidden max-md:block w-fit min-h-[700px] min-w-[490px] h-[65vw] max-h-[1000px] max-md:w-full -bottom-7 max-md:absolute " />
        <div className="flex flex-col items-end gap-10 h-fit absolute right-20 top-24 max-md:right-5  max-[750px]:-translate-y-1/3 max-[750px]:top-1/3">
          <h1 className="text-[160px] max-[1024px]:text-8xl max-[400px]:text-6xl text-accentSecondary font-bold font-playfair flex flex-col items-end">
            <span>Franciele</span> <span className="-mt-24 max-[1024px]:mt-0">Cruz</span>
          </h1>
          <h2 className="text-7xl max-[1024px]:text-5xl max-[400px]:text-3xl font-sacramento ">Advogada</h2>
        </div>
      </div>
    </main>
  );
}
