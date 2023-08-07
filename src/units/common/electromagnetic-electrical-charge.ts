// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Multiply,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Ampere, type Second } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricChargeUnitClass = BaseUnitClass<{
  Ampere: 1;
  Second: 1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCharge = AbstractUnitFrom<ElectricChargeUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricChargeUnit<M extends UnitSubvalues> =
  ElectricChargeUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricChargeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricChargeUnitClass,
  M
>;

/**
 * A unit of {@link ElectricCharge}.
 *
 * One Coulomb is equal to the quantity of charge transferred in one second by a steady current of one Ampere.
 *
 * @group Units
 * @category Derived
 * @symbol `C`
 */
export type Coulomb = ElectricChargeUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Coulomb, Multiply<Ampere, Second>>>();
}
