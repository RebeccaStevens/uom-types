// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Hertz, Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type FrequencyDriftUnitClass = BaseUnitClass<{ Second: -2 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type FrequencyDrift = AbstractUnitFrom<FrequencyDriftUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type FrequencyDriftUnit<M extends UnitSubvalues> = FrequencyDriftUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type FrequencyDriftUnitFrom<M extends UnknownUnitMeta> = UnitFrom<FrequencyDriftUnitClass, M>;

/**
 * A unit of {@link FrequencyDrift} equal to one hertz per second.
 *
 * @group Units
 * @category Kinematic
 * @symbol `Hz/s`
 */
export type HertzPerSecond = FrequencyDriftUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MeterPerSecondToTheFifth", () => {
    it("is hertz per second", () => {
      assert<Equals<HertzPerSecond, Divide<Hertz, Second>>>();
    });
  });
}
