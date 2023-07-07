import test from "ava";

import { type Unit } from "#uom-types";
import { modSafe } from "#uom-types/functions/higher-order";

test("numbers", (t) => {
  t.is(modSafe(3)(10), 1);
  t.is(modSafe(3)(11), 2);
  t.is(modSafe(3)(12), 0);
  t.is(modSafe(3)(-8), 1);
});

test("units", (t) => {
  type TestUnit = Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;

  const a = 10 as TestUnit;
  const b = 3 as TestUnit;
  const expected1 = 1 as TestUnit;

  const actual1 = modSafe(b)(a);

  t.is(actual1, expected1);

  const c = -10 as TestUnit;
  const expected2 = 2 as TestUnit;

  const actual2 = modSafe(b)(c);

  t.is(actual2, expected2);
});
