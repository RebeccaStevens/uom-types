import { expectType } from "tsd";

import { type Radian, type Unitless, atanh } from "../../src";

declare const a: Unitless;

expectType<Radian>(atanh(a));

// @ts-expect-error -- Invalid arg.
atanh(Math.PI);