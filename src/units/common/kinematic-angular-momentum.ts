// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide, Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { Joule, Radian, Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularMomentumUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -1;
  Radian: -1;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularMomentum = AbstractUnitFrom<AngularMomentumUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularMomentumUnit<M extends UnitSubvalues> = AngularMomentumUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularMomentumUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AngularMomentumUnitClass, M>;

/**
 * A unit of {@link AngularMomentum}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J⋅s/rad`
 */
export type JouleSecondPerRadian = AngularMomentumUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JouleSecondPerRadian", () => {
    it("is joules by seconds per radian", () => {
      assert<Equals<JouleSecondPerRadian, Divide<Multiply<Joule, Second>, Radian>>>();
    });
  });
}
