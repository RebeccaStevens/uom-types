import { expectType } from "tsd";

import { type Unit, ceil } from "../../src";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: 1 }>>(ceil(a));