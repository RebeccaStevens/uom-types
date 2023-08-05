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

import { type SquareMetre, type Weber } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnitClass = SiUnitClass<{
  Ampere: -1;
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type MagneticFluxDensity =
  AbstractUnitFrom<MagneticFluxDensityUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnit<M extends UnitSubvalues> =
  MagneticFluxDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type MagneticFluxDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticFluxDensityUnitClass,
  M
>;

/**
 * A unit of {@link MagneticFluxDensity}.
 *
 * One Tesla is equal equal to one weber per square metre.
 *
 * @group Units
 * @category Derived
 * @symbol `T`
 */
export type Tesla = MagneticFluxDensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Tesla, DivideUnits<Weber, SquareMetre>>>();
}
