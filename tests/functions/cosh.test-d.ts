import { expectType } from "tsd";

import { cosh } from "#uom-types/functions";
import { type Unitless, type Radian } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(cosh(a));

// @ts-expect-error -- Invalid arg.
cosh(Math.PI);
