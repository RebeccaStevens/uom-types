import { expectType } from "tsd";

import { type Unit, div } from "../../index.ts";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{}>>(div(a)(a));

declare const b: Unit<{ a: 2 }>;

expectType<Unit<{ a: -1 }>>(div(b)(a));
expectType<Unit<{ a: 1 }>>(div(a)(b));
