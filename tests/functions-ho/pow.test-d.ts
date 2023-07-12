import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { pow } from "#uom-types/functions/higher-order";

declare const a: UnitCore<{ a: 2 }>;

expectType<UnitCore<{ a: -2 }>>(pow(-1)(a));
expectType<UnitCore<{}>>(pow(0)(a));
expectType<UnitCore<{ a: 1 }>>(pow(0.5)(a));
expectType<UnitCore<{ a: 2 }>>(pow(1)(a));
expectType<UnitCore<{ a: 4 }>>(pow(2)(a));
expectType<UnitCore<{ a: 6 }>>(pow(3)(a));
