import { expectType } from "tsd";

import type { Unit } from "#uom-types";
import { pow } from "#uom-types/math";

declare const a: Unit<{ a: 2 }>;

expectType<Unit<{ a: -2 }>>(pow(a, -1));
expectType<Unit<{}>>(pow(a, 0));
expectType<Unit<{ a: 1 }>>(pow(a, 0.5));
expectType<Unit<{ a: 2 }>>(pow(a, 1));
expectType<Unit<{ a: 4 }>>(pow(a, 2));
expectType<Unit<{ a: 6 }>>(pow(a, 3));
