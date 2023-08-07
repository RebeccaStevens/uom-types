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

import { type Second, type MetrePerSecondSquared } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type JerkUnitClass = BaseUnitClass<{ Metre: 1; Second: -3 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Jerk = AbstractUnitFrom<JerkUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type JerkUnit<M extends UnitSubvalues> = JerkUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type JerkUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  JerkUnitClass,
  M
>;

/**
 * A unit of {@link Jerk}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s³`
 */
export type MetrePerSecondCubed = JerkUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<MetrePerSecondCubed, Divide<MetrePerSecondSquared, Second>>>();
}
