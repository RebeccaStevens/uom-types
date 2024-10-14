import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { round } from "#uom-types/math";

test("number", () => {
  expect(round(4.123)).equals(4);
  expect(round(-4.123)).equals(-4);
  expect(round(4.987)).equals(5);
  expect(round(-4.987)).equals(-5);
});

test("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 2 }>;
  const a = 4.123 as TestUnit;

  const expected = 4 as TestUnit;
  const actual: typeof expected = round(a);
  expect(actual).equals(expected);
});
