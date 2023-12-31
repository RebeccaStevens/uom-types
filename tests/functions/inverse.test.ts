import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { inverse } from "#uom-types/functions";

test("number", () => {
  expect(inverse(4)).equals(0.25);
  expect(inverse(0.25)).equals(4);
});

test("unit", () => {
  type TestUnit = Unit<{ a: -1; b: 2; c: -2 }>;
  const expected = 0.25 as TestUnit;
  const actual: Unit<{ a: 1; b: -2; c: 2 }> = inverse(4 as TestUnit);

  expect(actual).equals(expected);
});
