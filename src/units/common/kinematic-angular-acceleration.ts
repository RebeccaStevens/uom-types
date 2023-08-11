// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Radian, type Second, type RadianPerSecond } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularAccelerationUnitClass = BaseUnitClass<{
  Radian: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularAcceleration =
  AbstractUnitFrom<AngularAccelerationUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularAccelerationUnit<M extends UnitSubvalues> =
  AngularAccelerationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularAccelerationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AngularAccelerationUnitClass,
  M
>;

/**
 * A unit of {@link AngularAcceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `rad/s²`
 */
export type RadianPerSecondSquared = AngularAccelerationUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("RadianPerSecondSquared", () => {
    it("is radians per squared second", () => {
      assert<Equals<RadianPerSecondSquared, Divide<Radian, Square<Second>>>>();
    });

    it("is radians per second per second", () => {
      assert<Equals<RadianPerSecondSquared, Divide<RadianPerSecond, Second>>>();
    });
  });
}
