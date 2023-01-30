import { checkWord, validator } from "./service";
import { describe, it } from "mocha";
import { assert } from "chai";
import { spy, SinonSpy } from "sinon";
import { wordsArray } from "./words";

describe("check word function test:", () => {
  it("should return []", () => {
    assert.typeOf(checkWord("", ""), "array");
  });
  it("should return bull", () => {
    assert.deepEqual(checkWord("a", "a"), [{ char: "a", status: "b" }]);
  });
  it("should return cow and missed", () => {
    assert.deepEqual(checkWord("ab", "ca"), [
      { char: "a", status: "c" },
      { char: "b", status: "m" },
    ]);
  });
});

describe("Validator Middleware", () => {
  const req = { params: { word: "", answerNum: "" } } as any;
  let res: any;
  let next: SinonSpy;

  beforeEach(() => {
    res = {};
    next = spy();
  });

  it("should throw an error if `req.params.word` contains non-uppercase English letters", () => {
    req.params.word = "words";
    const errorFunction = () => {
      validator(req, res, next);
    };

    assert.Throw(errorFunction, "only upper case English letters are allowed");
  });

  it("should throw an error if `req.params.word` length is different than `wordsArray[0].length`", () => {
    req.params.word = "LONGERWORD";
    const errorFunction = () => {
      validator(req, res, next);
    };

    assert.Throw(errorFunction, `your guess should include ${wordsArray[0].length} letters`);
  });

  it("should throw an error if `req.params.answerNum` is not a number", () => {
    req.params.word = "WORDS";
    req.params.answerNum = "not a number";
    const errorFunction = () => {
      validator(req, res, next);
    };

    assert.Throw(errorFunction, "the word key should be an integer");
  });

  it("should throw an error if `req.params.answerNum` is greater than or equal to `wordsArray.length`", () => {
    req.params.word = "WORDS";
    req.params.answerNum = wordsArray.length.toString();
    const errorFunction = () => {
      validator(req, res, next);
    };

    assert.Throw(errorFunction, "the word key can not be bigger then the words array");
  });

  it("should call `next` if all conditions are met", () => {
    req.params.word = "WORDS";
    req.params.answerNum = "0";
    validator(req, res, next);
    assert.isTrue(next.called)
  });
});
