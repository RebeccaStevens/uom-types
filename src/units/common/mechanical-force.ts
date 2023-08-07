// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Multiply,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Kilo } from "../modifiers";

import { type Gram, type MetrePerSecondSquared } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type ForceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 1;
  Second: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Force = AbstractUnitFrom<ForceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ForceUnit<M extends UnitSubvalues> = ForceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type ForceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ForceUnitClass,
  M
>;

/**
 * A unit of {@link Force}.
 *
 * One newton is the force required to accelerate a mass of 1 kilogram at 1 metre per second per second.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `N`
 */
export type Newton = ForceUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Newton, Multiply<Kilo<Gram>, MetrePerSecondSquared>>>();
}
