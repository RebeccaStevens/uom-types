import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { gt } from "#uom-types/functions";

declare const a: UnitCore<{ a: 1 }>;

expectType<boolean>(gt(a, a));

declare const b: UnitCore<{ a: 2 }>;

// @ts-expect-error - Should not be able to compare different types.
gt(a, b);

// @ts-expect-error - Should not be able to compare different types.
gt(b, a);
