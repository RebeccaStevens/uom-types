import { expect, test } from "vitest";

import { type Unit } from "#uom-types";
import { mod } from "#uom-types/functions/higher-order";

test("numbers", () => {
  expect(mod(3)(10)).equals(1);
  expect(mod(3)(11)).equals(2);
  expect(mod(3)(12)).equals(0);
  expect(mod(3)(-8)).equals(-2);
});

test("units", () => {
  type TestUnit = Unit<{ a: 1; b: -2; c: 3 }>;

  const a = 10 as TestUnit;
  const b = 3 as TestUnit;
  const expected1 = 1 as TestUnit;

  const actual1: typeof expected1 = mod(b)(a);

  expect(actual1).equals(expected1);

  const c = -10 as TestUnit;
  const expected2 = -1 as TestUnit;

  const actual2: typeof expected2 = mod(b)(c);

  expect(actual2).equals(expected2);
});
