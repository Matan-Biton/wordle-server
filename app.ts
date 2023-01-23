import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { checkWord } from "./service";

const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.json('I am up!');
});

app.get("/:word", (req, res) => {
  res.json(checkWord(req.params.word));
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
