import { expectType } from "tsd";

import { type Unit } from "#uom-types";
import { root } from "#uom-types/math";

declare const a: Unit<{ a: 6 }>;

expectType<Unit<{ a: 6 }>>(root(1)(a));
expectType<Unit<{ a: 3 }>>(root(2)(a));
expectType<Unit<{ a: 2 }>>(root(3)(a));
