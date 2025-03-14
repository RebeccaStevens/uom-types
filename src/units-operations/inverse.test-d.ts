import { expectAssignable, expectType } from "tsd";

import type { AbstractUnitFrom, Inverse, UnitClass, UnitFrom } from "../index.ts";

type TestUnitClass = UnitClass<{ a: 1 }>;
type TestUnitClassInv = UnitClass<{ a: -1 }>;

type TestUnit = UnitFrom<TestUnitClass>;
type TestUnitInv = UnitFrom<TestUnitClassInv>;

expectType<TestUnitInv>(0 as Inverse<TestUnit>);

type TestAbstractUnit = AbstractUnitFrom<TestUnitClass>;
type TestAbstractUnitInv = AbstractUnitFrom<TestUnitClassInv>;

expectAssignable<TestAbstractUnit>(0 as TestUnit);
expectAssignable<TestAbstractUnitInv>(0 as Inverse<TestUnit>);

expectType<TestAbstractUnitInv>(0 as Inverse<TestAbstractUnit>);
expectType<TestAbstractUnit>(0 as Inverse<TestAbstractUnitInv>);
