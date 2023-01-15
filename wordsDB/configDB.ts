import { Pool } from "pg";

export const wordsDB = new Pool({
  user: "postgres",
  password: "matan",
  host: "localhost",
  port: 5432,
  database: "wordle",
});