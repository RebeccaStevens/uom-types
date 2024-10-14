import { expectType } from "tsd";

import { asinh } from "#uom-types/math";
import { type Radian, type Unitless } from "#uom-types/units";

declare const a: Unitless;

expectType<Radian>(asinh(a));

// @ts-expect-error -- Invalid arg.
asinh(Math.PI);
