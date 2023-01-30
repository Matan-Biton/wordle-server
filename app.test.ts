import { app } from "./app";
import supertest from "supertest";
import { it } from "mocha";
import { wordsArray } from "./words";
import { assert } from "chai";

describe("GET /", () => {
    it("should return status code 200", async () => {
      const response = await supertest(app).get("/");
      assert.equal(response.statusCode, 200);
    });
    it("should return a random positive integer", async () => {
      const response = await supertest(app).get("/");
      assert.match(response.body, /^[0-9]+$/);
    });
    it("should be less than wordsArray length", async () => {
      const response = await supertest(app).get("/");
    assert.isBelow(Number(response.body), wordsArray.length);
  });
});
