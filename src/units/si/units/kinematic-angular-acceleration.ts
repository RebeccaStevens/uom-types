// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type Multiply,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Radian, type Second, type RadianPerSecond } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularAccelerationUnitClass = SiUnitClass<{
  Radian: 1;
  Second: -2;
}>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type AngularAcceleration =
  AbstractUnitFrom<AngularAccelerationUnitClass>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type AngularAccelerationUnit<M extends UnitSubvalues> =
  AngularAccelerationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
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
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<RadianPerSecondSquared, Divide<Radian, Multiply<Second, Second>>>
  >();

  assert<Equals<RadianPerSecondSquared, Divide<RadianPerSecond, Second>>>();
}
