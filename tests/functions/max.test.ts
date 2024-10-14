import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { max } from "#uom-types/math";

test("number", () => {
  const list = [1, 3, 6, 4, -5, 2];

  expect(max(list)).equals(6);
});

test("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;
  const list = [1, 3, 6, 4, -5, 2] as TestUnit[];
  const expected = 6 as TestUnit;
  const actual: TestUnit = max(list);

  expect(actual).equals(expected);
});
