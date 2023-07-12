import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { mul } from "#uom-types/functions";

declare const a: UnitCore<{ a: 1 }>;
declare const b: UnitCore<{ b: 1 }>;

expectType<UnitCore<{ a: 2 }>>(mul(a, a));
expectType<UnitCore<{ b: 2 }>>(mul(b, b));
expectType<UnitCore<{ a: 1; b: 1 }>>(mul(a, b));
expectType<UnitCore<{ a: 1; b: 1 }>>(mul(b, a));
