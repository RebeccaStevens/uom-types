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

import { type Metre, type Second, type MetrePerSecondSquared } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VelocityUnitClass = SiUnitClass<{
  Metre: 1;
  Second: -1;
}>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type Velocity = AbstractUnitFrom<VelocityUnitClass>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type VelocityUnit<M extends UnitSubvalues> = VelocityUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type VelocityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  VelocityUnitClass,
  M
>;

/**
 * A unit of {@link Velocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s`
 */
export type MetrePerSecond = VelocityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<MetrePerSecond, Divide<Metre, Second>>>();

  assert<Equals<MetrePerSecond, Multiply<MetrePerSecondSquared, Second>>>();
}
