import test from "ava";

import { type UnitCore } from "#uom-types";
import { inverse } from "#uom-types/functions";

test("number", (t) => {
  t.is(inverse(4), 0.25);
  t.is(inverse(0.25), 4);
});

test("unit", (t) => {
  const a = 4 as UnitCore<{ a: 1; b: -2; c: 2 }>;

  t.is(inverse(a), 0.25 as UnitCore<{ a: -1; b: 2; c: -2 }>);
});
