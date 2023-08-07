// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type Multiply,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Cubic } from "../modifiers";

import { type Metre, type Steradian, type Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralRadianceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: -1;
  Radian: -2;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralRadiance = AbstractUnitFrom<SpectralRadianceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralRadianceUnit<M extends UnitSubvalues> =
  SpectralRadianceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralRadianceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpectralRadianceUnitClass,
  M
>;

/**
 * A unit of {@link SpectralRadiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m³)`
 */
export type WattPerSteradianCubicMetre = SpectralRadianceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      WattPerSteradianCubicMetre,
      Divide<Watt, Multiply<Steradian, Cubic<Metre>>>
    >
  >();
}
