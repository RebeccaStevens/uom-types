import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { inverse } from "#uom-types/functions";

declare const a: UnitCore<{ a: 1 }>;

expectType<UnitCore<{ a: -1 }>>(inverse(a));
expectType<UnitCore<{ a: 1 }>>(inverse(inverse(a)));
