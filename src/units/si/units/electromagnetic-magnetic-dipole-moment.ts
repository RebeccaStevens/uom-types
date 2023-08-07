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

import { type Joule, type Tesla } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticDipoleMomentUnitClass = BaseUnitClass<{
  Metre: 2;
  Ampere: 1;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type MagneticDipoleMoment =
  AbstractUnitFrom<MagneticDipoleMomentUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticDipoleMomentUnit<M extends UnitSubvalues> =
  MagneticDipoleMomentUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticDipoleMomentUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticDipoleMomentUnitClass,
  M
>;

/**
 * A unit of {@link MagneticDipoleMoment}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `J/T`
 */
export type JoulePerTesla = MagneticDipoleMomentUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<JoulePerTesla, Divide<Joule, Tesla>>>();
}
