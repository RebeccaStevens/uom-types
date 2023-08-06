// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type DivideUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type Square } from "../modifiers";

import { type Candela, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminanceUnitClass = SiUnitClass<{
  Candela: 1;
  Metre: -2;
}>;

/**
 * @group Abstract Unit
 * @category Photometric
 */
export type Luminance = AbstractUnitFrom<LuminanceUnitClass>;

/**
 * @group Unit Creators
 * @category Photometric
 */
export type LuminanceUnit<M extends UnitSubvalues> = LuminanceUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Photometric
 */
export type LuminanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LuminanceUnitClass,
  M
>;

/**
 * A unit of {@link Luminance}.
 *
 * @group Units
 * @category Derived
 * @category Photometric
 * @symbol `lx`
 */
export type Lux = LuminanceUnit<{}>;

/**
 * A unit of {@link Luminance}.
 *
 * @group Units
 * @category Photometric
 * @symbol `cd/m²`
 */
export type CandelaPerSquareMetre = LuminanceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Lux, CandelaPerSquareMetre>>();
  assert<Equals<CandelaPerSquareMetre, DivideUnits<Candela, Square<Metre>>>>();
}
