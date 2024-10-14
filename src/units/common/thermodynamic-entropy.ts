// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Joule, Kelvin } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type EntropyUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 2;
  Second: -2;
  Kelvin: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type Entropy = AbstractUnitFrom<EntropyUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type EntropyUnit<M extends UnitSubvalues> = EntropyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type EntropyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EntropyUnitClass, M>;

/**
 * A unit of {@link Entropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/K`
 */
export type JoulePerKelvin = EntropyUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JoulePerKelvin", () => {
    it("is joules per kelvin", () => {
      assert<Equals<JoulePerKelvin, Divide<Joule, Kelvin>>>();
    });
  });
}
