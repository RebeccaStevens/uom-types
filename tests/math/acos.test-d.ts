import { expectType } from "tsd";

import { type Radian, type Unitless, acos } from "../../src";

declare const a: Unitless;

expectType<Radian>(acos(a));

// @ts-expect-error -- Invalid arg.
acos(Math.PI);
