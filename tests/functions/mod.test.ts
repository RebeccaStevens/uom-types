import test from "ava";
import { type Unit } from "uom-types";
import { mod } from "uom-types/functions";

test("numbers", (t) => {
  t.is(mod(10, 3), 1);
  t.is(mod(11, 3), 2);
  t.is(mod(12, 3), 0);
  t.is(mod(-8, 3), -2);
});

test("units", (t) => {
  type TestUnit = Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;

  const a = 10 as TestUnit;
  const b = 3 as TestUnit;
  const expected1 = 1 as TestUnit;

  const actual1 = mod(a, b);

  t.is(actual1, expected1);

  const c = -10 as TestUnit;
  const expected2 = -1 as TestUnit;

  const actual2 = mod(c, b);

  t.is(actual2, expected2);
});
