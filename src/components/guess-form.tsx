import { useRef } from "react";
import { cn } from "../utils/cn";

interface GuessFormProps {
  onAddGuess: (newGuess: string) => void;
  guess: string;
  onUpdateGuess: (value: string) => void;
  playerWon: boolean;
  onReset: () => void;
}
export function GuessForm({
  onAddGuess,
  guess,
  onUpdateGuess,
  onReset,
  playerWon,
}: GuessFormProps) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!guess.trim()) {
      return;
    }
    onAddGuess(guess.toUpperCase());
    onUpdateGuess("");
    if (ref.current) {
      ref.current.focus();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {!playerWon && <h3 className="text-[18px] font-medium">Palpite</h3>}
      <div className="flex items-center gap-4">
        {!playerWon && (
          <div className="grid size-[46px] place-items-center rounded-lg bg-[#EBEBFC] text-xl ring-2 ring-inset ring-[#4F4FB9]">
            <input
              maxLength={1}
              value={guess}
              ref={ref}
              onChange={(e) => onUpdateGuess(e.target.value)}
              className="ml-1.5 size-[23px] border bg-transparent uppercase outline-none"
            />
          </div>
        )}

        <button
          type={playerWon ? "button" : "submit"}
          onClick={() => {
            if (playerWon) {
              return onReset();
            }
            return;
          }}
          className={cn(
            "h-[46px] rounded-lg bg-[#6363DB] px-[14px] text-center font-bold text-white ring-2 ring-inset ring-[#4F4FB9] transition-opacity hover:opacity-80",
            {
              "mx-auto": playerWon,
            },
          )}
        >
          {playerWon ? "🎊🎊 Novo jogo 🎊🎊" : "Confirmar"}
        </button>
      </div>
    </form>
  );
}
