// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Square } from "../modifiers/index.ts";

import type { Meter, MeterPerSecond, Second } from "./index.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AccelerationUnitClass = BaseUnitClass<{ Meter: 1; Second: -2 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Acceleration = AbstractUnitFrom<AccelerationUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AccelerationUnit<M extends UnitSubvalues> = AccelerationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AccelerationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AccelerationUnitClass, M>;

/**
 * A unit of {@link Acceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s²`
 */
export type MeterPerSecondSquared = AccelerationUnit<{}>;

// Tests

if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MeterPerSecondSquared", () => {
    it("is meters per squared second", () => {
      assert<Equals<MeterPerSecondSquared, Divide<Meter, Square<Second>>>>();
    });

    it("is meters per second per second", () => {
      assert<Equals<MeterPerSecondSquared, Divide<MeterPerSecond, Second>>>();
    });
  });
}
