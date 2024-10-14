import { expectType } from "tsd";

import { type Unit, sum } from "../../src";

declare const a: Array<Unit<{ a: 1 }>>;

expectType<Unit<{ a: 1 }>>(sum(a));
