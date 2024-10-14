// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type {
  AbstractUnit,
  Unit,
  UnitClass,
  UnitConversionRate,
  UnitMeta,
  UnknownAbstractUnit,
  UnknownUnit,
  UnknownUnitClass,
  UnknownUnitConversionRate,
  UnknownUnitMeta,
} from "../../core";
import type { Pow, PowUnitSubvalues } from "../../units-operations";

/**
 * Put the given {@link Unit} to the power of 2.
 *
 * @group Modifiers
 * @category General
 * @see {@link Pow}
 * @see {@link Cubic}
 */
export type Square<
  T extends UnknownUnit | UnknownAbstractUnit | UnknownUnitConversionRate | UnknownUnitClass | UnknownUnitMeta,
> = T extends number
  ? Pow<T, 2>
  : T extends UnknownUnitClass
    ? UnitClass<PowUnitSubvalues<T["__uom_types__value"], 2>>
    : T extends UnknownUnitMeta
      ? UnitMeta<PowUnitSubvalues<T["__uom_types__value"], 2>>
      : never;

/**
 * Put the given {@link Unit} to the power of 3.
 *
 * @group Modifiers
 * @category General
 * @see {@link Pow}
 * @see {@link Square}
 */
export type Cubic<
  T extends UnknownUnit | UnknownAbstractUnit | UnknownUnitConversionRate | UnknownUnitClass | UnknownUnitMeta,
> = T extends number
  ? Pow<T, 3>
  : T extends UnknownUnitClass
    ? UnitClass<PowUnitSubvalues<T["__uom_types__value"], 3>>
    : T extends UnknownUnitMeta
      ? UnitMeta<PowUnitSubvalues<T["__uom_types__value"], 3>>
      : never;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Square", () => {
    it("squares a unit", () => {
      assert<Equals<Square<Unit<{ a: 1 }, { b: 2 }>>, Unit<{ a: 2 }, { b: 4 }>>>();
      assert<Equals<Square<AbstractUnit<{ a: 1 }>>, AbstractUnit<{ a: 2 }>>>();
      assert<Equals<Square<UnitConversionRate<{ a: 1 }>>, UnitConversionRate<{ a: 2 }>>>();
      assert<Equals<Square<UnitClass<{ a: 1; b: 2 }>>, UnitClass<{ a: 2; b: 4 }>>>();
      assert<Equals<Square<UnitMeta<{ a: 1; b: 2 }>>, UnitMeta<{ a: 2; b: 4 }>>>();
    });
  });

  describe("Cubic", () => {
    it("cubes a unit", () => {
      assert<Equals<Cubic<Unit<{ a: 1 }, { b: 2 }>>, Unit<{ a: 3 }, { b: 6 }>>>();
      assert<Equals<Cubic<AbstractUnit<{ a: 1 }>>, AbstractUnit<{ a: 3 }>>>();
      assert<Equals<Cubic<UnitConversionRate<{ a: 1 }>>, UnitConversionRate<{ a: 3 }>>>();
    });
    assert<Equals<Cubic<UnitClass<{ a: 1; b: 2 }>>, UnitClass<{ a: 3; b: 6 }>>>();
    assert<Equals<Cubic<UnitMeta<{ a: 1; b: 2 }>>, UnitMeta<{ a: 3; b: 6 }>>>();
  });
}
