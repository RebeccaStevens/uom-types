// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide, Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";
import type { Kilo, Square } from "../modifiers";

import type { Gram, Meter, Steradian } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type MomentOfInertiaUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Radian: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type MomentOfInertia = AbstractUnitFrom<MomentOfInertiaUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MomentOfInertiaUnit<M extends UnitSubvalues> = MomentOfInertiaUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MomentOfInertiaUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MomentOfInertiaUnitClass, M>;

/**
 * A unit of {@link MomentOfInertia}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg⋅m²/sr`
 */
export type KilogramSquareMeterPerSteradian = MomentOfInertiaUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("KilogramSquareMeterPerSteradian", () => {
    it("is kilograms by square meters per steradian", () => {
      assert<Equals<KilogramSquareMeterPerSteradian, Divide<Multiply<Kilo<Gram>, Square<Meter>>, Steradian>>>();
    });
  });
}
