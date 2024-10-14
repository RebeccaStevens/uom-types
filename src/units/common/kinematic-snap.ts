// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type MeterPerSecondCubed, type Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type SnapUnitClass = BaseUnitClass<{ Meter: 1; Second: -4 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Snap = AbstractUnitFrom<SnapUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type SnapUnit<M extends UnitSubvalues> = SnapUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
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
export type MeterPerSecondToTheFourth = SnapUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MeterPerSecondToTheFourth", () => {
    it("is MeterPerSecondCubed per second", () => {
      assert<
        Equals<MeterPerSecondToTheFourth, Divide<MeterPerSecondCubed, Second>>
      >();
    });
  });
}
