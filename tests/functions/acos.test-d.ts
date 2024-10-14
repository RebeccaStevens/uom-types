import { expectType } from "tsd";

import { acos } from "#uom-types/math";
import { type Radian, type Unitless } from "#uom-types/units";

declare const a: Unitless;

expectType<Radian>(acos(a));

// @ts-expect-error -- Invalid arg.
acos(Math.PI);
