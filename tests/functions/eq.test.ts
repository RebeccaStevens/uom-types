import test from "ava";

import { type UnitCore } from "#uom-types";
import { eq } from "#uom-types/functions";

test("number", (t) => {
  t.is(eq(4, 4), true);
  t.is(eq(-4, -4), true);
  t.is(eq(-4, 4), false);
  t.is(eq(4, -4), false);
});

test("unit", (t) => {
  const a = 4 as UnitCore<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as UnitCore<{ a: 1; b: -2; c: 2 }>;

  t.is(eq(a, a), true);
  t.is(eq(b, b), true);
  t.is(eq(a, b), false);
  t.is(eq(b, a), false);
});