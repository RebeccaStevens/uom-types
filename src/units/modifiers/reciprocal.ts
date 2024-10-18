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
import type { Inverse, InverseUnitSubvalues } from "../../units-operations";

/**
 * Invert the {@link Unit}.
 *
 * @group Modifiers
 * @category General
 */
export type Reciprocal<
  T extends UnknownUnit | UnknownAbstractUnit | UnknownUnitConversionRate | UnknownUnitClass | UnknownUnitMeta,
> = T extends number
  ? Inverse<T>
  : T extends UnknownUnitClass
    ? UnitClass<InverseUnitSubvalues<T["__uom_types"]["value"]>>
    : T extends UnknownUnitMeta
      ? UnitMeta<InverseUnitSubvalues<T["__uom_types"]["value"]>>
      : never;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Reciprocal", () => {
    it("reciprocals a unit", () => {
      assert<Equals<Reciprocal<Unit<{ a: 1 }, { b: 2 }>>, Unit<{ a: -1 }, { b: -2 }>>>();
      assert<Equals<Reciprocal<AbstractUnit<{ a: 1 }>>, AbstractUnit<{ a: -1 }>>>();
      assert<Equals<Reciprocal<UnitConversionRate<{ a: 1 }>>, UnitConversionRate<{ a: -1 }>>>();
    });
    assert<Equals<Reciprocal<UnitClass<{ a: 1; b: 2 }>>, UnitClass<{ a: -1; b: -2 }>>>();
    assert<Equals<Reciprocal<UnitMeta<{ a: 1; b: 2 }>>, UnitMeta<{ a: -1; b: -2 }>>>();
  });
}
