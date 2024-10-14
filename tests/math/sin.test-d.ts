import { expectType } from "tsd";

import { sin } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(sin(a));

// @ts-expect-error -- Invalid arg.
sin(Math.PI);
