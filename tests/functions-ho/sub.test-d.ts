import { expectType } from "tsd";

import { type Unit } from "#uom-types";
import { sub } from "#uom-types/functions/higher-order";

declare const a: Unit<{ a: 1 }>;
declare const b: Unit<{ b: 1 }>;

expectType<Unit<{ a: 1 }>>(sub(a)(a));
expectType<Unit<{ b: 1 }>>(sub(b)(b));

// @ts-expect-error - Should not be able to subtract different types.
sub(a)(b);

// @ts-expect-error - Should not be able to subtract different types.
sub(b)(a);
