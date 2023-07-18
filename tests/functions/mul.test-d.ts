import { expectType } from "tsd";

import { type Unit } from "#uom-types";
import { mul } from "#uom-types/functions";

declare const a: Unit<{ a: 1 }>;
declare const b: Unit<{ b: 1 }>;

expectType<Unit<{ a: 2 }>>(mul(a, a));
expectType<Unit<{ b: 2 }>>(mul(b, b));
expectType<Unit<{ a: 1; b: 1 }>>(mul(a, b));
expectType<Unit<{ a: 1; b: 1 }>>(mul(b, a));
