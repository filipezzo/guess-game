export function GuessList({
  word,
  correct,
}: {
  word: string;
  correct: string[];
}) {
  const wordArr = word.split("");

  return (
    <ul className="flex w-full flex-wrap justify-center gap-4">
      {wordArr.map((letter, index) => {
        const isCorrect = correct.includes(letter);

        return (
          <li
            key={index}
            className="grid size-[54px] place-items-center rounded-[10px] bg-[#EBEBFC] text-3xl font-bold text-green-500"
          >
            <p>{isCorrect ? letter : null}</p>
          </li>
        );
      })}
    </ul>
  );
}
