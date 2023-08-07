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
import { type Reciprocal } from "../modifiers";

import {
  type Ampere,
  type Farad,
  type Second,
  type Siemens,
  type Volt,
} from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricResistanceUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -3;
  Ampere: -2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricResistance = AbstractUnitFrom<ElectricResistanceUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricResistanceUnit<M extends UnitSubvalues> =
  ElectricResistanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricResistanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricResistanceUnitClass,
  M
>;

/**
 * A unit of {@link ElectricResistance}.
 *
 * One Ohm is equal to the resistance of a conductor in which a current of one Ampere is produced
 * by a potential of one volt across its terminals.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Ω`
 */
export type Ohm = ElectricResistanceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Ohm, Divide<Volt, Ampere>>>();
  assert<Equals<Ohm, Reciprocal<Siemens>>>();
  assert<Equals<Ohm, Divide<Second, Farad>>>();
}
