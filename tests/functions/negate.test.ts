import test from "ava";

import { type Unit } from "#uom-types";
import { negate } from "#uom-types/functions";

test("number", (t) => {
  t.is(negate(4), -4);
  t.is(negate(-4), 4);
});

test("unit", (t) => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;

  t.is(negate(a), -4 as Unit<{ a: 1; b: -2; c: 2 }>);
});
