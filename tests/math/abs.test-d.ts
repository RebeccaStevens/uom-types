import { expectType } from "tsd";

import type { Unit } from "#uom-types";
import { abs } from "#uom-types/math";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: 1 }>>(abs(a));
