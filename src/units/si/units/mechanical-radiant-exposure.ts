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

import { type Joule, type SquareMetre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type RadiantExposureUnitClass = SiUnitClass<{
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type RadiantExposure = AbstractUnitFrom<RadiantExposureUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type RadiantExposureUnit<M extends UnitSubvalues> =
  RadiantExposureUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type RadiantExposureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  RadiantExposureUnitClass,
  M
>;

/**
 * A unit of {@link RadiantExposure}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/m²`
 */
export type JoulePerSquareMetre = RadiantExposureUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<JoulePerSquareMetre, DivideUnits<Joule, SquareMetre>>>();
}
