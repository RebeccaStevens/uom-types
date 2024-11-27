import { expectType } from "tsd";

import { type Unit, sqrt } from "../../src/index.ts";

declare const a: Unit<{ a: 2 }>;

expectType<Unit<{ a: 1 }>>(sqrt(a));
