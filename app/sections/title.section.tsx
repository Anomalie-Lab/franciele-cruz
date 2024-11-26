export function TitleSection({ number, title, color, bg, id }: { id: string; number: string; title: string; color: string; bg: string }) {
  return (
    <div id={id} className={`flex gap-4 items-center ${color} text-xl mb-10`}>
      <span className="font-bold ">{number}</span>
      <span className={`w-8 h-0.5 rounded-md ${bg}`}></span>
      <h1>{title}</h1>
    </div>
  );
}
