// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide, Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { Meter, MeterPerSecondSquared, Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VelocityUnitClass = BaseUnitClass<{
  Meter: 1;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Velocity = AbstractUnitFrom<VelocityUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type VelocityUnit<M extends UnitSubvalues> = VelocityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type VelocityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<VelocityUnitClass, M>;

/**
 * A unit of {@link Velocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s`
 */
export type MeterPerSecond = VelocityUnit<{}>;

// Tests

if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MeterPerSecond", () => {
    it("is meters per second", () => {
      assert<Equals<MeterPerSecond, Divide<Meter, Second>>>();
    });

    it("is meters per second squared by seconds", () => {
      assert<Equals<MeterPerSecond, Multiply<MeterPerSecondSquared, Second>>>();
    });
  });
}
