// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type Reciprocal } from "../modifiers";

import {
  type Day,
  type Hour,
  type Minute,
  type Week,
  type Year,
  type Second,
} from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type FrequencyUnitClass = SiUnitClass<{ Second: -1 }>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type Frequency = AbstractUnitFrom<FrequencyUnitClass>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type FrequencyUnit<M extends UnitSubvalues> = FrequencyUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type FrequencyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  FrequencyUnitClass,
  M
>;

/**
 * A unit of {@link Frequency}.
 *
 * One hertz is equal to one cycle per second.
 *
 * @group Units
 * @category Derived
 * @category Kinematic
 * @symbol `Hz`
 */
export type Hertz = FrequencyUnit<{}>;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `s⁻¹`
 */
export type PerSecond = FrequencyUnit<{}>;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `min⁻¹`
 */
export type PerMinute = FrequencyUnit<{ scalar60: -1 }>;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `hr⁻¹`
 */
export type PerHour = FrequencyUnit<{ scalar60: -2 }>;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `day⁻¹`
 */
export type PerDay = FrequencyUnit<{ scalar60: -2; scalar24: -1 }>;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `wk⁻¹`
 */
export type PerWeek = FrequencyUnit<{
  scalar60: -2;
  scalar24: -1;
  scalar7: -1;
}>;

/**
 * A unit of {@link Frequency}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `yr⁻¹`
 */
export type PerYear = FrequencyUnit<{
  scalar60: -2;
  scalar24: -1;
  scalarDayInYear: -1;
}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Hertz, Reciprocal<Second>>>();
  assert<Equals<PerSecond, Reciprocal<Second>>>();
  assert<Equals<PerMinute, Reciprocal<Minute>>>();
  assert<Equals<PerHour, Reciprocal<Hour>>>();
  assert<Equals<PerDay, Reciprocal<Day>>>();
  assert<Equals<PerWeek, Reciprocal<Week>>>();
  assert<Equals<PerYear, Reciprocal<Year>>>();
}
