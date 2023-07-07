import test from "ava";
import { type Unit } from "uom-types";
import { add } from "uom-types/functions/higher-order";

test("numbers", (t) => {
  t.is(add(1)(2), 3);
  t.is(add(4)(2), 6);
  t.is(add(1)(-2), -1);
  t.is(add(-1)(-2), -3);
});

test("units", (t) => {
  type TestUnit = Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;

  const a = 3 as TestUnit;
  const b = 2 as TestUnit;
  const expected = 5 as TestUnit;

  const actual = add(a)(b);

  t.is(actual, expected);
});
