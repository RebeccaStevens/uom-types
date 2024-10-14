import { expectType } from "tsd";

import { type Unit, modSafe } from "../../../src";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: 1 }>>(modSafe(a)(a));

declare const b: Unit<{ a: 2 }>;

// @ts-expect-error - Should not be able to mod different types.
modSafe(a)(b);

// @ts-expect-error - Should not be able to mod different types.
modSafe(b)(a);
