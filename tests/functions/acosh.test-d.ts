import { expectType } from "tsd";

import { acosh } from "#uom-types/functions";
import { type Radian, type Unitless } from "#uom-types/units";

declare const a: Unitless;

expectType<Radian>(acosh(a));

// @ts-expect-error -- Invalid arg.
acosh(Math.PI);
