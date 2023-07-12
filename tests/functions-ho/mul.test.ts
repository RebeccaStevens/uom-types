import test from "ava";

import { type UnitCore } from "#uom-types";
import { mul } from "#uom-types/functions/higher-order";

test("numbers", (t) => {
  t.is(mul(1)(2), 2);
  t.is(mul(4)(2), 8);
  t.is(mul(1)(-2), -2);
  t.is(mul(-1)(-2), 2);
});

test("unit by number", (t) => {
  type TestUnit = UnitCore<{ a: 1; b: -2; c: 3 }>;

  const a = 3 as TestUnit;
  const b = 2;
  const expected = 6 as TestUnit;

  const actual = mul(a)(b);

  t.is(actual, expected);
});

test("unit by unit", (t) => {
  const a = 3 as UnitCore<{ a: 1; b: 2; c: 1 }>;
  const b = 2 as UnitCore<{ a: 3; b: -2; c: 3 }>;
  const expected = 6 as UnitCore<{ a: 4; c: 4 }>;

  const actual = mul(a)(b);

  t.is(actual, expected);
});
