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
import { type Kilo } from "../modifiers";

import { type Gram, type Joule } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnthalpyUnitClass = SiUnitClass<{ Metre: 2; Second: -2 }>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Enthalpy = AbstractUnitFrom<EnthalpyUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type EnthalpyUnit<M extends UnitSubvalues> = EnthalpyUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type EnthalpyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  EnthalpyUnitClass,
  M
>;

/**
 * A unit of {@link Enthalpy}.
 *
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 *
 * @group Units
 * @category Derived
 * @category Mechanical
 * @symbol `Gy`
 */
export type Gray = EnthalpyUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Gray, DivideUnits<Joule, Kilo<Gram>>>>();
}
