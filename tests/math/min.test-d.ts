import { expectType } from "tsd";

import { type Unit, min } from "../../src";

declare const a: Array<Unit<{ a: 1 }>>;

expectType<Unit<{ a: 1 }>>(min(a));
