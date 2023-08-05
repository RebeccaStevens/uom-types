import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { min } from "#uom-types/functions";

test("number", () => {
  const list = [1, 3, 6, 4, -5, 2];

  expect(min(list)).equals(-5);
});

test("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;
  const list = [1, 3, 6, 4, -5, 2] as TestUnit[];
  const expected = -5 as TestUnit;
  const actual: TestUnit = min(list);

  expect(actual).equals(expected);
});
