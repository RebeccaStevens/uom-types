// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { Newton, Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type MomentumUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Momentum = AbstractUnitFrom<MomentumUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MomentumUnit<M extends UnitSubvalues> = MomentumUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MomentumUnitFrom<M extends UnknownUnitMeta> = UnitFrom<MomentumUnitClass, M>;

/**
 * One newton second corresponds to a one newton of force applied for one second.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅s`
 */
export type NewtonSecond = MomentumUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("NewtonSecond", () => {
    it("is newtons by seconds", () => {
      assert<Equals<NewtonSecond, Multiply<Newton, Second>>>();
    });
  });
}
