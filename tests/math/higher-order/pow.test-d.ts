import { expectType } from "tsd";

import { type Unit, pow } from "../../../src/index.ts";

declare const a: Unit<{ a: 2 }>;

expectType<Unit<{ a: -2 }>>(pow(-1)(a));
expectType<Unit<{}>>(pow(0)(a));
expectType<Unit<{ a: 1 }>>(pow(0.5)(a));
expectType<Unit<{ a: 2 }>>(pow(1)(a));
expectType<Unit<{ a: 4 }>>(pow(2)(a));
expectType<Unit<{ a: 6 }>>(pow(3)(a));
