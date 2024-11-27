import { expectType } from "tsd";

import { type Unit, max } from "../index.ts";

declare const a: Array<Unit<{ a: 1 }>>;

expectType<Unit<{ a: 1 }>>(max(a));
