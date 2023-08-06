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
import { type Kilo, type Cubic } from "../modifiers";

import { type Gram, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type SpecificVolumeUnitClass = SiUnitClass<{ Kilogram: -1; Metre: 3 }>;

/**
 * @group Abstract Unit
 * @category Thermodynamic
 */
export type SpecificVolume = AbstractUnitFrom<SpecificVolumeUnitClass>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type SpecificVolumeUnit<M extends UnitSubvalues> =
  SpecificVolumeUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type SpecificVolumeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpecificVolumeUnitClass,
  M
>;

/**
 * A unit of {@link SpecificVolume}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m³/kg`
 */
export type CubicMetrePerKilogram = SpecificVolumeUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<CubicMetrePerKilogram, DivideUnits<Cubic<Metre>, Kilo<Gram>>>
  >();
}
