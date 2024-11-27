// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide, Multiply } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { Gram, Joule, Kelvin } from "./index.ts";

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
export type SpecificEntropyUnit<M extends UnitSubvalues> = SpecificEntropyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type SpecificEntropyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpecificEntropyUnitClass, M>;

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
      assert<Equals<JoulePerKilogramKelvin, Divide<Joule, Multiply<Kelvin, Kilo<Gram>>>>>();
    });
  });
}
