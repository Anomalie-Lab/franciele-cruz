import Image from "next/image";

export function HomeSection() {
  return (
    <main className="w-screen h-screen relative pr-80 overflow-hidden section" data-section="home">
      <Image alt="bg" src="/greek-busts-standing-line.png" fill className="z-0" />
      <div className="z-10 flex items-end w-full h-full mt-12 relative">
        <Image alt="franciele-cruz poster" src="/franciele-home.svg" width={0} height={0} className="w-fit h-[65vw] max-h-[1000px]" />
        <div className="flex flex-col items-end gap-10 h-fit absolute right-20 top-24">
          <h1 className="text-[160px] text-accentSecondary font-bold font-playfair flex flex-col items-end">
            <span>Franciele</span> <span className="-mt-24">Cruz</span>
          </h1>
          <h2 className="text-7xl font-sacramento">Advogada</h2>
        </div>
      </div>
    </main>
  );
}
