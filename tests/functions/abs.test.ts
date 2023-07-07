import test from "ava";

import { type Unit } from "#uom-types";
import { abs } from "#uom-types/functions";

test("number", (t) => {
  t.is(abs(4), 4);
  t.is(abs(-4), 4);
});

test("unit", (t) => {
  const a = -4 as Unit<{ a: 1; b: -2; c: { exponent: 2; scale10: 2 } }>;

  t.is(abs(a), 4 as Unit<{ a: 1; b: -2; c: { exponent: 2; scale10: 2 } }>);
});
