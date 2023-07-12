import test from "ava";

import { type UnitCore } from "#uom-types";
import { lt } from "#uom-types/functions/higher-order";

test("number", (t) => {
  t.is(lt(4)(4), false);
  t.is(lt(3)(4), false);
  t.is(lt(4)(3), true);
});

test("unit", (t) => {
  const a = 4 as UnitCore<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as UnitCore<{ a: 1; b: -2; c: 2 }>;

  t.is(lt(a)(a), false);
  t.is(lt(b)(b), false);
  t.is(lt(b)(a), false);
  t.is(lt(a)(b), true);
});
