import { expect, it } from "vitest";

import type { Unit } from "#uom-types";
import { floor } from "#uom-types/math";

it("number", () => {
  expect(floor(4.123)).equals(4);
  expect(floor(-4.123)).equals(-5);
});

it("unit", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 2 }>;
  const expected = 4 as TestUnit;
  const actual: typeof expected = floor(4.123 as TestUnit);

  expect(actual).equals(expected);
});
