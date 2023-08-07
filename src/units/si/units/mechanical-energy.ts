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
import { type Cubic } from "../modifiers";

import {
  type Pascal,
  type Coulomb,
  type Volt,
  type Metre,
  type Watt,
  type Second,
  type Hour,
  type Minute,
} from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnergyUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Energy = AbstractUnitFrom<EnergyUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type EnergyUnit<M extends UnitSubvalues> = EnergyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type EnergyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  EnergyUnitClass,
  M
>;

/**
 * A unit of {@link Energy}.
 *
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 metre in the direction of the force.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `J`
 */
export type Joule = EnergyUnit<{}>;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅s`
 */
export type WattSecond = Joule;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅min`
 */
export type WattMinute = EnergyUnit<{
  scalar60: 1;
}>;

/**
 * A unit of {@link Energy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W⋅hr`
 */
export type WattHour = EnergyUnit<{
  scalar60: 2;
}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Joule, WattSecond>>();
  assert<Equals<WattSecond, MultiplyUnits<Watt, Second>>>();
  assert<Equals<Joule, MultiplyUnits<Pascal, Cubic<Metre>>>>();
  assert<Equals<Joule, MultiplyUnits<Coulomb, Volt>>>();

  assert<Equals<WattMinute, MultiplyUnits<Watt, Minute>>>();
  assert<Equals<WattHour, MultiplyUnits<Watt, Hour>>>();
}
