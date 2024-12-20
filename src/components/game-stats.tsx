import { RefreshCcw } from "lucide-react";

interface GameStatsInterface {
  guess: number;
  onReset: () => void;
}

export function GameStats({ guess, onReset }: GameStatsInterface) {
  return (
    <div className="flex items-center justify-between">
      <p className="flex items-center gap-1">
        <span className="text-lg font-bold text-[#E8891C]">{guess}</span> de 10
        tentativas
      </p>
      <button onClick={onReset}>
        <RefreshCcw className="text-[#6363DB]" size={24} />
      </button>
    </div>
  );
}
