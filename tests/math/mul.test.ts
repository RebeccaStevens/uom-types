import { expect, it } from "vitest";

import { type Unit, mul } from "../../src";

it("numbers", () => {
  expect(mul(1, 2)).equals(2);
  expect(mul(4, 2)).equals(8);
  expect(mul(1, -2)).equals(-2);
  expect(mul(-1, -2)).equals(2);
});

it("unit by number", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 3 as TestUnit;
  const b = 2;
  const expected = 6 as TestUnit;

  const actual: typeof expected = mul(a, b);

  expect(actual).equals(expected);
});

it("unit by unit", () => {
  const a = 3 as Unit<{ a: 1; b: 2; c: 1 }>;
  const b = 2 as Unit<{ a: 3; b: -2; c: 3 }>;
  const expected = 6 as Unit<{ a: 4; c: 4 }>;

  const actual: typeof expected = mul(a, b);

  expect(actual).equals(expected);
});
