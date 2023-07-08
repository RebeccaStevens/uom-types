import { expectType } from "tsd";

import { type Unit } from "#uom-types";
import { sum } from "#uom-types/functions";

declare const a: Array<Unit<{ a: 1 }>>;

expectType<Unit<{ a: 1 }>>(sum(a));
