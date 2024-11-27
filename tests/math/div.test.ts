import { expect, it } from "vitest";

import { type Unit, div } from "../../src/index.ts";

it("numbers", () => {
  expect(div(1, 2)).equals(0.5);
  expect(div(4, 2)).equals(2);
  expect(div(1, -2)).equals(-0.5);
  expect(div(-1, -2)).equals(0.5);
});

it("unit by number", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 6 as TestUnit;
  const b = 3;
  const expected = 2 as TestUnit;

  const actual: typeof expected = div(a, b);

  expect(actual).equals(expected);
});

it("number by unit", () => {
  const a = 6;
  const b = 3 as Unit<{ a: 1; b: -2; c: 3 }>;
  const expected = 2 as Unit<{
    a: -1;
    b: 2;
    c: -3;
  }>;

  const actual: typeof expected = div(a, b);

  expect(actual).equals(expected);
});

it("unit by unit", () => {
  const a = 6 as Unit<{ a: 1; b: 2; c: 1 }>;
  const b = 2 as Unit<{ a: 3; b: 2; c: 3 }>;
  const expected = 3 as Unit<{ a: -2; c: -2 }>;

  const actual: typeof expected = div(a, b);

  expect(actual).equals(expected);
});
