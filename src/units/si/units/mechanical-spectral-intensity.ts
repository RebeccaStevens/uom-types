// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Metre, type Steradian, type Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralIntensityUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 1;
  Second: -3;
  Radian: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type SpectralIntensity = AbstractUnitFrom<SpectralIntensityUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type SpectralIntensityUnit<M extends UnitSubvalues> =
  SpectralIntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type SpectralIntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpectralIntensityUnitClass,
  M
>;

/**
 * A unit of {@link SpectralIntensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m)`
 */
export type WattPerSteradianMetre = SpectralIntensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<WattPerSteradianMetre, Divide<Watt, Multiply<Steradian, Metre>>>
  >();
}
