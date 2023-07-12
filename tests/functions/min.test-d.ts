import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { min } from "#uom-types/functions";

declare const a: Array<UnitCore<{ a: 1 }>>;

expectType<UnitCore<{ a: 1 }>>(min(a));
