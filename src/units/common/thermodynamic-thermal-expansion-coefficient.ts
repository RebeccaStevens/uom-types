// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Reciprocal } from "../modifiers";

import { type TemperatureUnitClass, type Temperature } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnitClass =
  Reciprocal<TemperatureUnitClass>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficient = Reciprocal<Temperature>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnit<M extends UnitSubvalues> =
  ThermalExpansionCoefficientUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ThermalExpansionCoefficientUnitClass, M>;

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
