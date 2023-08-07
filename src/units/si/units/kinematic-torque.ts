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

import { type Metre, type Newton, type NewtonMetre, type Radian } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type TorqueUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -2;
  Radian: -1;
}>;

/**
 * @group Abstract Unit
 * @category Kinematic
 */
export type Torque = AbstractUnitFrom<TorqueUnitClass>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type TorqueUnit<M extends UnitSubvalues> = TorqueUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Kinematic
 */
export type TorqueUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  TorqueUnitClass,
  M
>;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `J/rad`
 */
export type JoulePerRadian = TorqueUnit<{}>;

/**
 * A unit of {@link Torque}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `N⋅m/rad`
 */
export type NewtonMeterPerRadian = JoulePerRadian;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<NewtonMeterPerRadian, Divide<NewtonMetre, Radian>>>();
  assert<
    Equals<NewtonMeterPerRadian, Divide<Multiply<Newton, Metre>, Radian>>
  >();
}
