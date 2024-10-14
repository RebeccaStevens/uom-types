import { expectType } from "tsd";

import { sinh } from "#uom-types/math";
import { type Unitless, type Radian } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(sinh(a));

// @ts-expect-error -- Invalid arg.
sinh(Math.PI);
