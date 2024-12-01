import { expectType } from "tsd";

import { type Unit, floor } from "../index.ts";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: 1 }>>(floor(a));