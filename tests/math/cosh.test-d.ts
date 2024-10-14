import { expectType } from "tsd";

import { cosh } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(cosh(a));

// @ts-expect-error -- Invalid arg.
cosh(Math.PI);
