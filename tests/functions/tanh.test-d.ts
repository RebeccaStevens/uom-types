import { expectType } from "tsd";

import { tanh } from "#uom-types/functions";
import { type Unitless, type Radian } from "#uom-types/units";

declare const a: Radian;

expectType<Unitless>(tanh(a));

// @ts-expect-error -- Invalid arg.
tanh(Math.PI);
