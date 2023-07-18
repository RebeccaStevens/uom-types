import test from "ava";

import { type UnitCore } from "#uom-types";
import { gt } from "#uom-types/functions/higher-order";

test("number", (t) => {
  t.is(gt(4)(4), false);
  t.is(gt(3)(4), true);
  t.is(gt(4)(3), false);
});

test("unit", (t) => {
  const a = 4 as UnitCore<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as UnitCore<{ a: 1; b: -2; c: 2 }>;

  t.is(gt(a)(a), false);
  t.is(gt(b)(b), false);
  t.is(gt(b)(a), true);
  t.is(gt(a)(b), false);
});