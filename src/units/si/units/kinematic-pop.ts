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

import { type MetrePerSecondToTheFifth, type Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type PopUnitClass = BaseUnitClass<{ Metre: 1; Second: -6 }>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type Pop = AbstractUnitFrom<PopUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type PopUnit<M extends UnitSubvalues> = PopUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type PopUnitFrom<M extends UnknownUnitMeta> = UnitFrom<PopUnitClass, M>;

/**
 * A unit of {@link Pop}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁶`
 */
export type MetrePerSecondToTheSixth = PopUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<MetrePerSecondToTheSixth, Divide<MetrePerSecondToTheFifth, Second>>
  >();
}
