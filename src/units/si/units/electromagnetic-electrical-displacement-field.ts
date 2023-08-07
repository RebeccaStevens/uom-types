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

import { type SiUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Metre, type Coulomb } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricDisplacementFieldUnitClass = SiUnitClass<{
  Ampere: 1;
  Second: 1;
  Metre: -2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricDisplacementField =
  AbstractUnitFrom<ElectricDisplacementFieldUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricDisplacementFieldUnit<M extends UnitSubvalues> =
  ElectricDisplacementFieldUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type ElectricDisplacementFieldUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ElectricDisplacementFieldUnitClass, M>;

/**
 * A unit of {@link ElectricDisplacementField}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m²`
 */
export type CoulombPerSquareMetre = ElectricDisplacementFieldUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<CoulombPerSquareMetre, Divide<Coulomb, Square<Metre>>>>();
}
