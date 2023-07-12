import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { lt } from "#uom-types/functions/higher-order";

declare const a: UnitCore<{ a: 1 }>;

expectType<boolean>(lt(a)(a));

declare const b: UnitCore<{ a: 2 }>;

// @ts-expect-error - Should not be able to compare different types.
lt(a)(b);

// @ts-expect-error - Should not be able to compare different types.
lt(b)(a);
