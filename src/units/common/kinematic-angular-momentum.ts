// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Second, type Joule, type Radian } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type AngularMomentumUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -1;
  Radian: -1;
}>;

/**
 * @group Abstract Units
 * @category Kinematic
 */
export type AngularMomentum = AbstractUnitFrom<AngularMomentumUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type AngularMomentumUnit<M extends UnitSubvalues> =
  AngularMomentumUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
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
    Equals<JouleSecondPerRadian, Divide<Multiply<Joule, Second>, Radian>>
  >();
}
