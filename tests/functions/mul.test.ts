import test from "ava";
import { type Unit } from "uom-types";
import { mul } from "uom-types/functions";

test("numbers", (t) => {
  t.is(mul(1, 2), 2);
  t.is(mul(4, 2), 8);
  t.is(mul(1, -2), -2);
  t.is(mul(-1, -2), 2);
});

test("unit by number", (t) => {
  type TestUnit = Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;

  const a = 3 as TestUnit;
  const b = 2;
  const expected = 6 as TestUnit;

  const actual = mul(a, b);

  t.is(actual, expected);
});

test("unit by unit", (t) => {
  const a = 3 as Unit<{ a: 1; b: 2; c: { exponent: 1; scale10: 3 } }>;
  const b = 2 as Unit<{ a: 3; b: -2; c: { exponent: 3; scale10: 2 } }>;
  const expected = 6 as Unit<{ a: 4; c: { exponent: 4; scale10: 5 } }>;

  const actual = mul(a, b);

  t.is(actual, expected);
});
