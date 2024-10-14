// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Meter, type Newton, type NewtonMeter, type Radian } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type TorqueUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -2;
  Radian: -1;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type Torque = AbstractUnitFrom<TorqueUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type TorqueUnit<M extends UnitSubvalues> = TorqueUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type TorqueUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  TorqueUnitClass,
  M
>;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J/rad`
 */
export type JoulePerRadian = TorqueUnit<{}>;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `N⋅m/rad`
 */
export type NewtonMeterPerRadian = JoulePerRadian;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("NewtonMeterPerRadian", () => {
    it("is newton meters per radians", () => {
      assert<Equals<NewtonMeterPerRadian, Divide<NewtonMeter, Radian>>>();
    });

    it("is newton by meters per radians", () => {
      assert<
        Equals<NewtonMeterPerRadian, Divide<Multiply<Newton, Meter>, Radian>>
      >();
    });
  });
}
