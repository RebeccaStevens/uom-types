import test from "ava";
import { type Unit } from "uom-types";
import { div } from "uom-types/functions/higher-order";

test("numbers", (t) => {
  t.is(div(2)(1), 0.5);
  t.is(div(2)(4), 2);
  t.is(div(-2)(1), -0.5);
  t.is(div(-2)(-1), 0.5);
});

test("unit by number", (t) => {
  type TestUnit = Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;

  const a = 6 as TestUnit;
  const b = 3;
  const expected = 2 as TestUnit;

  const actual = div(b)(a);

  t.is(actual, expected);
});

test("number by unit", (t) => {
  const a = 6;
  const b = 3 as Unit<{ a: 1; b: -2; c: { exponent: 3; scale10: 3 } }>;
  const expected = 2 as Unit<{ a: -1; b: 2; c: { exponent: -3; scale10: -3 } }>;

  const actual = div(b)(a);

  t.is(actual, expected);
});

test("unit by unit", (t) => {
  const a = 6 as Unit<{ a: 1; b: 2; c: { exponent: 1; scale10: 3 } }>;
  const b = 2 as Unit<{ a: 3; b: 2; c: { exponent: 3; scale10: 2 } }>;
  const expected = 3 as Unit<{ a: -2; c: { exponent: -2; scale10: 1 } }>;

  const actual = div(b)(a);

  t.is(actual, expected);
});
