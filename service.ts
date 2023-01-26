export const checkWord = (attempt: string, answer: string) => {
  return (
    attempt
      .split("")
      .map((char, idx) => (char === answer[idx] ? "b" : answer.includes(char) ? "c" : "m"))
      .map((status, idx) => ({ char: attempt[idx], status }))
  );
};
