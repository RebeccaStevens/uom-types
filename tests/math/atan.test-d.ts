import { expectType } from "tsd";

import { atan } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

declare const a: Unitless;

expectType<Radian>(atan(a));

// @ts-expect-error -- Invalid arg.
atan(Math.PI);
