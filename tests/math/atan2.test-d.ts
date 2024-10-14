import { expectType } from "tsd";

import { atan2 } from "#uom-types/math";
import type { Meter, Radian, Unitless } from "#uom-types/units";

declare const a: Unitless;

expectType<Radian>(atan2(a, a));

declare const b: Meter;

expectType<Radian>(atan2(b, b));

expectType<Radian>(atan2(1, 2));

// @ts-expect-error -- Invalid args.
atan2(a, b);
