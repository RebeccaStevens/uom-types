// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type Cubic } from "../modifiers";

import { type Metre, type Coulomb } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricChargeDensityUnitClass = SiUnitClass<{
  Ampere: 1;
  Second: 1;
  Metre: -3;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricChargeDensity =
  AbstractUnitFrom<ElectricChargeDensityUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricChargeDensityUnit<M extends UnitSubvalues> =
  ElectricChargeDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricChargeDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricChargeDensityUnitClass,
  M
>;

/**
 * A unit of {@link ElectricChargeDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m³`
 */
export type CoulombPerCubicMetre = ElectricChargeDensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<CoulombPerCubicMetre, Divide<Coulomb, Cubic<Metre>>>>();
}
