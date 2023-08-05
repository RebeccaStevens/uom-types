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

import { type Metre, type Newton, type NewtonMetre, type Radian } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type TorqueUnitClass = SiUnitClass<{
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
 * @group Unit Creators
 * @category Kinematic
 */
export type TorqueUnit<M extends UnitSubvalues> = TorqueUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
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
export type NewtonMeterPerRadian = TorqueUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<NewtonMeterPerRadian, JoulePerRadian>>();
  assert<Equals<NewtonMeterPerRadian, DivideUnits<NewtonMetre, Radian>>>();
  assert<
    Equals<
      NewtonMeterPerRadian,
      DivideUnits<MultiplyUnits<Newton, Metre>, Radian>
    >
  >();
}
