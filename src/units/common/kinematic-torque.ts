// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide, Multiply } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { Meter, Newton, NewtonMeter, Radian } from "./index.ts";

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
export type TorqueUnitFrom<M extends UnknownUnitMeta> = UnitFrom<TorqueUnitClass, M>;

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
      assert<Equals<NewtonMeterPerRadian, Divide<Multiply<Newton, Meter>, Radian>>>();
    });
  });
}
