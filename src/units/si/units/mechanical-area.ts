// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type DivideUnits,
  type MultiplyUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type CubicMetre, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type AreaUnitClass = SiUnitClass<{ Metre: 2 }>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Area = AbstractUnitFrom<AreaUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type AreaUnit<M extends UnitSubvalues> = AreaUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type AreaUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AreaUnitClass,
  M
>;

/**
 * A unit of {@link Area}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m²`
 */
export type SquareMetre = AreaUnit<{}>;

/**
 * A unit of {@link Area} equal to 100 {@link SquareMetre}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `a`
 */
export type Are = AreaUnit<{ scalar10: 2 }>;

/**
 * A unit of {@link Area} equal to 10,000 {@link SquareMetre}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `ha`
 */
export type Hectare = AreaUnit<{ scalar10: 4 }>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<SquareMetre, MultiplyUnits<Metre, Metre>>>();
  assert<Equals<SquareMetre, DivideUnits<CubicMetre, Metre>>>();
}
