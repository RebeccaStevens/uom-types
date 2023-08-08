// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnit,
  type MultiplyUnitExponents,
  type UnknownAbstractUnit,
  type UnknownUnit,
  type Unit,
} from "#uom-types";

/**
 * Put the given {@link Unit} to the power of 2.
 *
 * @group Modifiers
 * @category General
 * @see {@link MultiplyUnitExponents}
 * @see {@link Cubic}
 */
export type Square<T extends UnknownAbstractUnit | UnknownUnit> =
  MultiplyUnitExponents<T, 2>;

/**
 * Put the given {@link Unit} to the power of 3.
 *
 * @group Modifiers
 * @category General
 * @see {@link MultiplyUnitExponents}
 * @see {@link Square}
 */
export type Cubic<T extends UnknownAbstractUnit | UnknownUnit> =
  MultiplyUnitExponents<T, 3>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<Square<Unit<{ a: 1 }>>, Unit<{ a: 2 }>>>();
  assert<Equals<Square<AbstractUnit<{ a: 1 }>>, AbstractUnit<{ a: 2 }>>>();

  assert<Equals<Cubic<Unit<{ a: 1 }>>, Unit<{ a: 3 }>>>();
  assert<Equals<Cubic<AbstractUnit<{ a: 1 }>>, AbstractUnit<{ a: 3 }>>>();
}
