import { expectType } from "tsd";

import { type Radian, type Unitless, acosh } from "../index.ts";

declare const a: Unitless;

expectType<Radian>(acosh(a));

// @ts-expect-error -- Invalid arg.
acosh(Math.PI);
