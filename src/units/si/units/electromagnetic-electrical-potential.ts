// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type Multiply,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import {
  type Ampere,
  type Coulomb,
  type Joule,
  type Ohm,
  type Second,
  type Watt,
  type Weber,
} from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricPotentialUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -3;
  Ampere: -1;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricPotential = AbstractUnitFrom<ElectricPotentialUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricPotentialUnit<M extends UnitSubvalues> =
  ElectricPotentialUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricPotentialUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricPotentialUnitClass,
  M
>;

/**
 * A unit of {@link ElectricPotential}.
 *
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one Ampere when the power dissipated between the points is one watt.
 *
 * @group Units
 * @category Derived
 * @symbol `V`
 */
export type Volt = ElectricPotentialUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Volt, Divide<Watt, Ampere>>>();
  assert<Equals<Volt, Multiply<Ohm, Ampere>>>();
  assert<Equals<Volt, Divide<Joule, Coulomb>>>();
  assert<Equals<Volt, Divide<Weber, Second>>>();
}
