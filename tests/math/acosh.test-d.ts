import { expectType } from "tsd";

import { type Radian, type Unitless, acosh } from "../../src";

declare const a: Unitless;

expectType<Radian>(acosh(a));

// @ts-expect-error -- Invalid arg.
acosh(Math.PI);
