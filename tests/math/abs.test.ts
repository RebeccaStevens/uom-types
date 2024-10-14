import { expect, it } from "vitest";

import type { Unit } from "#uom-types";
import { abs } from "#uom-types/math";

it("number", () => {
  expect(abs(4)).equals(4);
  expect(abs(-4)).equals(4);
});

it("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 2 }>;
  const expected = 4 as TestUnit;
  const actual: typeof expected = abs(-4 as TestUnit);

  expect(actual).equals(expected);
});
