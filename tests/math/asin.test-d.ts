import { expectType } from "tsd";

import { type Radian, type Unitless, asin } from "../../src/index.ts";

declare const a: Unitless;

expectType<Radian>(asin(a));

// @ts-expect-error -- Invalid arg.
asin(Math.PI);
