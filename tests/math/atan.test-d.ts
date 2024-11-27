import { expectType } from "tsd";

import { type Radian, type Unitless, atan } from "../../src/index.ts";

declare const a: Unitless;

expectType<Radian>(atan(a));

// @ts-expect-error -- Invalid arg.
atan(Math.PI);
