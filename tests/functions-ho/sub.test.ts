import test from "ava";

import { type Unit } from "#uom-types";
import { sub } from "#uom-types/functions/higher-order";

test("numbers", (t) => {
  t.is(sub(2)(1), -1);
  t.is(sub(2)(4), 2);
  t.is(sub(-2)(1), 3);
  t.is(sub(-2)(-1), 1);
});

test("units", (t) => {
  type TestUnit = Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;

  const a = 3 as TestUnit;
  const b = 2 as TestUnit;
  const expected = 1 as TestUnit;

  const actual = sub(b)(a);

  t.is(actual, expected);
});
