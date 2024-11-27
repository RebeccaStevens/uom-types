import { expectType } from "tsd";

import { type Radian, type Unitless, sinh } from "../../src/index.ts";

declare const a: Radian;

expectType<Unitless>(sinh(a));

// @ts-expect-error -- Invalid arg.
sinh(Math.PI);
