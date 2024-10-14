import { expect, it } from "vitest";

import { type Unit, add } from "../../src";

it("numbers", () => {
  expect(add(1, 2)).equals(3);
  expect(add(4, 2)).equals(6);
  expect(add(1, -2)).equals(-1);
  expect(add(-1, -2)).equals(-3);
});

it("units", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 3 as TestUnit;
  const b = 2 as TestUnit;
  const expected = 5 as TestUnit;

  const actual: typeof expected = add(a, b);

  expect(actual).equals(expected);
});
