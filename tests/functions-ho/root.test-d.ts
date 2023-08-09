import { expectType } from "tsd";

import { type Unit } from "#uom-types";
import { root } from "#uom-types/functions";

declare const a: Unit<{ a: 6 }>;

expectType<Unit<{ a: 6 }>>(root(a, 1));
expectType<Unit<{ a: 3 }>>(root(a, 2));
expectType<Unit<{ a: 2 }>>(root(a, 3));
