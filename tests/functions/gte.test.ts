import test from "ava";

import { type UnitCore } from "#uom-types";
import { gte } from "#uom-types/functions";

test("number", (t) => {
  t.is(gte(4, 4), true);
  t.is(gte(4, 3), true);
  t.is(gte(3, 4), false);
});

test("unit", (t) => {
  const a = 4 as UnitCore<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as UnitCore<{ a: 1; b: -2; c: 2 }>;

  t.is(gte(a, a), true);
  t.is(gte(b, b), true);
  t.is(gte(a, b), true);
  t.is(gte(b, a), false);
});