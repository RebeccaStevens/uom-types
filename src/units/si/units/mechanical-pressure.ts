// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type DivideUnits,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type Newton, type SquareMetre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type PressureUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: -1;
  Second: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Pressure = AbstractUnitFrom<PressureUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type PressureUnit<M extends UnitSubvalues> = PressureUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type PressureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  PressureUnitClass,
  M
>;

/**
 * A unit of {@link Pressure}.
 *
 * One pascal is equal to one newton per square metre.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `Pa`
 */
export type Pascal = PressureUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Pascal, DivideUnits<Newton, SquareMetre>>>();
}
