// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Kilo } from "../modifiers/index.ts";

import type { Gram, Joule } from "./index.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpecificEnergyUnitClass = BaseUnitClass<{
  Meter: 2;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpecificEnergy = AbstractUnitFrom<SpecificEnergyUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificEnergyUnit<M extends UnitSubvalues> = SpecificEnergyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificEnergyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpecificEnergyUnitClass, M>;

/**
 * A unit of {@link SpecificEnergy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/kg`
 */
export type JoulePerKilogram = SpecificEnergyUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JoulePerKilogram", () => {
    it("is joules per kilogram", () => {
      assert<Equals<JoulePerKilogram, Divide<Joule, Kilo<Gram>>>>();
    });
  });
}
