import { expectType } from "tsd";

import { type Unit } from "#uom-types";
import { lt } from "#uom-types/functions/higher-order";

declare const a: Unit<{ a: 1 }>;

expectType<boolean>(lt(a)(a));

declare const b: Unit<{ a: 2 }>;

// @ts-expect-error - Should not be able to compare different types.
lt(a)(b);

// @ts-expect-error - Should not be able to compare different types.
lt(b)(a);
