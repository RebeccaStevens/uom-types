import { expectType } from "tsd";

import { type Unit, gte } from "../index.ts";

declare const a: Unit<{ a: 1 }>;

expectType<boolean>(gte(a, a));

declare const b: Unit<{ a: 2 }>;

// @ts-expect-error - Should not be able to compare different types.
gte(a, b);

// @ts-expect-error - Should not be able to compare different types.
gte(b, a);
