// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Tesla, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticRigidityUnitClass = SiUnitClass<{
  Ampere: -1;
  Kilogram: 1;
  Metre: 1;
  Second: -2;
}>;

/**
 * @group Abstract Unit
 * @category Electromagnetic
 */
export type MagneticRigidity = AbstractUnitFrom<MagneticRigidityUnitClass>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type MagneticRigidityUnit<M extends UnitSubvalues> =
  MagneticRigidityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Electromagnetic
 */
export type MagneticRigidityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticRigidityUnitClass,
  M
>;

/**
 * A unit of {@link MagneticRigidity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `T⋅m`
 */
export type TeslaMetre = MagneticRigidityUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<TeslaMetre, Multiply<Tesla, Metre>>>();
}
