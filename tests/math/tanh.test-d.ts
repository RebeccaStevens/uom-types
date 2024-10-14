import { expectType } from "tsd";

import { tanh } from "#uom-types/math";
import type { Radian, Unitless } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(tanh(a));

// @ts-expect-error -- Invalid arg.
tanh(Math.PI);
