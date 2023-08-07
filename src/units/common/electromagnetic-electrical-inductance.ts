// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Weber, type Second, type Ohm, type Ampere } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricInductanceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -2;
  Ampere: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricInductance = AbstractUnitFrom<ElectricInductanceUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricInductanceUnit<M extends UnitSubvalues> =
  ElectricInductanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
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
  assert<Equals<Henry, Divide<Weber, Ampere>>>();
  assert<Equals<Henry, Multiply<Ohm, Second>>>();
}
