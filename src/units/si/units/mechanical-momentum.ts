// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type MultiplyUnits,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Newton, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type MomentumUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 1;
  Second: -1;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Momentum = AbstractUnitFrom<MomentumUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type MomentumUnit<M extends UnitSubvalues> = MomentumUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type MomentumUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MomentumUnitClass,
  M
>;

/**
 * One newton second corresponds to a one newton of force applied for one second.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅s`
 */
export type NewtonSecond = MomentumUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<NewtonSecond, MultiplyUnits<Newton, Second>>>();
}
