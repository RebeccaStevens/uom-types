import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { ceil } from "#uom-types/functions";

test("number", () => {
  expect(ceil(4.123)).equals(5);
  expect(ceil(-4.123)).equals(-4);
});

test("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 2 }>;
  const expected = 5 as TestUnit;
  const actual: typeof expected = ceil(4.123 as TestUnit);

  expect(actual).equals(expected);
});
