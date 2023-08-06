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
import { type Cubic } from "../modifiers";

import { type Metre, type Litre, type Mole } from ".";

/**
 * @group Unit Classes
 * @category Chemical
 */
export type MolarConcentrationUnitClass = SiUnitClass<{ Mole: 1; Metre: -3 }>;

/**
 * @group Abstract Unit
 * @category Chemical
 */
export type MolarConcentration = AbstractUnitFrom<MolarConcentrationUnitClass>;

/**
 * @group Unit Creators
 * @category Chemical
 */
export type MolarConcentrationUnit<M extends UnitSubvalues> =
  MolarConcentrationUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Chemical
 */
export type MolarConcentrationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MolarConcentrationUnitClass,
  M
>;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link MolePerCubicMetre}.
 *
 * @group Units
 * @category Chemical
 * @symbol `c`
 */
export type Concentration = MolarConcentrationUnit<{}>;

/**
 * A unit of {@link MolarConcentration}.
 *
 * Equivalent to {@link Concentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/m³`
 */
export type MolePerCubicMetre = MolarConcentrationUnit<{}>;

/**
 * A unit of {@link MolarConcentration}.
 *
 * @group Units
 * @category Chemical
 * @symbol `mol/l`
 */
export type MolePerLiter = MolarConcentrationUnit<{ scalar10: 3 }>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Concentration, MolePerCubicMetre>>();
  assert<Equals<MolePerCubicMetre, DivideUnits<Mole, Cubic<Metre>>>>();
  assert<Equals<MolePerLiter, DivideUnits<Mole, Litre>>>();
}
