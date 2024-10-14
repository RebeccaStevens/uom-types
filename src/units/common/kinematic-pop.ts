// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { MeterPerSecondToTheFifth, Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type PopUnitClass = BaseUnitClass<{ Meter: 1; Second: -6 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Pop = AbstractUnitFrom<PopUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type PopUnit<M extends UnitSubvalues> = PopUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type PopUnitFrom<M extends UnknownUnitMeta> = UnitFrom<PopUnitClass, M>;

/**
 * A unit of {@link Pop}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁶`
 */
export type MeterPerSecondToTheSixth = PopUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MeterPerSecondToTheSixth", () => {
    it("is MeterPerSecondToTheFifth per second", () => {
      assert<Equals<MeterPerSecondToTheSixth, Divide<MeterPerSecondToTheFifth, Second>>>();
    });
  });
}
