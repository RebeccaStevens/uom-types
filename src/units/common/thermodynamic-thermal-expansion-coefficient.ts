// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Reciprocal } from "../modifiers/index.ts";

import type { Temperature, TemperatureUnitClass } from "./index.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnitClass = Reciprocal<TemperatureUnitClass>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficient = Reciprocal<Temperature>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnit<M extends UnitSubvalues> = ThermalExpansionCoefficientUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ThermalExpansionCoefficientUnitClass,
  M
>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("ThermalExpansionCoefficientUnitClass", () => {
    it("has the right base units", () => {
      assert<
        Equals<
          ThermalExpansionCoefficientUnitClass,
          BaseUnitClass<{
            Kelvin: -1;
          }>
        >
      >();
    });
  });
}
