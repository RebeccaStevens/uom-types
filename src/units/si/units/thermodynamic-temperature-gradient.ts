// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type DivideUnits,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Kelvin, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type TemperatureGradientUnitClass = SiUnitClass<{
  Kelvin: 1;
  Metre: -1;
}>;

/**
 * @group Abstract Unit
 * @category Thermodynamic
 */
export type TemperatureGradient =
  AbstractUnitFrom<TemperatureGradientUnitClass>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type TemperatureGradientUnit<M extends UnitSubvalues> =
  TemperatureGradientUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type TemperatureGradientUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  TemperatureGradientUnitClass,
  M
>;

/**
 * A unit of {@link TemperatureGradient}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/m`
 */
export type KelvinPerMetre = TemperatureGradientUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<KelvinPerMetre, DivideUnits<Kelvin, Metre>>>();
}
