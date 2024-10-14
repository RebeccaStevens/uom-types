import { expectType } from "tsd";

import { type Unit, add } from "../../../src";

declare const a: Unit<{ a: 1 }>;
declare const b: Unit<{ b: 1 }>;

expectType<Unit<{ a: 1 }>>(add(a)(a));
expectType<Unit<{ b: 1 }>>(add(b)(b));

// @ts-expect-error - Should not be able to add different types.
add(a)(b);

// @ts-expect-error - Should not be able to add different types.
add(b)(a);
