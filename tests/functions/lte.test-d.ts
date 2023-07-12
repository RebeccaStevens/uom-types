import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { lte } from "#uom-types/functions";

declare const a: UnitCore<{ a: 1 }>;

expectType<boolean>(lte(a, a));

declare const b: UnitCore<{ a: 2 }>;

// @ts-expect-error - Should not be able to compare different types.
lte(a, b);

// @ts-expect-error - Should not be able to compare different types.
lte(b, a);
