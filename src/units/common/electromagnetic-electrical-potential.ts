// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type {
  AbstractUnitFrom,
  Divide,
  Multiply,
  UnitFrom,
  UnitMeta,
  UnitSubvalues,
  UnknownUnitMeta,
} from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Ampere, Coulomb, Joule, Ohm, Second, Watt, Weber } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricPotentialUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -3;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricPotential = AbstractUnitFrom<ElectricPotentialUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricPotentialUnit<M extends UnitSubvalues> = ElectricPotentialUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricPotentialUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricPotentialUnitClass, M>;

/**
 * A unit of {@link ElectricPotential}.
 *
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one Ampere when the power dissipated between the points is one watt.
 *
 * @group Units
 * @category Derived
 * @symbol `V`
 */
export type Volt = ElectricPotentialUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Volt", () => {
    it("is watts per ampere", () => {
      assert<Equals<Volt, Divide<Watt, Ampere>>>();
    });

    it("is ohms by ampere", () => {
      assert<Equals<Volt, Multiply<Ohm, Ampere>>>();
    });

    it("is joules per coulomb", () => {
      assert<Equals<Volt, Divide<Joule, Coulomb>>>();
    });

    it("is weber per second", () => {
      assert<Equals<Volt, Divide<Weber, Second>>>();
    });
  });
}
