import test from "ava";

import { add, mul } from "#uom-types/functions";
import { add as addHo, mul as mulHo } from "#uom-types/functions/higher-order";
import {
  type Area,
  type SquareMeters,
  type CubicMeters,
  type Meters,
  type Centi,
  type Milli,
  type VolumeUnit,
  type Length,
} from "#uom-types/units";

test("unit by number", (t) => {
  const a = 3 as SquareMeters;
  const b = 2;
  const expected = 6 as SquareMeters;

  const actual = mul(a, b);

  t.is(actual, expected);
});

test("unit by unit", (t) => {
  const a = 3 as SquareMeters;
  const b = 2 as Meters;
  const expected = 6 as CubicMeters;

  const actual = mul(a, b);

  t.is(actual, expected);
});

test("unit by unit - different scalars", (t) => {
  const a = 3 as SquareMeters;
  const b = 2 as Centi<Meters>;
  const expected = 6 as VolumeUnit<{ scalar10: -2 }>;

  const actual = mul(a, b);

  t.is(actual, expected);
});

test("generics", (t) => {
  function fnAdd<T extends Area>(a: T, b: T) {
    return add(a, b);
  }

  function fnMul<A extends Area, L extends Length>(a: A, l: L) {
    return mul(a, l);
  }

  const a = 3 as SquareMeters;
  const b = 2 as SquareMeters;
  const expectedAdd1 = 5 as SquareMeters;

  const actualAdd1 = fnAdd(a, b);
  t.is(actualAdd1, expectedAdd1);

  const c = 2 as Meters;
  const expectedMul1 = 6 as CubicMeters;

  const actualMul1 = fnMul(a, c);
  t.is(actualMul1, expectedMul1);

  const d = 2 as Milli<SquareMeters>;
  const e = 3 as Centi<Meters>;
  const expectedMul2 = 6 as VolumeUnit<{ scalar10: -5 }>;

  const actualMul2 = fnMul(d, e);
  t.is(actualMul2, expectedMul2);
});

test("generics - higher order", (t) => {
  function fnAdd<A extends Area>(a: A) {
    return addHo(a);
  }

  function fnMul<A extends Area>(a: A) {
    return mulHo(a);
  }

  const a = 3 as SquareMeters;
  const b = 2 as SquareMeters;
  const expectedAdd1 = 5 as SquareMeters;

  const actualAdd1 = fnAdd(a)(b);
  t.is(actualAdd1, expectedAdd1);

  const c = 2 as Meters;
  const expectedMul1 = 6 as CubicMeters;

  const actualMul1 = fnMul(a)(c);
  t.is(actualMul1, expectedMul1);

  const d = 3 as Centi<SquareMeters>;
  const e = 2 as Milli<Meters>;
  const expectedMul2 = 6 as VolumeUnit<{ scalar10: -5 }>;

  const actualMul2 = fnMul(d)(e);
  t.is(actualMul2, expectedMul2);
});