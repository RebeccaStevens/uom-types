import { expectType } from "tsd";

import { type Unit, round } from "../../src";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: 1 }>>(round(a));
