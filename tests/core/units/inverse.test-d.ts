import { expectAssignable, expectType } from "tsd";

import {
  type AbstractUnitFrom,
  type UnitClass,
  type UnitFrom,
  type UnitMeta,
  type InverseUnit,
} from "#uom-types";

type TestUnitClass = UnitClass<{ a: 1 }>;
type TestUnitClassInv = UnitClass<{ a: -1 }>;

type TestUnit = UnitFrom<TestUnitClass, UnitMeta<{}>>;
type TestUnitInv = UnitFrom<TestUnitClassInv, UnitMeta<{}>>;

expectType<TestUnitInv>(0 as InverseUnit<TestUnit>);

type TestAbstractUnit = AbstractUnitFrom<TestUnitClass>;
type TestAbstractUnitInv = AbstractUnitFrom<TestUnitClassInv>;

expectAssignable<TestAbstractUnit>(0 as TestUnit);
expectAssignable<TestAbstractUnitInv>(0 as InverseUnit<TestUnit>);

expectType<TestAbstractUnitInv>(0 as InverseUnit<TestAbstractUnit>);
expectType<TestAbstractUnit>(0 as InverseUnit<TestAbstractUnitInv>);
