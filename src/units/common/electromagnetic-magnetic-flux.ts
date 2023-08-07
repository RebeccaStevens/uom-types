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
import { type Square } from "../modifiers";

import {
  type Metre,
  type Ampere,
  type Henry,
  type Second,
  type Tesla,
  type Volt,
} from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticFluxUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Second: -2;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticFlux = AbstractUnitFrom<MagneticFluxUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxUnit<M extends UnitSubvalues> = MagneticFluxUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticFluxUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticFluxUnitClass,
  M
>;

/**
 * A unit of {@link MagneticFlux}.
 *
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 *
 * @group Units
 * @category Derived
 * @symbol `Wb`
 */
export type Weber = MagneticFluxUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Weber, Multiply<Volt, Second>>>();
  assert<Equals<Weber, Multiply<Tesla, Square<Metre>>>>();
  assert<Equals<Weber, Multiply<Henry, Ampere>>>();
}
