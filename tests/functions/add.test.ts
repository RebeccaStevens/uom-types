import test from "ava";

import { type UnitCore } from "#uom-types";
import { add } from "#uom-types/functions";

test("numbers", (t) => {
  t.is(add(1, 2), 3);
  t.is(add(4, 2), 6);
  t.is(add(1, -2), -1);
  t.is(add(-1, -2), -3);
});

test("units", (t) => {
  type TestUnit = UnitCore<{ a: 1; b: -2; c: 3 }>;

  const a = 3 as TestUnit;
  const b = 2 as TestUnit;
  const expected = 5 as TestUnit;

  const actual = add(a, b);

  t.is(actual, expected);
});