import test from "ava";

import { type UnitCore } from "#uom-types";
import { pow } from "#uom-types/functions";

test("numbers", (t) => {
  t.is(pow(4, -1), 0.25);
  t.is(pow(4, 0), 1);
  t.is(pow(4, 0.5), 2);
  t.is(pow(4, 1), 4);
  t.is(pow(4, 2), 16);
  t.is(pow(4, 3), 64);
  t.is(pow(4, 5), 1024);
});

test("unit by number", (t) => {
  const a = 4 as UnitCore<{ a: -2; b: 2 }>;

  t.is(pow(a, -1), 0.25 as UnitCore<{ a: 2; b: -2 }>);
  t.is(pow(a, 0), 1 as UnitCore<{}>);
  t.is(pow(a, 0.5), 2 as UnitCore<{ a: -1; b: 1 }>);
  t.is(pow(a, 1), 4 as UnitCore<{ a: -2; b: 2 }>);
  t.is(pow(a, 2), 16 as UnitCore<{ a: -4; b: 4 }>);
  t.is(pow(a, 3), 64 as UnitCore<{ a: -6; b: 6 }>);
});
