import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { AbstractUnit, Unit, UnitClass, UnitConversionRate, UnitMeta } from "../../core.ts";

import type { Cubic, Square } from "./exponentials.ts";

describe("square", () => {
  it("squares a unit", () => {
    assert<Equals<Square<Unit<{ a: 1 }, { b: 2 }>>, Unit<{ a: 2 }, { b: 4 }>>>();
    assert<Equals<Square<AbstractUnit<{ a: 1 }>>, AbstractUnit<{ a: 2 }>>>();
    assert<Equals<Square<UnitConversionRate<{ a: 1 }>>, UnitConversionRate<{ a: 2 }>>>();
    assert<Equals<Square<UnitClass<{ a: 1; b: 2 }>>, UnitClass<{ a: 2; b: 4 }>>>();
    assert<Equals<Square<UnitMeta<{ a: 1; b: 2 }>>, UnitMeta<{ a: 2; b: 4 }>>>();
  });
});

describe("cubic", () => {
  it("cubes a unit", () => {
    assert<Equals<Cubic<Unit<{ a: 1 }, { b: 2 }>>, Unit<{ a: 3 }, { b: 6 }>>>();
    assert<Equals<Cubic<AbstractUnit<{ a: 1 }>>, AbstractUnit<{ a: 3 }>>>();
    assert<Equals<Cubic<UnitConversionRate<{ a: 1 }>>, UnitConversionRate<{ a: 3 }>>>();
  });
  assert<Equals<Cubic<UnitClass<{ a: 1; b: 2 }>>, UnitClass<{ a: 3; b: 6 }>>>();
  assert<Equals<Cubic<UnitMeta<{ a: 1; b: 2 }>>, UnitMeta<{ a: 3; b: 6 }>>>();
});
