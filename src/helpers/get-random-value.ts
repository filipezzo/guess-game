type GuessData = {
  id: string;
  tip: string;
  word: string;
};

export const getRandomValue = (arr: GuessData[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
};
