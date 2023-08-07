import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { modSafe } from "#uom-types/functions";

test("numbers", () => {
  expect(modSafe(10, 3)).equals(1);
  expect(modSafe(11, 3)).equals(2);
  expect(modSafe(12, 3)).equals(0);
  expect(modSafe(-8, 3)).equals(1);
});

test("units", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 10 as TestUnit;
  const b = 3 as TestUnit;
  const expected1 = 1 as TestUnit;

  const actual1: TestUnit = modSafe(a, b);

  expect(actual1).equals(expected1);

  const c = -10 as TestUnit;
  const expected2 = 2 as TestUnit;

  const actual2: TestUnit = modSafe(c, b);

  expect(actual2).equals(expected2);
});
