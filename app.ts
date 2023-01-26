import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { checkWord } from "./service";
import { wordsArray } from "./words";

const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.json(Math.floor(Math.random() * wordsArray.length));
});

app.get("/:word/:answerNum", (req, res) => {
  res.json(checkWord(req.params.word, wordsArray[Number(req.params.answerNum)]));
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
