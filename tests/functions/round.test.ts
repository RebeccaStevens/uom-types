import test from "ava";

import { type Unit } from "#uom-types";
import { round } from "#uom-types/functions";

test("number", (t) => {
  t.is(round(4.123), 4);
  t.is(round(-4.123), -4);
  t.is(round(4.987), 5);
  t.is(round(-4.987), -5);
});

test("unit", (t) => {
  const a = 4.123 as Unit<{ a: 1; b: -2; c: { exponent: 2; scale10: 2 } }>;

  t.is(round(a), 4 as Unit<{ a: 1; b: -2; c: { exponent: 2; scale10: 2 } }>);
});
