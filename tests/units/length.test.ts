import { expect, test } from "vitest";

import { add, mul } from "#uom-types/functions";
import { add as addHo, mul as mulHo } from "#uom-types/functions/higher-order";
import {
  type Square,
  type AreaUnit,
  type Length,
  type Metre,
  type Centi,
  type Milli,
} from "#uom-types/units";

test("unit by number", () => {
  const a = 3 as Metre;
  const b = 2;
  const expected = 6 as Metre;

  const actual = mul(a, b);

  expect(actual).equals(expected);
});

test("unit by unit", () => {
  const a = 3 as Metre;
  const b = 2 as Metre;
  const expected = 6 as Square<Metre>;

  const actual = mul(a, b);

  expect(actual).equals(expected);
});

test("unit by unit - different scalars", () => {
  const a = 3 as Metre;
  const b = 2 as Centi<Metre>;
  const expected = 6 as AreaUnit<{ scalar10: -2 }>;

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

  const a = 3 as Metre;
  const b = 2 as Metre;
  const expectedAdd1 = 5 as Metre;
  const expectedMul1 = 6 as Square<Metre>;

  const actualAdd1 = fnAdd(a, b);
  expect(actualAdd1).equals(expectedAdd1);
  const actualMul1 = fnMul(a, b);
  expect(actualMul1).equals(expectedMul1);

  const c = 3 as Centi<Metre>;
  const d = 2 as Milli<Metre>;
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

  const a = 3 as Metre;
  const b = 2 as Metre;
  const expectedAdd1 = 5 as Metre;
  const expectedMul1 = 6 as Square<Metre>;

  const actualAdd1 = fnAdd(a)(b);
  expect(actualAdd1).equals(expectedAdd1);
  const actualMul1 = fnMul(a)(b);
  expect(actualMul1).equals(expectedMul1);

  const c = 3 as Centi<Metre>;
  const d = 2 as Milli<Metre>;
  const expectedMul2 = 6 as AreaUnit<{ scalar10: -5 }>;

  const actualMul2 = fnMul(c)(d);
  expect(actualMul2).equals(expectedMul2);
});
