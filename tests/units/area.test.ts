import { expect, test } from "vitest";

import { add, mul } from "#uom-types/functions";
import { add as addHo, mul as mulHo } from "#uom-types/functions/higher-order";
import {
  type Area,
  type SquareMetre,
  type CubicMetre,
  type Metre,
  type Centi,
  type Milli,
  type VolumeUnit,
  type Length,
} from "#uom-types/units";

test("unit by number", () => {
  const a = 3 as SquareMetre;
  const b = 2;
  const expected = 6 as SquareMetre;

  const actual = mul(a, b);

  expect(actual).equals(expected);
});

test("unit by unit", () => {
  const a = 3 as SquareMetre;
  const b = 2 as Metre;
  const expected = 6 as CubicMetre;

  const actual = mul(a, b);

  expect(actual).equals(expected);
});

test("unit by unit - different scalars", () => {
  const a = 3 as SquareMetre;
  const b = 2 as Centi<Metre>;
  const expected = 6 as VolumeUnit<{ scalar10: -2 }>;

  const actual = mul(a, b);

  expect(actual).equals(expected);
});

test("generics", () => {
  function fnAdd<T extends Area>(a: T, b: T) {
    return add(a, b);
  }

  function fnMul<A extends Area, L extends Length>(a: A, l: L) {
    return mul(a, l);
  }

  const a = 3 as SquareMetre;
  const b = 2 as SquareMetre;
  const expectedAdd1 = 5 as SquareMetre;

  const actualAdd1 = fnAdd(a, b);
  expect(actualAdd1).equals(expectedAdd1);

  const c = 2 as Metre;
  const expectedMul1 = 6 as CubicMetre;

  const actualMul1 = fnMul(a, c);
  expect(actualMul1).equals(expectedMul1);

  const d = 2 as Milli<SquareMetre>;
  const e = 3 as Centi<Metre>;
  const expectedMul2 = 6 as VolumeUnit<{ scalar10: -5 }>;

  const actualMul2 = fnMul(d, e);
  expect(actualMul2).equals(expectedMul2);
});

test("generics - higher order", () => {
  function fnAdd<A extends Area>(a: A) {
    return addHo(a);
  }

  function fnMul<A extends Area>(a: A) {
    return mulHo(a);
  }

  const a = 3 as SquareMetre;
  const b = 2 as SquareMetre;
  const expectedAdd1 = 5 as SquareMetre;

  const actualAdd1 = fnAdd(a)(b);
  expect(actualAdd1).equals(expectedAdd1);

  const c = 2 as Metre;
  const expectedMul1 = 6 as CubicMetre;

  const actualMul1 = fnMul(a)(c);
  expect(actualMul1).equals(expectedMul1);

  const d = 3 as Centi<SquareMetre>;
  const e = 2 as Milli<Metre>;
  const expectedMul2 = 6 as VolumeUnit<{ scalar10: -5 }>;

  const actualMul2 = fnMul(d)(e);
  expect(actualMul2).equals(expectedMul2);
});
