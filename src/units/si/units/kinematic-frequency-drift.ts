// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type DivideUnits,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Hertz, type Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type FrequencyDriftUnitClass = SiUnitClass<{ Second: -2 }>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type FrequencyDrift = AbstractUnitFrom<FrequencyDriftUnitClass>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type FrequencyDriftUnit<M extends UnitSubvalues> =
  FrequencyDriftUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type FrequencyDriftUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  FrequencyDriftUnitClass,
  M
>;

/**
 * A unit of {@link FrequencyDrift} equal to one hertz per second.
 *
 * @group Units
 * @category Kinematic
 * @symbol `Hz/s`
 */
export type HertzPerSecond = FrequencyDriftUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<HertzPerSecond, DivideUnits<Hertz, Second>>>();
}