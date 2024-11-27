import { expectType } from "tsd";

import { type Radian, type Unitless, cosh } from "../index.ts";

declare const a: Radian;

expectType<Unitless>(cosh(a));

// @ts-expect-error -- Invalid arg.
cosh(Math.PI);
