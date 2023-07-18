import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { ceil } from "#uom-types/functions";

declare const a: UnitCore<{ a: 1 }>;

expectType<UnitCore<{ a: 1 }>>(ceil(a));