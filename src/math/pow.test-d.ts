import { expectType } from "tsd";

import { type Unit, type Unitless, pow } from "../index.ts";

declare const a: Unit<{ a: 2 }>;

expectType<Unit<{ a: -2 }>>(pow(a, -1));
expectType<Unit<{}>>(pow(a, 0));
expectType<Unit<{ a: 1 }>>(pow(a, 0.5));
expectType<Unit<{ a: 2 }>>(pow(a, 1));
expectType<Unit<{ a: 4 }>>(pow(a, 2));
expectType<Unit<{ a: 6 }>>(pow(a, 3));
expectType<number>(pow(a, 1.2345));

declare const b: Unitless;

expectType<Unitless>(pow(b, 1.2345));
expectType<Unitless>(pow(b, b));

expectType<number>(pow(2, 3));
