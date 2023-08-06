// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type Reciprocal } from "../modifiers";

import { type ElectricInductance } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticReluctanceUnitClass = SiUnitClass<{
  Kilogram: -1;
  Metre: -2;
  Second: 2;
  Ampere: 2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type MagneticReluctance = AbstractUnitFrom<MagneticReluctanceUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type MagneticReluctanceUnit<M extends UnitSubvalues> =
  MagneticReluctanceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type MagneticReluctanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticReluctanceUnitClass,
  M
>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<MagneticReluctance, Reciprocal<ElectricInductance>>>();
}