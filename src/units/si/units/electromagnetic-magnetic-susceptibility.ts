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

import { type Metre, type Henry } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticSusceptibilityUnitClass = SiUnitClass<{
  Kilogram: -1;
  Metre: -1;
  Second: 2;
  Ampere: 2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type MagneticSusceptibility =
  AbstractUnitFrom<MagneticSusceptibilityUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type MagneticSusceptibilityUnit<M extends UnitSubvalues> =
  MagneticSusceptibilityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
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
  assert<Equals<MetrePerHenry, DivideUnits<Metre, Henry>>>();
}
