import express from "express";
import cors from "cors";
import bodyParser, { json, urlencoded } from "body-parser";
import { checkWord, fetchRandomWord } from "./service";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.json(fetchRandomWord());
});

app.post("/check_word", (req, res) => {
  console.log(req.body);
  res.json(checkWord(req.body.attempt));
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
