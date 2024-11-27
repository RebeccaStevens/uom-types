import { type Equals, assert } from "tsafe";
import { describe, it } from "vitest";

import type { BaseUnitClass, UnitClass } from "../index.ts";

describe("base Units", () => {
  it("allows valid keys", () => {
    assert<Equals<UnitClass<{}>, BaseUnitClass<{}>>>();
    assert<Equals<UnitClass<{ Second: 1 }>, BaseUnitClass<{ Second: 1 }>>>();
    assert<Equals<UnitClass<{ Meter: 1 }>, BaseUnitClass<{ Meter: 1 }>>>();
    assert<Equals<UnitClass<{ Kilogram: 1 }>, BaseUnitClass<{ Kilogram: 1 }>>>();
    assert<Equals<UnitClass<{ Mole: 1 }>, BaseUnitClass<{ Mole: 1 }>>>();
    assert<Equals<UnitClass<{ Ampere: 1 }>, BaseUnitClass<{ Ampere: 1 }>>>();
    assert<Equals<UnitClass<{ Candela: 1 }>, BaseUnitClass<{ Candela: 1 }>>>();
    assert<Equals<UnitClass<{ Kelvin: 1 }>, BaseUnitClass<{ Kelvin: 1 }>>>();
    assert<Equals<UnitClass<{ Radian: 1 }>, BaseUnitClass<{ Radian: 1 }>>>();
  });

  it("doesn't allows invalid keys", () => {
    // @ts-expect-error -- Invalid unit.
    assert<BaseUnitClass<{ a: 1 }>>();

    // @ts-expect-error -- Invalid unit.
    assert<BaseUnitClass<{ second: 1 }>>();
  });
});
