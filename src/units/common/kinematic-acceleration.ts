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
import { type Square } from "../modifiers";

import { type Metre, type MetrePerSecond, type Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AccelerationUnitClass = BaseUnitClass<{ Metre: 1; Second: -2 }>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Acceleration = AbstractUnitFrom<AccelerationUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AccelerationUnit<M extends UnitSubvalues> = AccelerationUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AccelerationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AccelerationUnitClass,
  M
>;

/**
 * A unit of {@link Acceleration}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s²`
 */
export type MetrePerSecondSquared = AccelerationUnit<{}>;

// Tests

if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MetrePerSecondSquared", () => {
    it("is metres per squared second", () => {
      assert<Equals<MetrePerSecondSquared, Divide<Metre, Square<Second>>>>();
    });

    it("is metres per second per second", () => {
      assert<Equals<MetrePerSecondSquared, Divide<MetrePerSecond, Second>>>();
    });
  });
}
