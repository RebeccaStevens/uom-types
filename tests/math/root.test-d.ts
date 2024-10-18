import { expectType } from "tsd";

import { type Unit, type Unitless, root } from "../../src";

declare const a: Unit<{ a: 6 }>;

expectType<Unit<{ a: -6 }>>(root(a, -1));
expectType<Unit<{}>>(root(a, 0));
expectType<Unit<{ a: 12 }>>(root(a, 0.5));
expectType<Unit<{ a: 6 }>>(root(a, 1));
expectType<Unit<{ a: 3 }>>(root(a, 2));
expectType<Unit<{ a: 2 }>>(root(a, 3));
expectType<number>(root(a, 1.2345));

declare const b: Unitless;

expectType<Unitless>(root(b, 1.2345));
expectType<Unitless>(root(b, b));

expectType<number>(root(2, 3));
