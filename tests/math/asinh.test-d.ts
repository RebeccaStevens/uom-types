import { expectType } from "tsd";

import { type Radian, type Unitless, asinh } from "../../src/index.ts";

declare const a: Unitless;

expectType<Radian>(asinh(a));

// @ts-expect-error -- Invalid arg.
asinh(Math.PI);
