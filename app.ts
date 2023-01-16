import express from "express";
import cors from "cors";
import bodyParser, { json, urlencoded } from "body-parser";
import { checkWord } from "./service";

const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.json('I am up!');
});

app.post("/check_word", (req, res) => {
  res.json(checkWord(req.body));
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
