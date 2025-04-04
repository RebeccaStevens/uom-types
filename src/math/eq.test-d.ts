import { expectType } from "tsd";

import { type Unit, eq } from "../index.ts";

declare const a: Unit<{ a: 1 }>;

expectType<boolean>(eq(a, a));

declare const b: Unit<{ a: 2 }>;

// @ts-expect-error - Should not be able to compare different types.
eq(a, b);

// @ts-expect-error - Should not be able to compare different types.
eq(b, a);
