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

import { type Metre, type Henry } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticSusceptibilityUnitClass = BaseUnitClass<{
  Kilogram: -1;
  Metre: -1;
  Second: 2;
  Ampere: 2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticSusceptibility =
  AbstractUnitFrom<MagneticSusceptibilityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticSusceptibilityUnit<M extends UnitSubvalues> =
  MagneticSusceptibilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticSusceptibilityUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<MagneticSusceptibilityUnitClass, M>;

/**
 * A unit of {@link MagneticSusceptibility}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `m/H`
 */
export type MetrePerHenry = MagneticSusceptibilityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<MetrePerHenry, Divide<Metre, Henry>>>();
}
