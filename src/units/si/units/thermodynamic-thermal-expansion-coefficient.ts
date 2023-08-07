// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type ReciprocalUnitClass, type Reciprocal } from "../modifiers";

import { type TemperatureUnitClass, type Temperature } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnitClass =
  ReciprocalUnitClass<TemperatureUnitClass>;

/**
 * @group Abstract Unit
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficient = Reciprocal<Temperature>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnit<M extends UnitSubvalues> =
  ThermalExpansionCoefficientUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type ThermalExpansionCoefficientUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ThermalExpansionCoefficientUnitClass, M>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      ThermalExpansionCoefficientUnitClass,
      SiUnitClass<{
        Kelvin: -1;
      }>
    >
  >();
}
