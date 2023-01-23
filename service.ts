const word = "LEMON";

export const checkWord = (attempt: string) => {
  const testAgainst = word.split("");
  const attemptAsArray = attempt.split("");
  attemptAsArray.forEach((char, idx) => {
    if (char === testAgainst[idx]) {
      char = "b";
      testAgainst[idx] = " ";
    }
  });
  attemptAsArray.forEach((char, idx) => {
    if (testAgainst.includes(char)) {
      char = "c";
      testAgainst[idx] = " ";
    }
  });
  return attemptAsArray.map((c) => ("bc".includes(c) ? c : "m"));
};
