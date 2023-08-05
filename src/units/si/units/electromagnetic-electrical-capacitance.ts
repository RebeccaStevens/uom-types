// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type DivideUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Coulomb, type Volt } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricCapacitanceUnitClass = SiUnitClass<{
  Ampere: 2;
  Second: 4;
  Kilogram: -1;
  Metre: -2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricCapacitance =
  AbstractUnitFrom<ElectricCapacitanceUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricCapacitanceUnit<M extends UnitSubvalues> =
  ElectricCapacitanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricCapacitanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricCapacitanceUnitClass,
  M
>;

/**
 * A unit of {@link ElectricCapacitance}.
 *
 * One Farad is equal to the capacitance of a capacitor having an equal and opposite charge of 1 coulomb on
 * each plate and a potential difference of 1 volt between the plates.
 *
 * @group Units
 * @category Derived
 * @category Electromagnetic
 * @symbol `F`
 */
export type Farad = ElectricCapacitanceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Farad, DivideUnits<Coulomb, Volt>>>();
}
