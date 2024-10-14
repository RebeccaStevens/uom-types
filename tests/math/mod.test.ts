import { expect, it } from "vitest";

import type { Unit } from "#uom-types";
import { mod } from "#uom-types/math";

it("numbers", () => {
  expect(mod(10, 3)).equals(1);
  expect(mod(11, 3)).equals(2);
  expect(mod(12, 3)).equals(0);
  expect(mod(-8, 3)).equals(-2);
});

it("units", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 10 as TestUnit;
  const b = 3 as TestUnit;
  const expected1 = 1 as TestUnit;

  const actual1: TestUnit = mod(a, b);

  expect(actual1).equals(expected1);

  const c = -10 as TestUnit;
  const expected2 = -1 as TestUnit;

  const actual2: TestUnit = mod(c, b);

  expect(actual2).equals(expected2);
});
