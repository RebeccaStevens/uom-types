// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Metre, type Kelvin, type Watt } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalTransmittanceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -3;
  Kelvin: -1;
}>;

/**
 * @group Abstract Unit
 * @category Thermodynamic
 */
export type ThermalTransmittance =
  AbstractUnitFrom<ThermalTransmittanceUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalTransmittanceUnit<M extends UnitSubvalues> =
  ThermalTransmittanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalTransmittanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ThermalTransmittanceUnitClass,
  M
>;

/**
 * A unit of {@link ThermalTransmittance}.
 *
 * @group Units
 * @category Thermodynamic
 */
export type WattPerSquareMetrePerKelvin = ThermalTransmittanceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      WattPerSquareMetrePerKelvin,
      Divide<Divide<Watt, Square<Metre>>, Kelvin>
    >
  >();
}
