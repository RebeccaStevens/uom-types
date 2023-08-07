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

import { type JoulePerSquareMetre, type Newton, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type StiffnessUnitClass = SiUnitClass<{
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type Stiffness = AbstractUnitFrom<StiffnessUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type StiffnessUnit<M extends UnitSubvalues> = StiffnessUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type StiffnessUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  StiffnessUnitClass,
  M
>;

/**
 * A unit of {@link Stiffness}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N/m`
 */
export type NewtonPerMetre = StiffnessUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<NewtonPerMetre, JoulePerSquareMetre>>();
  assert<Equals<NewtonPerMetre, Divide<Newton, Metre>>>();
}
