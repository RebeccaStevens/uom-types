import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { sub } from "#uom-types/functions";

test("numbers", () => {
  expect(sub(1, 2)).equals(-1);
  expect(sub(4, 2)).equals(2);
  expect(sub(1, -2)).equals(3);
  expect(sub(-1, -2)).equals(1);
});

test("units", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 3 as TestUnit;
  const b = 2 as TestUnit;
  const expected = 1 as TestUnit;

  const actual: typeof expected = sub(a, b);

  expect(actual).equals(expected);
});
