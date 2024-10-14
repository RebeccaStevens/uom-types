// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Multiply, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";
import type { Cubic } from "../modifiers";

import type { Coulomb, Hour, Meter, Minute, Pascal, Second, Volt, Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnergyUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Energy = AbstractUnitFrom<EnergyUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyUnit<M extends UnitSubvalues> = EnergyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EnergyUnitClass, M>;

/**
 * A unit of {@link Energy}.
 *
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 meter in the direction of the force.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `J`
 */
export type Joule = EnergyUnit<{}>;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅s`
 */
export type WattSecond = Joule;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅min`
 */
export type WattMinute = EnergyUnit<{
  scalar60: 1;
}>;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅hr`
 */
export type WattHour = EnergyUnit<{
  scalar60: 2;
}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Joule", () => {
    it("is watt seconds", () => {
      assert<Equals<Joule, WattSecond>>();
      assert<Equals<WattSecond, Multiply<Watt, Second>>>();
    });
    it("is pascal cubic meters", () => {
      assert<Equals<Joule, Multiply<Pascal, Cubic<Meter>>>>();
    });
    it("is coulomb volts", () => {
      assert<Equals<Joule, Multiply<Coulomb, Volt>>>();
    });
  });

  describe("other energy units", () => {
    it("is correct", () => {
      assert<Equals<WattMinute, Multiply<Watt, Minute>>>();
      assert<Equals<WattHour, Multiply<Watt, Hour>>>();
    });
  });
}
