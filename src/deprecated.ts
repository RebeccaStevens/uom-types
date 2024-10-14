import { type Exponent } from "./exponents";
import { type Pow, type Root } from "./units-operations";

/**
 * Multiple the exponent values of a unit by a number.
 *
 * @deprecated Use {@link Pow} instead.
 */
export type MultiplyUnitExponents<T extends number, E extends Exponent> = Pow<
  T,
  E
>;

/**
 * Divide the exponent values of a unit by a number.
 *
 * @deprecated Use {@link Root} instead.
 */
export type DivideUnitExponents<T extends number, E extends Exponent> = Root<
  T,
  E
>;
