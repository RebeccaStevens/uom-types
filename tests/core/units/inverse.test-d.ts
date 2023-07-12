import { expectAssignable, expectType } from "tsd";

import {
  type AbstractUnit,
  type UnitClass,
  type Unit,
  type UnitMeta,
  type InverseUnit,
} from "#uom-types";

type TestUnitClass = UnitClass<{ a: 1 }>;
type TestUnitClassInv = UnitClass<{ a: -1 }>;

type TestUnit = Unit<TestUnitClass, UnitMeta<{}>>;
type TestUnitInv = Unit<TestUnitClassInv, UnitMeta<{}>>;

expectType<TestUnitInv>(0 as InverseUnit<TestUnit>);

type TestAbstractUnit = AbstractUnit<TestUnitClass>;
type TestAbstractUnitInv = AbstractUnit<TestUnitClassInv>;

expectAssignable<TestAbstractUnit>(0 as TestUnit);
expectAssignable<TestAbstractUnitInv>(0 as InverseUnit<TestUnit>);

expectType<TestAbstractUnitInv>(0 as InverseUnit<TestAbstractUnit>);
expectType<TestAbstractUnit>(0 as InverseUnit<TestAbstractUnitInv>);
