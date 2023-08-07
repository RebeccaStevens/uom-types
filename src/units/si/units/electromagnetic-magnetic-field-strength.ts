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

import { type Ampere, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticFieldStrengthUnitClass = SiUnitClass<{
  Ampere: 1;
  Metre: -1;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type MagneticFieldStrength =
  AbstractUnitFrom<MagneticFieldStrengthUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type MagneticFieldStrengthUnit<M extends UnitSubvalues> =
  MagneticFieldStrengthUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type MagneticFieldStrengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticFieldStrengthUnitClass,
  M
>;

/**
 * A unit of {@link MagneticFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m`
 */
export type AmperePerMetre = MagneticFieldStrengthUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<AmperePerMetre, Divide<Ampere, Metre>>>();
}
