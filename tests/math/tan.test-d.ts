import { expectType } from "tsd";

import { type Radian, type Unitless, tan } from "../../src/index.ts";

declare const a: Radian;

expectType<Unitless>(tan(a));

// @ts-expect-error -- Invalid arg.
tan(Math.PI);
