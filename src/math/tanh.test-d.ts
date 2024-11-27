import { expectType } from "tsd";

import { type Radian, type Unitless, tanh } from "../index.ts";

declare const a: Radian;

expectType<Unitless>(tanh(a));

// @ts-expect-error -- Invalid arg.
tanh(Math.PI);
