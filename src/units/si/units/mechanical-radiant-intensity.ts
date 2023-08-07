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

import { type Watt, type Steradian } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type RadiantIntensityUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -3;
  Radian: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type RadiantIntensity = AbstractUnitFrom<RadiantIntensityUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type RadiantIntensityUnit<M extends UnitSubvalues> =
  RadiantIntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type RadiantIntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  RadiantIntensityUnitClass,
  M
>;

/**
 * A unit of {@link RadiantIntensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/sr`
 */
export type WattPerSteradian = RadiantIntensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<WattPerSteradian, Divide<Watt, Steradian>>>();
}
