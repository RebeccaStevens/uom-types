// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { MeterPerSecondToTheFifth, Second } from "./index.ts";

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
