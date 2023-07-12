import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { mod } from "#uom-types/functions/higher-order";

declare const a: UnitCore<{ a: 1 }>;

expectType<UnitCore<{ a: 1 }>>(mod(a)(a));

declare const b: UnitCore<{ a: 2 }>;

// @ts-expect-error - Should not be able to mod different types.
mod(a)(b);

// @ts-expect-error - Should not be able to mod different types.
mod(b)(a);
