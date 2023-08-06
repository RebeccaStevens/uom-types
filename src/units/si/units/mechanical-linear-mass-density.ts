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
import { type Kilo } from "../modifiers";

import { type Gram, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type LinearMassDensityUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: -1;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type LinearMassDensity = AbstractUnitFrom<LinearMassDensityUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type LinearMassDensityUnit<M extends UnitSubvalues> =
  LinearMassDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type LinearMassDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LinearMassDensityUnitClass,
  M
>;

/**
 * A unit of {@link LinearMassDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m`
 */
export type KilogramPerMetre = LinearMassDensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<KilogramPerMetre, DivideUnits<Kilo<Gram>, Metre>>>();
}
