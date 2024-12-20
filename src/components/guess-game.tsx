import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { guessData } from "../constats/guessData";
import { getRandomValue } from "../helpers/get-random-value";
import { GameBanner } from "./game-banner";
import { GameStats } from "./game-stats";
import { GuessForm } from "./guess-form";
import { GuessList } from "./guess-list";
import { GuessUsage } from "./guess-usage";
import { Logo } from "./logo";

export function GuessGame() {
  const [numberOfGuess, setnumberOfGuess] = useState(0);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [data, setData] = useState(() => {
    return getRandomValue(guessData);
  });

  const { width, height } = useWindowSize();
  const playerWon = data.word
    .split("")
    .every((item) => correctLetters.includes(item));

  const handleUpdateGuess = (value: string) => {
    setGuess(value);
  };

  const handleAddGuess = (newGuess: string) => {
    if (guesses.includes(newGuess)) {
      return;
    }
    setGuesses((prev) => [...prev, newGuess]);

    if (data.word.includes(newGuess)) {
      setCorrectLetters((prev) => [...prev, newGuess]);
    }
    setnumberOfGuess((n) => n + 1);
  };

  const handleReset = () => {
    const newGame = getRandomValue(guessData);
    setData(newGame);
    setGuesses([]);
    setCorrectLetters([]);
    setnumberOfGuess(0);
    setGuess("");
  };

  useEffect(() => {
    if (numberOfGuess >= 10) {
      const timer = setTimeout(() => {
        alert("Você perdeu 😐");
        handleReset();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [numberOfGuess]);

  return (
    <div className="grid min-h-screen w-full place-items-center bg-[#F5F5FA] p-5">
      <main className="w-full max-w-[556px] space-y-[52px] rounded-lg border bg-white px-8 py-4 shadow-md">
        <Logo />
        {data ? (
          <>
            <GameStats guess={numberOfGuess} onReset={handleReset} />
            <GameBanner info={data?.tip} />
            <GuessList word={data?.word} correct={correctLetters} />
            <GuessForm
              onAddGuess={handleAddGuess}
              onUpdateGuess={handleUpdateGuess}
              guess={guess}
              playerWon={playerWon}
              onReset={handleReset}
            />
            <GuessUsage guesses={guesses} word={data.word} />
          </>
        ) : (
          <p>loading..</p>
        )}
      </main>
      {playerWon && (
        <div className="mx-auto max-w-4xl">
          <Confetti width={width} height={height} />
        </div>
      )}
    </div>
  );
}
