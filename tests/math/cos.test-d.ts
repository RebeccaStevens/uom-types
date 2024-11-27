import { expectType } from "tsd";

import { type Radian, type Unitless, cos } from "../../src/index.ts";

declare const a: Radian;

expectType<Unitless>(cos(a));

// @ts-expect-error -- Invalid arg.
cos(Math.PI);
