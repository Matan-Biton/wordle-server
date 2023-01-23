import { charObj } from "./types";

const word = "LEMON";

export const checkWord = (attempt: string) => {
  let testAgainst = word.split("");
  const returnedObj: charObj[] = attempt.split("").map((char) => {
    return { char, status: "" };
  });
  returnedObj.forEach((charObj, charIdx) => {
    if (charObj.char === testAgainst[charIdx]) {
      charObj.status = "bull";
      testAgainst[charIdx] = " ";
    }
  });
  returnedObj.forEach((charObj) => {
    const indexOfSimilar = testAgainst.indexOf(charObj.char);
    if (indexOfSimilar !== -1) {
      charObj.status = "cow";
      testAgainst[indexOfSimilar] = " ";
    }
  });
  returnedObj.forEach((e) => {
    if (e.status === "") e.status = "missed";
  });
  // console.log({ attempt, solved });
  return { returnedObj };
};

// checkWord([
//   { char: "L", status: ""},
//   { char: "L", status: ""},
//   { char: "V", status: ""},
//   { char: "E", status: ""},
//   { char: "V", status: ""},
// ]);
