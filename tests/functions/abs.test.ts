import test from "ava";

import { type UnitCore } from "#uom-types";
import { abs } from "#uom-types/functions";

test("number", (t) => {
  t.is(abs(4), 4);
  t.is(abs(-4), 4);
});

test("unit", (t) => {
  const a = -4 as UnitCore<{ a: 1; b: -2; c: 2 }>;

  t.is(abs(a), 4 as UnitCore<{ a: 1; b: -2; c: 2 }>);
});
