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

import { type Watt, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralPowerUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 1;
  Second: -3;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type SpectralPower = AbstractUnitFrom<SpectralPowerUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralPowerUnit<M extends UnitSubvalues> = SpectralPowerUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralPowerUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpectralPowerUnitClass,
  M
>;

/**
 * A unit of {@link SpectralPower}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m`
 */
export type WattPerMetre = SpectralPowerUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<WattPerMetre, Divide<Watt, Metre>>>();
}
