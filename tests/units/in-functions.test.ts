import { expect, test } from "vitest";

import { add, mul } from "#uom-types/functions";
import { add as addHo, mul as mulHo } from "#uom-types/functions/higher-order";
import {
  type Cubic,
  type VolumeUnit,
  type Square,
  type AreaUnit,
  type Length,
  type Meter,
  type Centi,
  type Milli,
} from "#uom-types/units";

test("unit by number", () => {
  const a = 3 as Meter;
  const b = 2;
  const expected = 6 as Meter;

  const actual = mul(a, b);

  expect(actual).equals(expected);
});

test("unit by unit", () => {
  const a = 3 as Square<Meter>;
  const b = 2 as Meter;
  const expected = 6 as Cubic<Meter>;

  const actual = mul(a, b);

  expect(actual).equals(expected);
});

test("unit by unit - different scalars", () => {
  const a = 3 as Square<Meter>;
  const b = 2 as Centi<Meter>;
  const expected = 6 as VolumeUnit<{ scalar10: -2 }>;

  const actual = mul(a, b);

  expect(actual).equals(expected);
});

test("generics", () => {
  function fnAdd<T extends Length>(a: T, b: T) {
    return add(a, b);
  }

  function fnMul<A extends Length, B extends Length>(a: A, b: B) {
    return mul(a, b);
  }

  const a = 3 as Meter;
  const b = 2 as Meter;
  const expectedAdd1 = 5 as Meter;
  const expectedMul1 = 6 as Square<Meter>;

  const actualAdd1 = fnAdd(a, b);
  expect(actualAdd1).equals(expectedAdd1);
  const actualMul1 = fnMul(a, b);
  expect(actualMul1).equals(expectedMul1);

  const c = 3 as Centi<Meter>;
  const d = 2 as Milli<Meter>;
  const expectedMul2 = 6 as AreaUnit<{ scalar10: -5 }>;

  const actualMul2 = fnMul(c, d);
  expect(actualMul2).equals(expectedMul2);
});

test("generics - higher order", () => {
  function fnAdd<L extends Length>(a: L) {
    return addHo(a);
  }

  function fnMul<L extends Length>(a: L) {
    return mulHo(a);
  }

  const a = 3 as Meter;
  const b = 2 as Meter;
  const expectedAdd1 = 5 as Meter;
  const expectedMul1 = 6 as Square<Meter>;

  const actualAdd1 = fnAdd(a)(b);
  expect(actualAdd1).equals(expectedAdd1);
  const actualMul1 = fnMul(a)(b);
  expect(actualMul1).equals(expectedMul1);

  const c = 3 as Centi<Meter>;
  const d = 2 as Milli<Meter>;
  const expectedMul2 = 6 as AreaUnit<{ scalar10: -5 }>;

  const actualMul2 = fnMul(c)(d);
  expect(actualMul2).equals(expectedMul2);
});
