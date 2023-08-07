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
import { type Square } from "../modifiers";

import { type Candela, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Photometric
 */
export type LuminanceUnitClass = BaseUnitClass<{
  Candela: 1;
  Metre: -2;
}>;

/**
 * @group Abstract Unit
 * @category Photometric
 */
export type Luminance = AbstractUnitFrom<LuminanceUnitClass>;

/**
 * @group Unit Generators
 * @category Photometric
 */
export type LuminanceUnit<M extends UnitSubvalues> = LuminanceUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
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
export type CandelaPerSquareMetre = Lux;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Lux, CandelaPerSquareMetre>>();
  assert<Equals<CandelaPerSquareMetre, Divide<Candela, Square<Metre>>>>();
}
