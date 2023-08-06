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

import { type Coulomb, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensityUnitClass = SiUnitClass<{
  Ampere: 1;
  Second: 1;
  Metre: -1;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensity =
  AbstractUnitFrom<ElectricLinearChargeDensityUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensityUnit<M extends UnitSubvalues> =
  ElectricLinearChargeDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensityUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ElectricLinearChargeDensityUnitClass, M>;

/**
 * A unit of {@link ElectricLinearChargeDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m`
 */
export type CoulombPerMetre = ElectricLinearChargeDensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<CoulombPerMetre, DivideUnits<Coulomb, Metre>>>();
}