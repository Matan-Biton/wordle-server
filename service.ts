import type { NextFunction, Request, Response } from "express";
import { wordsArray } from "./words";

export const checkWord = (attempt: string, answer: string) => {
  return attempt
    .split("")
    .map((char, idx) => (char === answer[idx] ? "b" : answer.includes(char) ? "c" : "m"))
    .map((status, idx) => ({ char: attempt[idx], status }));
};

export const validator = (req: Request, res: Response, next: NextFunction) => {
  if (!req.params.word.match(/^[A-Z]+$/)) throw new Error("only upper case English letters are allowed");
  if (req.params.word.length !== wordsArray[0].length) throw new Error(`your guess should include ${wordsArray[0].length} letters`);
  if (!req.params.answerNum.match(/^[0-9]+$/)) throw new Error("the word key should be an integer");
  if (Number(req.params.answerNum) >= wordsArray.length)
    throw new Error("the word key can not be bigger then the words array");
  next();
};
