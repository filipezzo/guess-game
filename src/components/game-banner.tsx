import { Lamp } from "lucide-react";

export function GameBanner({ info }: { info: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-[#EBEBFC] p-4">
      <Lamp size={32} className="text-[#4F4FB9]" />
      <div className="flex flex-col gap-1 text-[#4F4FB9]">
        <h3 className="text-lg font-bold">Dica</h3>
        <p className="">{info}</p>
      </div>
    </div>
  );
}
