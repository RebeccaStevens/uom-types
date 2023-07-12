import test from "ava";

import { add, mul } from "#uom-types/functions";
import { add as addHo, mul as mulHo } from "#uom-types/functions/higher-order";
import {
  type AreaUnit,
  type Length,
  type Meters,
  type SquareMeters,
  type Centi,
  type Milli,
} from "#uom-types/units";

test("unit by number", (t) => {
  const a = 3 as Meters;
  const b = 2;
  const expected = 6 as Meters;

  const actual = mul(a, b);

  t.is(actual, expected);
});

test("unit by unit", (t) => {
  const a = 3 as Meters;
  const b = 2 as Meters;
  const expected = 6 as SquareMeters;

  const actual = mul(a, b);

  t.is(actual, expected);
});

test("unit by unit - different scalars", (t) => {
  const a = 3 as Meters;
  const b = 2 as Centi<Meters>;
  const expected = 6 as AreaUnit<{ scalar10: -2 }>;

  const actual = mul(a, b);

  t.is(actual, expected);
});

test("generics", (t) => {
  function fnAdd<T extends Length>(a: T, b: T) {
    return add(a, b);
  }

  function fnMul<A extends Length, B extends Length>(a: A, b: B) {
    return mul(a, b);
  }

  const a = 3 as Meters;
  const b = 2 as Meters;
  const expectedAdd1 = 5 as Meters;
  const expectedMul1 = 6 as SquareMeters;

  const actualAdd1 = fnAdd(a, b);
  t.is(actualAdd1, expectedAdd1);
  const actualMul1 = fnMul(a, b);
  t.is(actualMul1, expectedMul1);

  const c = 3 as Centi<Meters>;
  const d = 2 as Milli<Meters>;
  const expectedMul2 = 6 as AreaUnit<{ scalar10: -5 }>;

  const actualMul2 = fnMul(c, d);
  t.is(actualMul2, expectedMul2);
});

test("generics - higher order", (t) => {
  function fnAdd<L extends Length>(a: L) {
    return addHo(a);
  }

  function fnMul<L extends Length>(a: L) {
    return mulHo(a);
  }

  const a = 3 as Meters;
  const b = 2 as Meters;
  const expectedAdd1 = 5 as Meters;
  const expectedMul1 = 6 as SquareMeters;

  const actualAdd1 = fnAdd(a)(b);
  t.is(actualAdd1, expectedAdd1);
  const actualMul1 = fnMul(a)(b);
  t.is(actualMul1, expectedMul1);

  const c = 3 as Centi<Meters>;
  const d = 2 as Milli<Meters>;
  const expectedMul2 = 6 as AreaUnit<{ scalar10: -5 }>;

  const actualMul2 = fnMul(c)(d);
  t.is(actualMul2, expectedMul2);
});
