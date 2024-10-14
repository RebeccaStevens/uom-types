import { expectType } from "tsd";

import type { Unit } from "#uom-types";
import { max } from "#uom-types/math";

declare const a: Array<Unit<{ a: 1 }>>;

expectType<Unit<{ a: 1 }>>(max(a));
