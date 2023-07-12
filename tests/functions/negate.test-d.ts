import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { negate } from "#uom-types/functions";

declare const a: UnitCore<{ a: 1 }>;

expectType<UnitCore<{ a: 1 }>>(negate(a));
