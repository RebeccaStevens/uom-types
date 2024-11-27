import { expectType } from "tsd";

import { type Meter, type Radian, type Unitless, atan2 } from "../../src/index.ts";

declare const a: Unitless;

expectType<Radian>(atan2(a, a));

declare const b: Meter;

expectType<Radian>(atan2(b, b));

expectType<Radian>(atan2(1, 2));

// @ts-expect-error -- Invalid args.
atan2(a, b);
