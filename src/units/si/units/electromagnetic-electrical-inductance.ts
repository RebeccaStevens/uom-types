// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type MultiplyUnits,
  type DivideUnits,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Weber, type Second, type Ohm, type Ampere } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricInductanceUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -2;
  Ampere: -2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricInductance = AbstractUnitFrom<ElectricInductanceUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricInductanceUnit<M extends UnitSubvalues> =
  ElectricInductanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricInductanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricInductanceUnitClass,
  M
>;

/**
 * A unit of {@link ElectricInductance}.
 *
 * @group Units
 * @category Derived
 * @symbol `H`
 */
export type Henry = ElectricInductanceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Henry, DivideUnits<Weber, Ampere>>>();
  assert<Equals<Henry, MultiplyUnits<Ohm, Second>>>();
}
