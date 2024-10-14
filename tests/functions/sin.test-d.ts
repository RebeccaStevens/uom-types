import { expectType } from "tsd";

import { sin } from "#uom-types/math";
import { type Unitless, type Radian } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(sin(a));

// @ts-expect-error -- Invalid arg.
sin(Math.PI);
