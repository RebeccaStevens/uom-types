import {
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
