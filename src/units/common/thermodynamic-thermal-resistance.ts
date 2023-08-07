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

import { type Kelvin, type Watt } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalResistanceUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Metre: -2;
  Second: 3;
  Kelvin: 1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalResistance = AbstractUnitFrom<ThermalResistanceUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalResistanceUnit<M extends UnitSubvalues> =
  ThermalResistanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalResistanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ThermalResistanceUnitClass,
  M
>;

/**
 * A unit of {@link ThermalResistance}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/W`
 */
export type KelvinPerWatt = ThermalResistanceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<KelvinPerWatt, Divide<Kelvin, Watt>>>();
}
