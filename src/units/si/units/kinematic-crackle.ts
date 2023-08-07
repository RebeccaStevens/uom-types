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

import { type SiUnitClass } from "../base-units";

import { type Second, type MetrePerSecondToTheFourth } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type CrackleUnitClass = SiUnitClass<{ Metre: 1; Second: -5 }>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type Crackle = AbstractUnitFrom<CrackleUnitClass>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type CrackleUnit<M extends UnitSubvalues> = CrackleUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type CrackleUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  CrackleUnitClass,
  M
>;

/**
 * A unit of {@link Crackle}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m/s⁵`
 */
export type MetrePerSecondToTheFifth = CrackleUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<MetrePerSecondToTheFifth, Divide<MetrePerSecondToTheFourth, Second>>
  >();
}
