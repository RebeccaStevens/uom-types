import { expectType } from "tsd";

import { type Unit } from "#uom-types";
import { round } from "#uom-types/functions";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: 1 }>>(round(a));
