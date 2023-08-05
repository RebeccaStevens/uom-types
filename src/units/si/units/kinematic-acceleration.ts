// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type DivideUnits,
  type MultiplyUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Metre, type MetrePerSecond, type Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AccelerationUnitClass = SiUnitClass<{ Metre: 1; Second: -2 }>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type Acceleration = AbstractUnitFrom<AccelerationUnitClass>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type AccelerationUnit<M extends UnitSubvalues> = AccelerationUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type AccelerationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AccelerationUnitClass,
  M
>;

/**
 * A unit of {@link Acceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s²`
 */
export type MetrePerSecondSquared = AccelerationUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      MetrePerSecondSquared,
      DivideUnits<Metre, MultiplyUnits<Second, Second>>
    >
  >();

  assert<Equals<MetrePerSecondSquared, DivideUnits<MetrePerSecond, Second>>>();
}
