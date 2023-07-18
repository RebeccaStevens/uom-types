import test from "ava";

import { type Unit } from "#uom-types";
import { lte } from "#uom-types/functions";

test("number", (t) => {
  t.is(lte(4, 4), true);
  t.is(lte(4, 3), false);
  t.is(lte(3, 4), true);
});

test("unit", (t) => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  t.is(lte(a, a), true);
  t.is(lte(b, b), true);
  t.is(lte(a, b), false);
  t.is(lte(b, a), true);
});
