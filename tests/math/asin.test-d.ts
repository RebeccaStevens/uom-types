import { expectType } from "tsd";

import { asin } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

declare const a: Unitless;

expectType<Radian>(asin(a));

// @ts-expect-error -- Invalid arg.
asin(Math.PI);
