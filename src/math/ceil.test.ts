import { expect, it } from "vitest";

import { type Unit, ceil } from "../index.ts";

it("number", () => {
  expect(ceil(4.123)).equals(5);
  expect(ceil(-4.123)).equals(-4);
});

it("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 2 }>;
  const expected = 5 as TestUnit;
  const actual: typeof expected = ceil(4.123 as TestUnit);

  expect(actual).equals(expected);
});
