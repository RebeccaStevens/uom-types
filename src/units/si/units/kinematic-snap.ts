// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type DivideUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type MetrePerSecondCubed, type Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type SnapUnitClass = SiUnitClass<{ Metre: 1; Second: -4 }>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type Snap = AbstractUnitFrom<SnapUnitClass>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type SnapUnit<M extends UnitSubvalues> = SnapUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type SnapUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SnapUnitClass,
  M
>;

/**
 * A unit of {@link Snap}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁴`
 */
export type MetrePerSecondToTheFourth = SnapUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<MetrePerSecondToTheFourth, DivideUnits<MetrePerSecondCubed, Second>>
  >();
}
