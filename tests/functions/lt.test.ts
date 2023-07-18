import test from "ava";

import { type Unit } from "#uom-types";
import { lt } from "#uom-types/functions";

test("number", (t) => {
  t.is(lt(4, 4), false);
  t.is(lt(4, 3), false);
  t.is(lt(3, 4), true);
});

test("unit", (t) => {
  const a = 4 as Unit<{ a: 1; b: -2; c: 2 }>;
  const b = 2 as Unit<{ a: 1; b: -2; c: 2 }>;

  t.is(lt(a, a), false);
  t.is(lt(b, b), false);
  t.is(lt(a, b), false);
  t.is(lt(b, a), true);
});
