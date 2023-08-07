import { expectType } from "tsd";

import { cos } from "#uom-types/functions";
import { type Unitless, type Radian } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(cos(a));

// @ts-expect-error -- Invalid arg.
cos(Math.PI);
