import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { div } from "#uom-types/functions";

declare const a: UnitCore<{ a: 1 }>;

expectType<UnitCore<{}>>(div(a, a));

declare const b: UnitCore<{ a: 2 }>;

expectType<UnitCore<{ a: 1 }>>(div(b, a));
expectType<UnitCore<{ a: -1 }>>(div(a, b));
