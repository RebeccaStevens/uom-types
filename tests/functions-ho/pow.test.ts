import test from "ava";

import { type UnitCore } from "#uom-types";
import { pow } from "#uom-types/functions/higher-order";

test("numbers", (t) => {
  t.is(pow(-1)(4), 0.25);
  t.is(pow(0)(4), 1);
  t.is(pow(0.5)(4), 2);
  t.is(pow(1)(4), 4);
  t.is(pow(2)(4), 16);
  t.is(pow(3)(4), 64);
  t.is(pow(5)(4), 1024);
});

test("unit by number", (t) => {
  const a = 4 as UnitCore<{ a: -2; b: 2 }>;

  t.is(pow(-1)(a), 0.25 as UnitCore<{ a: 2; b: -2 }>);
  t.is(pow(0)(a), 1 as UnitCore<{}>);
  t.is(pow(0.5)(a), 2 as UnitCore<{ a: -1; b: 1 }>);
  t.is(pow(1)(a), 4 as UnitCore<{ a: -2; b: 2 }>);
  t.is(pow(2)(a), 16 as UnitCore<{ a: -4; b: 4 }>);
  t.is(pow(3)(a), 64 as UnitCore<{ a: -6; b: 6 }>);
});
