import { expectAssignable, expectType } from "tsd";

import {
  type AbstractUnit,
  type UnitClass,
  type Unit,
  type UnitMeta,
  type DivideUnit,
} from "#uom-types";

type TestUnitClass1 = UnitClass<{ a: 1; b: 2 }>;
type TestUnitClass2 = UnitClass<{ a: -2; b: 2 }>;
type TestUnitClass3 = UnitClass<{ a: 3 }>;

type TestUnit1 = Unit<TestUnitClass1, UnitMeta<{}>>;
type TestUnit2 = Unit<TestUnitClass2, UnitMeta<{}>>;
type TestUnit3 = Unit<TestUnitClass3, UnitMeta<{}>>;

expectType<TestUnit3>(0 as DivideUnit<TestUnit1, TestUnit2>);

type TestAbstractUnit1 = AbstractUnit<TestUnitClass1>;
type TestAbstractUnit2 = AbstractUnit<TestUnitClass2>;
type TestAbstractUnit3 = AbstractUnit<TestUnitClass3>;

expectAssignable<TestAbstractUnit1>(0 as TestUnit1);

expectType<TestAbstractUnit3>(
  0 as DivideUnit<TestAbstractUnit1, TestAbstractUnit2>,
);
