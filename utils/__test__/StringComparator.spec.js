import assert from "node:assert";
import test from "node:test";
import { StringComparator } from "../StringComparator.js";

test("compareStrings", async (t) => {
  const comparator = new StringComparator();
  const firstString = "2321";
  const secondString = "some texto";
  const numericValue = 123;

  await t.test("if values passed are strings will not throw an error", () => {
    assert.doesNotThrow(() => {
      comparator.compareStrings(firstString, secondString);
    });
  });

  await t.test("if values passed are not a string will throw an error", () => {
    assert.throws(() => {
      comparator.compareStrings(firstString, numericValue);
    });
  });

  await t.test("if two equal strings are passed will return true", () => {
    const result = comparator.compareStrings(firstString, firstString);
    assert.strictEqual(result, true);
  });

  await t.test("if two different strings are passed will return false", () => {
    const result = comparator.compareStrings(firstString, secondString);
    assert.strictEqual(result, false);
  });
});

// https://nodejs.org/api/test.html#describeit-syntax
