import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { checkWord, validator } from "./service";
import { wordsArray } from "./words";

export const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.json(Math.floor(Math.random() * wordsArray.length));
});

app.get("/:word/:answerNum", validator, (req, res) => {
  res.send(checkWord(req.params.word, wordsArray[Number(req.params.answerNum)]));
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});