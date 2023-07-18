import test from "ava";

import { type UnitCore } from "#uom-types";
import { floor } from "#uom-types/functions";

test("number", (t) => {
  t.is(floor(4.123), 4);
  t.is(floor(-4.123), -5);
});

test("unit", (t) => {
  const a = 4.123 as UnitCore<{ a: 1; b: -2; c: 2 }>;

  t.is(floor(a), 4 as UnitCore<{ a: 1; b: -2; c: 2 }>);
});