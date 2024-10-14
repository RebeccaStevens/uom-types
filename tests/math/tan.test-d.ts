import { expectType } from "tsd";

import { tan } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(tan(a));

// @ts-expect-error -- Invalid arg.
tan(Math.PI);
