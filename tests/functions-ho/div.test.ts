import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { div } from "#uom-types/functions/higher-order";

test("numbers", () => {
  expect(div(2)(1)).equals(0.5);
  expect(div(2)(4)).equals(2);
  expect(div(-2)(1)).equals(-0.5);
  expect(div(-2)(-1)).equals(0.5);
});

test("unit by number", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 6 as TestUnit;
  const b = 3;
  const expected = 2 as TestUnit;

  const actual: typeof expected = div(b)(a);

  expect(actual).equals(expected);
});

test("number by unit", () => {
  const a = 6;
  const b = 3 as Unit<{ a: 1; b: -2; c: 3 }>;
  const expected = 2 as Unit<{
    a: -1;
    b: 2;
    c: -3;
  }>;

  const actual: typeof expected = div(b)(a);

  expect(actual).equals(expected);
});

test("unit by unit", () => {
  const a = 6 as Unit<{ a: 1; b: 2; c: 1 }>;
  const b = 2 as Unit<{ a: 3; b: 2; c: 3 }>;
  const expected = 3 as Unit<{ a: -2; c: -2 }>;

  const actual: typeof expected = div(b)(a);

  expect(actual).equals(expected);
});
