// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnit,
  type Inverse,
  type InverseUnitSubvalues,
  type Unit,
  type UnitClass,
  type UnitConversionRate,
  type UnitMeta,
  type UnknownAbstractUnit,
  type UnknownUnit,
  type UnknownUnitClass,
  type UnknownUnitConversionRate,
  type UnknownUnitMeta,
} from "#uom-types";

/**
 * Invert the {@link Unit}.
 *
 * @group Modifiers
 * @category General
 */
export type Reciprocal<
  T extends
    | UnknownUnit
    | UnknownAbstractUnit
    | UnknownUnitConversionRate
    | UnknownUnitClass
    | UnknownUnitMeta,
> = T extends number
  ? Inverse<T>
  : T extends UnknownUnitClass
  ? UnitClass<InverseUnitSubvalues<T["__uom_types__value"]>>
  : T extends UnknownUnitMeta
  ? UnitMeta<InverseUnitSubvalues<T["__uom_types__value"]>>
  : never;

/**
 * Invert the {@link UnitClass}.
 *
 * @deprecated Use {@link Reciprocal} instead.
 */
export type ReciprocalUnitClass<T extends UnknownUnitClass> = UnitClass<
  InverseUnitSubvalues<T["__uom_types__value"]>
>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Reciprocal", () => {
    it("reciprocals a unit", () => {
      assert<
        Equals<Reciprocal<Unit<{ a: 1 }, { b: 2 }>>, Unit<{ a: -1 }, { b: -2 }>>
      >();
      assert<
        Equals<Reciprocal<AbstractUnit<{ a: 1 }>>, AbstractUnit<{ a: -1 }>>
      >();
      assert<
        Equals<
          Reciprocal<UnitConversionRate<{ a: 1 }>>,
          UnitConversionRate<{ a: -1 }>
        >
      >();
    });
    assert<
      Equals<Reciprocal<UnitClass<{ a: 1; b: 2 }>>, UnitClass<{ a: -1; b: -2 }>>
    >();
    assert<
      Equals<Reciprocal<UnitMeta<{ a: 1; b: 2 }>>, UnitMeta<{ a: -1; b: -2 }>>
    >();
  });
}
