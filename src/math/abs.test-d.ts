import { expectType } from "tsd";

import { type Unit, abs } from "../index.ts";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: 1 }>>(abs(a));
