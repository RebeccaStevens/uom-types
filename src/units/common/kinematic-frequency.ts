// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { BaseUnitClass } from "../base-units";
import type { Reciprocal } from "../modifiers";

import type { Day, Duration, DurationUnitClass, Hour, Minute, Second, Week, Year } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type FrequencyUnitClass = Reciprocal<DurationUnitClass>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Frequency = Reciprocal<Duration>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type FrequencyUnit<M extends UnitSubvalues> = FrequencyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type FrequencyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<FrequencyUnitClass, M>;

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
export type PerSecond = Hertz;

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
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Frequency", () => {
    it("is reciprocal of time", () => {
      assert<Equals<FrequencyUnitClass, BaseUnitClass<{ Second: -1 }>>>();
      assert<Equals<Hertz, Reciprocal<Second>>>();
      assert<Equals<PerSecond, Reciprocal<Second>>>();
      assert<Equals<PerMinute, Reciprocal<Minute>>>();
      assert<Equals<PerHour, Reciprocal<Hour>>>();
      assert<Equals<PerDay, Reciprocal<Day>>>();
      assert<Equals<PerWeek, Reciprocal<Week>>>();
      assert<Equals<PerYear, Reciprocal<Year>>>();
    });
  });
}
