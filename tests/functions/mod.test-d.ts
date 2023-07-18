import { expectType } from "tsd";

import { type Unit } from "#uom-types";
import { mod } from "#uom-types/functions";

declare const a: Unit<{ a: 1 }>;

expectType<Unit<{ a: 1 }>>(mod(a, a));

declare const b: Unit<{ a: 2 }>;

// @ts-expect-error - Should not be able to mod different types.
mod(a, b);

// @ts-expect-error - Should not be able to mod different types.
mod(b, a);
