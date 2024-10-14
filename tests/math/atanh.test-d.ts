import { expectType } from "tsd";

import { atanh } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

declare const a: Unitless;

expectType<Radian>(atanh(a));

// @ts-expect-error -- Invalid arg.
atanh(Math.PI);
