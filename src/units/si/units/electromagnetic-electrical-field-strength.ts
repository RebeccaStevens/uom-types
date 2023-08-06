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

import { type Volt, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricFieldStrengthUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 1;
  Second: -3;
  Ampere: -1;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricFieldStrength =
  AbstractUnitFrom<ElectricFieldStrengthUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricFieldStrengthUnit<M extends UnitSubvalues> =
  ElectricFieldStrengthUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricFieldStrengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricFieldStrengthUnitClass,
  M
>;

/**
 * A unit of {@link ElectricFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `V/m`
 */
export type VoltPerMetre = ElectricFieldStrengthUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<VoltPerMetre, DivideUnits<Volt, Metre>>>();
}