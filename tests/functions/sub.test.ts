import test from "ava";
import { type Unit } from "uom-types";
import { sub } from "uom-types/functions";

test("numbers", (t) => {
  t.is(sub(1, 2), -1);
  t.is(sub(4, 2), 2);
  t.is(sub(1, -2), 3);
  t.is(sub(-1, -2), 1);
});

test("units", (t) => {
  type TestUnit = Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;

  const a = 3 as TestUnit;
  const b = 2 as TestUnit;
  const expected = 1 as TestUnit;

  const actual = sub(a, b);

  t.is(actual, expected);
});
