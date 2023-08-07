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

import { type Metre, type Watt, type Kelvin } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalConductivityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 1;
  Second: -3;
  Kelvin: -1;
}>;

/**
 * @group Abstract Unit
 * @category Thermodynamic
 */
export type ThermalConductivity =
  AbstractUnitFrom<ThermalConductivityUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalConductivityUnit<M extends UnitSubvalues> =
  ThermalConductivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalConductivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ThermalConductivityUnitClass,
  M
>;

/**
 * A unit of {@link ThermalConductivity}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `W/(m⋅K)`
 */
export type WattPerMetreKelvin = ThermalConductivityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<WattPerMetreKelvin, Divide<Watt, Multiply<Metre, Kelvin>>>>();
}
