import test from "ava";

import { type Unit } from "#uom-types";
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
  const a = 4 as Unit<{ a: -2; b: { exponent: 2; magnitude10: 2 } }>;

  t.is(
    pow(a, -1),
    0.25 as Unit<{ a: 2; b: { exponent: -2; magnitude10: -2 } }>,
  );
  t.is(pow(a, 0), 1 as Unit<{}>);
  t.is(pow(a, 0.5), 2 as Unit<{ a: -1; b: { exponent: 1; magnitude10: 1 } }>);
  t.is(pow(a, 1), 4 as Unit<{ a: -2; b: { exponent: 2; magnitude10: 2 } }>);
  t.is(pow(a, 2), 16 as Unit<{ a: -4; b: { exponent: 4; magnitude10: 4 } }>);
  t.is(pow(a, 3), 64 as Unit<{ a: -6; b: { exponent: 6; magnitude10: 6 } }>);
});
