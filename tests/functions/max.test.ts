import test from "ava";
import { type Unit } from "uom-types";
import { max } from "uom-types/functions";

test("number", (t) => {
  const list = [1, 3, 6, 4, -5, 2];

  t.is(max(list), 6);
});

test("unit", (t) => {
  type TestUnit = Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;
  const list = [1, 3, 6, 4, -5, 2] as TestUnit[];

  t.is(max(list), 6 as TestUnit);
});
