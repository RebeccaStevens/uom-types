// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type Multiply,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type Kilo } from "../modifiers";

import { type Gram, type Joule, type Kelvin } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type SpecificEntropyUnitClass = SiUnitClass<{
  Metre: 2;
  Second: -2;
  Kelvin: -1;
}>;

/**
 * @group Abstract Unit
 * @category Thermodynamic
 */
export type SpecificEntropy = AbstractUnitFrom<SpecificEntropyUnitClass>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type SpecificEntropyUnit<M extends UnitSubvalues> =
  SpecificEntropyUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Thermodynamic
 */
export type SpecificEntropyUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpecificEntropyUnitClass,
  M
>;

/**
 * A unit of {@link SpecificEntropy}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `J/(K⋅kg)`
 */
export type JoulePerKilogramKelvin = SpecificEntropyUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<JoulePerKilogramKelvin, Divide<Joule, Multiply<Kelvin, Kilo<Gram>>>>
  >();
}
