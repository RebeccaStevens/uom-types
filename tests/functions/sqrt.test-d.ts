import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { sqrt } from "#uom-types/functions";

declare const a: UnitCore<{ a: 2 }>;

expectType<UnitCore<{ a: 1 }>>(sqrt(a));
