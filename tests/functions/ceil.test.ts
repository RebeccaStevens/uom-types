import test from "ava";

import { type Unit } from "#uom-types";
import { ceil } from "#uom-types/functions";

test("number", (t) => {
  t.is(ceil(4.123), 5);
  t.is(ceil(-4.123), -4);
});

test("unit", (t) => {
  const a = 4.123 as Unit<{ a: 1; b: -2; c: { exponent: 2; scale10: 2 } }>;

  t.is(ceil(a), 5 as Unit<{ a: 1; b: -2; c: { exponent: 2; scale10: 2 } }>);
});
