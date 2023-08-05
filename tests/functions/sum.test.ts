import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { sum } from "#uom-types/functions";

test("number", () => {
  const list = [1, 3, 6, 4, -5, 2];

  expect(sum(list)).equals(11);
});

test("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;
  const list = [1, 3, 6, 4, -5, 2] as TestUnit[];
  const expected = 11 as TestUnit;

  const actual: typeof expected = sum(list);

  expect(actual).equals(expected);
});
