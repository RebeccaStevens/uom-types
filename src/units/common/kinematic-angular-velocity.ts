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

import { type BaseUnitClass } from "../base-units";

import { type Radian, type Second, type RadianPerSecondSquared } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularVelocityUnitClass = BaseUnitClass<{
  Radian: 1;
  Second: -1;
}>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type AngularVelocity = AbstractUnitFrom<AngularVelocityUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularVelocityUnit<M extends UnitSubvalues> =
  AngularVelocityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularVelocityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AngularVelocityUnitClass,
  M
>;

/**
 * A unit of {@link AngularVelocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `rad/s`
 */
export type RadianPerSecond = AngularVelocityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<RadianPerSecond, Divide<Radian, Second>>>();

  assert<Equals<RadianPerSecond, Multiply<RadianPerSecondSquared, Second>>>();
}
