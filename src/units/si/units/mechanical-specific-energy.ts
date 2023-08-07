// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type Kilo } from "../modifiers";

import { type Gram, type Joule } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpecificEnergyUnitClass = SiUnitClass<{
  Metre: 2;
  Second: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type SpecificEnergy = AbstractUnitFrom<SpecificEnergyUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type SpecificEnergyUnit<M extends UnitSubvalues> =
  SpecificEnergyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type SpecificEnergyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpecificEnergyUnitClass,
  M
>;

/**
 * A unit of {@link SpecificEnergy}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/kg`
 */
export type JoulePerKilogram = SpecificEnergyUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<JoulePerKilogram, Divide<Joule, Kilo<Gram>>>>();
}
