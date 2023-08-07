import { expectType } from "tsd";

import { atan2 } from "#uom-types/functions";
import { type Metre, type Radian, type Unitless } from "#uom-types/units";

declare const a: Unitless;

expectType<Radian>(atan2(a, a));

declare const b: Metre;

expectType<Radian>(atan2(b, b));

expectType<Radian>(atan2(1, 2));

// @ts-expect-error -- Invalid args.
atan2(a, b);
