import { cn } from "../utils/cn";

export function GuessUsage({
  guesses,
  word,
}: {
  guesses: string[];
  word: string;
}) {
  return (
    <div className="space-y-3 border-t border-t-[#C3C3C3]">
      <h3 className="mt-3 font-sans text-[18px] font-medium">
        Letras utilizadas
      </h3>
      <ul className="flex w-full flex-wrap items-center gap-4">
        {guesses.length > 0 &&
          guesses.map((g, index) => {
            const isCorrect = word.split("").includes(g);
            return (
              <li
                key={index}
                className={cn(
                  "grid size-11 place-items-center rounded-lg border border-green-500 text-xl font-medium text-[#03AB4F]",
                  {
                    "border-[#691B0A] bg-[#FFCF62] text-black": !isCorrect,
                  },
                )}
              >
                {g}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
