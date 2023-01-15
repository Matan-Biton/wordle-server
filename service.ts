import { charObj } from "./types";
import { wordsDB } from "./wordsDB/configDB";

let word = "LEMON";

export const fetchRandomWord = async () => {
  const SQL = "SELECT word FROM words ORDER BY RANDOM() LIMIT 1";
  wordsDB.query(SQL).then((res) => {
    word = res.rows[0];
  });
  console.log(word)
};

export const checkWord = (attempt: charObj[]) => {
  let testAgainst = word.split("");
  attempt.forEach((charObj, charIdx) => {
    if (charObj.char === testAgainst[charIdx]) {
      charObj.status = "bull";
      testAgainst[charIdx] = "";
    }
  });
  attempt.forEach((charObj) => {
    const indexOfSimilar = testAgainst.indexOf(charObj.char);
    if (indexOfSimilar !== -1) {
      charObj.status = "cow";
      testAgainst[indexOfSimilar] = "";
    }
  });
  attempt.forEach((e) => {
    if (e.status === "") e.status = "missed";
  });
  let solved = false;
  if (attempt.every((e) => e.status === "bull")) solved = true;
  console.log({ attempt, solved });
  return { attempt, solved };
};

// checkWord([
//   { char: "L", status: "" },
//   { char: "E", status: "" },
//   { char: "N", status: "" },
//   { char: "W", status: "" },
//   { char: "L", status: "" },
// ]);
