import { expectType } from "tsd";

import { type UnitCore } from "#uom-types";
import { sub } from "#uom-types/functions/higher-order";

declare const a: UnitCore<{ a: 1 }>;
declare const b: UnitCore<{ b: 1 }>;

expectType<UnitCore<{ a: 1 }>>(sub(a)(a));
expectType<UnitCore<{ b: 1 }>>(sub(b)(b));

// @ts-expect-error - Should not be able to subtract different types.
sub(a)(b);

// @ts-expect-error - Should not be able to subtract different types.
sub(b)(a);
