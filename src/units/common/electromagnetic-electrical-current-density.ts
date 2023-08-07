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
import { type Square } from "../modifiers";

import { type Metre, type Ampere } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnitClass = BaseUnitClass<{
  Ampere: 1;
  Metre: -2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type ElectricCurrentDensity =
  AbstractUnitFrom<ElectricCurrentDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnit<M extends UnitSubvalues> =
  ElectricCurrentDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ElectricCurrentDensityUnitClass, M>;

/**
 * A unit of {@link ElectricCurrentDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m²`
 */
export type AmperePerSquareMetre = ElectricCurrentDensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<AmperePerSquareMetre, Divide<Ampere, Square<Metre>>>>();
}
