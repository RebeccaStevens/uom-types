// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Kilo, type Square } from "../modifiers";

import { type Gram, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SurfaceDensityUnitClass = BaseUnitClass<{ Kilogram: 1; Metre: -2 }>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type SurfaceDensity = AbstractUnitFrom<SurfaceDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SurfaceDensityUnit<M extends UnitSubvalues> =
  SurfaceDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SurfaceDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SurfaceDensityUnitClass,
  M
>;

// cspell:disable -- TODO: remove once https://github.com/streetsidesoftware/cspell/issues/4701 is resolved.
/**
 * A unit of {@link SurfaceDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m²`
 */
// cspell:enable
export type KilogramPerSquareMetre = SurfaceDensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<KilogramPerSquareMetre, Divide<Kilo<Gram>, Square<Metre>>>>();
}
