// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { MeterPerSecondSquared, Second } from "./index.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type JerkUnitClass = BaseUnitClass<{ Meter: 1; Second: -3 }>;

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
export type JerkUnitFrom<M extends UnknownUnitMeta> = UnitFrom<JerkUnitClass, M>;

/**
 * A unit of {@link Jerk}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s³`
 */
export type MeterPerSecondCubed = JerkUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MeterPerSecondCubed", () => {
    it("is meters per squared second per second", () => {
      assert<Equals<MeterPerSecondCubed, Divide<MeterPerSecondSquared, Second>>>();
    });
  });
}
