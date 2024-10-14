import { expectType } from "tsd";

import { type Radian, type Unitless, sin } from "../../src";

declare const a: Radian;

expectType<Unitless>(sin(a));

// @ts-expect-error -- Invalid arg.
sin(Math.PI);
