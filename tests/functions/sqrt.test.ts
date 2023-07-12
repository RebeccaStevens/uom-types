import test from "ava";

import { type UnitCore } from "#uom-types";
import { sqrt } from "#uom-types/functions";

test("number", (t) => {
  t.is(sqrt(4), 2);
});

test("unit", (t) => {
  const a = 4 as UnitCore<{ a: -2; b: 4 }>;

  t.is(sqrt(a), 2 as UnitCore<{ a: -1; b: 2 }>);
});
