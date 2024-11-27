import { expectType } from "tsd";

import { type Unit, inverse } from "../index.ts";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: -1 }>>(inverse(a));
expectType<Unit<{ a: 1 }>>(inverse(inverse(a)));
