import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { AbstractUnit, Unit, UnitClass, UnitConversionRate, UnitMeta } from "../../core.ts";

import type { Reciprocal } from "./reciprocal.ts";

describe("reciprocal", () => {
  it("reciprocals a unit", () => {
    assert<Equals<Reciprocal<Unit<{ a: 1 }, { b: 2 }>>, Unit<{ a: -1 }, { b: -2 }>>>();
    assert<Equals<Reciprocal<AbstractUnit<{ a: 1 }>>, AbstractUnit<{ a: -1 }>>>();
    assert<Equals<Reciprocal<UnitConversionRate<{ a: 1 }>>, UnitConversionRate<{ a: -1 }>>>();
  });
  assert<Equals<Reciprocal<UnitClass<{ a: 1; b: 2 }>>, UnitClass<{ a: -1; b: -2 }>>>();
  assert<Equals<Reciprocal<UnitMeta<{ a: 1; b: 2 }>>, UnitMeta<{ a: -1; b: -2 }>>>();
});
