// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type Multiply,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Metre, type Second, type MetrePerSecondSquared } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VelocityUnitClass = BaseUnitClass<{
  Metre: 1;
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
export type VelocityUnit<M extends UnitSubvalues> = VelocityUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type VelocityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  VelocityUnitClass,
  M
>;

/**
 * A unit of {@link Velocity}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s`
 */
export type MetrePerSecond = VelocityUnit<{}>;

// Tests

if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("MetrePerSecond", () => {
    it("is metres per second", () => {
      assert<Equals<MetrePerSecond, Divide<Metre, Second>>>();
    });

    it("is metres per second squared by seconds", () => {
      assert<Equals<MetrePerSecond, Multiply<MetrePerSecondSquared, Second>>>();
    });
  });
}
