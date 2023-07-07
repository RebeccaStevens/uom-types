import test from "ava";

import { type Unit } from "#uom-types";
import { modSafe } from "#uom-types/functions";

test("numbers", (t) => {
  t.is(modSafe(10, 3), 1);
  t.is(modSafe(11, 3), 2);
  t.is(modSafe(12, 3), 0);
  t.is(modSafe(-8, 3), 1);
});

test("units", (t) => {
  type TestUnit = Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;

  const a = 10 as TestUnit;
  const b = 3 as TestUnit;
  const expected1 = 1 as TestUnit;

  const actual1 = modSafe(a, b);

  t.is(actual1, expected1);

  const c = -10 as TestUnit;
  const expected2 = 2 as TestUnit;

  const actual2 = modSafe(c, b);

  t.is(actual2, expected2);
});
