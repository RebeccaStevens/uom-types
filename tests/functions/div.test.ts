import test from "ava";

import { type UnitCore } from "#uom-types";
import { div } from "#uom-types/functions";

test("numbers", (t) => {
  t.is(div(1, 2), 0.5);
  t.is(div(4, 2), 2);
  t.is(div(1, -2), -0.5);
  t.is(div(-1, -2), 0.5);
});

test("unit by number", (t) => {
  type TestUnit = UnitCore<{ a: 1; b: -2; c: 3 }>;

  const a = 6 as TestUnit;
  const b = 3;
  const expected = 2 as TestUnit;

  const actual = div(a, b);

  t.is(actual, expected);
});

test("number by unit", (t) => {
  const a = 6;
  const b = 3 as UnitCore<{ a: 1; b: -2; c: 3 }>;
  const expected = 2 as UnitCore<{
    a: -1;
    b: 2;
    c: -3;
  }>;

  const actual = div(a, b);

  t.is(actual, expected);
});

test("unit by unit", (t) => {
  const a = 6 as UnitCore<{ a: 1; b: 2; c: 1 }>;
  const b = 2 as UnitCore<{ a: 3; b: 2; c: 3 }>;
  const expected = 3 as UnitCore<{ a: -2; c: -2 }>;

  const actual = div(a, b);

  t.is(actual, expected);
});
