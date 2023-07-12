import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { add } from "#uom-types/functions/higher-order";

declare const a: UnitCore<{ a: 1 }>;
declare const b: UnitCore<{ b: 1 }>;

expectType<UnitCore<{ a: 1 }>>(add(a)(a));
expectType<UnitCore<{ b: 1 }>>(add(b)(b));

// @ts-expect-error - Should not be able to add different types.
add(a)(b);

// @ts-expect-error - Should not be able to add different types.
add(b)(a);
