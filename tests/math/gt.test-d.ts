import { expectType } from "tsd";

import { type Unit, gt } from "../../src/index.ts";

declare const a: Unit<{ a: 1 }>;

expectType<boolean>(gt(a, a));

declare const b: Unit<{ a: 2 }>;

// @ts-expect-error - Should not be able to compare different types.
gt(a, b);

// @ts-expect-error - Should not be able to compare different types.
gt(b, a);
