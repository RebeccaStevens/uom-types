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

import { type Ampere, type Volt } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricConductanceUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Metre: -2;
  Second: 3;
  Ampere: 2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricConductance =
  AbstractUnitFrom<ElectricConductanceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricConductanceUnit<M extends UnitSubvalues> =
  ElectricConductanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricConductanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricConductanceUnitClass,
  M
>;

/**
 * A unit of {@link ElectricConductance}.
 *
 * One Siemens is equal to one ampere per volt.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `S`
 */
export type Siemens = ElectricConductanceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Siemens, Divide<Ampere, Volt>>>();
}
