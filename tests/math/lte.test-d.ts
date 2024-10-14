import { expectType } from "tsd";

import type { Unit } from "#uom-types";
import { lte } from "#uom-types/math";

declare const a: Unit<{ a: 1 }>;

expectType<boolean>(lte(a, a));

declare const b: Unit<{ a: 2 }>;

// @ts-expect-error - Should not be able to compare different types.
lte(a, b);

// @ts-expect-error - Should not be able to compare different types.
lte(b, a);
