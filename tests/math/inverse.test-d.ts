import { expectType } from "tsd";

import type { Unit } from "#uom-types";
import { inverse } from "#uom-types/math";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: -1 }>>(inverse(a));
expectType<Unit<{ a: 1 }>>(inverse(inverse(a)));
