const word = "LEMON";

export const checkWord = (attempt: string) => {
  const testAgainst = word.split("");
  const attemptAsArray = attempt.split("");
  attemptAsArray.forEach((char, idx) => {
    if (char === testAgainst[idx]) {
      attemptAsArray[idx] = "b";
      testAgainst[idx] = " ";
    }
  });
  console.log(attemptAsArray);
  
  attemptAsArray.forEach((char, idx) => {
    const indexOfSimilar = testAgainst.indexOf(char)
    if (indexOfSimilar !== -1) {
      attemptAsArray[idx] = "c";
      testAgainst[indexOfSimilar] = ''
    }
  });
  return attemptAsArray.map((c) => ("bc".includes(c) ? c : "m"));
};