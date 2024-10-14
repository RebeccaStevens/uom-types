import { expectType } from "tsd";

import { type Unit, negate } from "../../src";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: 1 }>>(negate(a));
