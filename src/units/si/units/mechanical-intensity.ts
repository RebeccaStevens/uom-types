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
import { type Square } from "../modifiers";

import { type Metre, type Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type IntensityUnitClass = SiUnitClass<{ Kilogram: 1; Second: -3 }>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Intensity = AbstractUnitFrom<IntensityUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type IntensityUnit<M extends UnitSubvalues> = IntensityUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type IntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  IntensityUnitClass,
  M
>;

/**
 * A unit of {@link Intensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m²`
 */
export type WattPerSquareMetre = IntensityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<WattPerSquareMetre, DivideUnits<Watt, Square<Metre>>>>();
}
