// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type MultiplyUnits,
  type AbstractUnitFrom,
  type DivideUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Second, type Joule, type Radian } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularMomentumUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -1;
  Radian: -1;
}>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type AngularMomentum = AbstractUnitFrom<AngularMomentumUnitClass>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type AngularMomentumUnit<M extends UnitSubvalues> =
  AngularMomentumUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Kinematic
 */
export type AngularMomentumUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AngularMomentumUnitClass,
  M
>;

/**
 * A unit of {@link AngularMomentum}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J⋅s/rad`
 */
export type JouleSecondPerRadian = AngularMomentumUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      JouleSecondPerRadian,
      DivideUnits<MultiplyUnits<Joule, Second>, Radian>
    >
  >();
}
