import { expectType } from "tsd";

import { type Unit } from "#uom-types";
import { sqrt } from "#uom-types/functions";

declare const a: Unit<{ a: 2 }>;

expectType<Unit<{ a: 1 }>>(sqrt(a));
