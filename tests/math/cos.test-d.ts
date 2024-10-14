import { expectType } from "tsd";

import { cos } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(cos(a));

// @ts-expect-error -- Invalid arg.
cos(Math.PI);
