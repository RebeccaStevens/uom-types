// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import {
  type Joule,
  type Energy,
  type EnergyUnit,
  type EnergyUnitClass,
  type EnergyUnitFrom,
  type Newton,
  type Metre,
} from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type WorkUnitClass = EnergyUnitClass;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Work = Energy;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type WorkUnit<M extends UnitSubvalues> = EnergyUnit<M>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type WorkUnitFrom<M extends UnknownUnitMeta> = EnergyUnitFrom<M>;

/**
 * A unit of {@link Work}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m`
 */
export type NewtonMetre = Joule;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<NewtonMetre, Multiply<Newton, Metre>>>();
}
