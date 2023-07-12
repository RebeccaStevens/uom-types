import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { pow } from "#uom-types/functions";

declare const a: UnitCore<{ a: 2 }>;

expectType<UnitCore<{ a: -2 }>>(pow(a, -1));
expectType<UnitCore<{}>>(pow(a, 0));
expectType<UnitCore<{ a: 1 }>>(pow(a, 0.5));
expectType<UnitCore<{ a: 2 }>>(pow(a, 1));
expectType<UnitCore<{ a: 4 }>>(pow(a, 2));
expectType<UnitCore<{ a: 6 }>>(pow(a, 3));
