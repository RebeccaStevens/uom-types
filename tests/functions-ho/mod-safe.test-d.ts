import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { modSafe } from "#uom-types/functions/higher-order";

declare const a: UnitCore<{ a: 1 }>;

expectType<UnitCore<{ a: 1 }>>(modSafe(a)(a));

declare const b: UnitCore<{ a: 2 }>;

// @ts-expect-error - Should not be able to mod different types.
modSafe(a)(b);

// @ts-expect-error - Should not be able to mod different types.
modSafe(b)(a);
