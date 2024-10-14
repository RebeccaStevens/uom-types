// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type Multiply,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Kilo } from "../modifiers";

import { type Gram, type Joule, type Kelvin } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type SpecificEntropyUnitClass = BaseUnitClass<{
  Meter: 2;
  Second: -2;
  Kelvin: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type SpecificEntropy = AbstractUnitFrom<SpecificEntropyUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type SpecificEntropyUnit<M extends UnitSubvalues> =
  SpecificEntropyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type SpecificEntropyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpecificEntropyUnitClass,
  M
>;

/**
 * A unit of {@link SpecificEntropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/(K⋅kg)`
 */
export type JoulePerKilogramKelvin = SpecificEntropyUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JoulePerKilogramKelvin", () => {
    it("is joules per kelvin kilogram", () => {
      assert<
        Equals<
          JoulePerKilogramKelvin,
          Divide<Joule, Multiply<Kelvin, Kilo<Gram>>>
        >
      >();
    });
  });
}
