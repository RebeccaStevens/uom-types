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

import { type Joule, type Kelvin } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type EntropyUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -2;
  Kelvin: -1;
}>;

/**
 * @group Abstract Unit
 * @category Thermodynamic
 */
export type Entropy = AbstractUnitFrom<EntropyUnitClass>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type EntropyUnit<M extends UnitSubvalues> = EntropyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type EntropyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  EntropyUnitClass,
  M
>;

/**
 * A unit of {@link Entropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/K`
 */
export type JoulePerKelvin = EntropyUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<JoulePerKelvin, DivideUnits<Joule, Kelvin>>>();
}
