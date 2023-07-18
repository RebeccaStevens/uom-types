import test from "ava";

import { type UnitCore } from "#uom-types";
import { sum } from "#uom-types/functions";

test("number", (t) => {
  const list = [1, 3, 6, 4, -5, 2];

  t.is(sum(list), 11);
});

test("unit", (t) => {
  type TestUnit = UnitCore<{ a: 1; b: -2; c: 3 }>;
  const list = [1, 3, 6, 4, -5, 2] as TestUnit[];

  t.is(sum(list), 11 as TestUnit);
});