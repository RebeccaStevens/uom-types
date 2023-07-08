import test from "ava";

import { type Unit } from "#uom-types";
import { sqrt } from "#uom-types/functions";

test("number", (t) => {
  t.is(sqrt(4), 2);
});

test("unit", (t) => {
  const a = 4 as Unit<{ a: -2; b: { exponent: 2; scale10: 2 } }>;

  t.is(sqrt(a), 2 as Unit<{ a: -1; b: { exponent: 1; scale10: 1 } }>);
});
