import test from "ava";
import { type Unit } from "uom-types";
import { pow } from "uom-types/functions/higher-order";

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
  const a = 4 as Unit<{ a: 1; b: -2; c: { exponent: 2; scale10: 2 } }>;

  t.is(
    pow(-1)(a),
    0.25 as Unit<{ a: -1; b: 2; c: { exponent: -2; scale10: -2 } }>,
  );
  t.is(pow(0)(a), 1 as Unit<{}>);
  t.is(pow(0.5)(a), 2 as Unit<{ a: 1; b: -2; c: { exponent: 2; scale10: 2 } }>);
  t.is(pow(1)(a), 4 as Unit<{ a: 1; b: -2; c: { exponent: 2; scale10: 2 } }>);
  t.is(pow(2)(a), 16 as Unit<{ a: 2; b: -4; c: { exponent: 4; scale10: 4 } }>);
  t.is(pow(3)(a), 64 as Unit<{ a: 3; b: -6; c: { exponent: 6; scale10: 6 } }>);
});
