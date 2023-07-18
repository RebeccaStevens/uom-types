import { expectAssignable, expectType } from "tsd";

import {
  type AbstractUnitFrom,
  type UnitClass,
  type UnitFrom,
  type UnitMeta,
  type MultiplyUnit,
} from "#uom-types";

type TestUnitClass1 = UnitClass<{ a: 1; b: -2 }>;
type TestUnitClass2 = UnitClass<{ a: 2; b: 2 }>;
type TestUnitClass3 = UnitClass<{ a: 3 }>;

type TestUnit1 = UnitFrom<TestUnitClass1, UnitMeta<{}>>;
type TestUnit2 = UnitFrom<TestUnitClass2, UnitMeta<{}>>;
type TestUnit3 = UnitFrom<TestUnitClass3, UnitMeta<{}>>;

expectType<TestUnit3>(0 as MultiplyUnit<TestUnit1, TestUnit2>);

type TestAbstractUnit1 = AbstractUnitFrom<TestUnitClass1>;
type TestAbstractUnit2 = AbstractUnitFrom<TestUnitClass2>;
type TestAbstractUnit3 = AbstractUnitFrom<TestUnitClass3>;

expectAssignable<TestAbstractUnit1>(0 as TestUnit1);

expectType<TestAbstractUnit3>(
  0 as MultiplyUnit<TestAbstractUnit1, TestAbstractUnit2>,
);
