import { charObj } from "./types";

const word = "LEMON";

export const checkWord = (attempt: charObj[]) => {
  let testAgainst = word.split("");
  attempt.forEach((charObj, charIdx) => {
    if (charObj.char === testAgainst[charIdx]) {
      charObj.status = "bull";
      testAgainst[charIdx] = " ";
    }
  });
  attempt.forEach((charObj) => {
    const indexOfSimilar = testAgainst.indexOf(charObj.char);
    if (indexOfSimilar !== -1) {
      charObj.status = "cow";
      testAgainst[indexOfSimilar] = " ";
    }
  });
  attempt.forEach((e) => {
    if (e.status === "") e.status = "missed";
  });
  const solved = attempt.every((e) => e.status === "bull");
  // console.log({ attempt, solved });
  return { attempt, solved };
};

// checkWord([
//   { char: "L", status: ""},
//   { char: "L", status: ""},
//   { char: "V", status: ""},
//   { char: "E", status: ""},
//   { char: "V", status: ""},
// ]);
