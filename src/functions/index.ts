import {
  type AbstractUnit,
  type DivideUnits,
  type DivideUnitExponents,
  type InverseUnit,
  type MultiplyUnits,
  type Unit,
  type UnknownAbstractUnit,
  type UnknownUnit,
} from "#uom-types";

type OperationIO<T extends number> = [T] extends [
  UnknownUnit | UnknownAbstractUnit,
]
  ? T
  : number;

/**
 * Add two values with the same units together.
 *
 * @category Math
 */
export function add<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T> {
  return (a + b) as OperationIO<T>;
}

/**
 * Subtract one value from another with the same units.
 *
 * @category Math
 */
export function sub<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T> {
  return (a - b) as OperationIO<T>;
}

/**
 * Multiple two values together.
 *
 * @category Math
 */
export function mul<A extends number, B extends number>(
  a: A,
  b: B,
): MultiplyUnits<A, B> {
  return (a * b) as MultiplyUnits<A, B>;
}

/**
 * Divide one value by another.
 *
 * @category Math
 */
export function div<A extends number, B extends number>(
  a: A,
  b: B,
): DivideUnits<A, B> {
  return (a / b) as DivideUnits<A, B>;
}

/**
 * Modulo operator.
 *
 * @category Math
 * @param a - Must be an integer.
 * @param b - Must be an integer.
 * @returns `a % b`
 */
export function mod<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T> {
  return (a % b) as OperationIO<T>;
}

/**
 * Perform mathematic modular arithmetic.
 *
 * @category Math
 * @param a - Must be an integer.
 * @param b - Must be a positive integer.
 * @returns An integer between zero (inclusive) and `b` (exclusive).
 */
export function modSafe<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T> {
  return (((a % b) + b) % b) as OperationIO<T>;
}

/**
 * Put a number to the power of -1.
 *
 * @category Math
 */
export function pow<B extends number>(base: B, exponent: -1): InverseUnit<B>;

/**
 * Put a number to the power of 0.
 *
 * @category Math
 */
export function pow<B extends number>(
  base: B,
  exponent: 0,
): B extends UnknownUnit
  ? Unit<{}>
  : B extends UnknownAbstractUnit
  ? AbstractUnit<{}>
  : 1;

/**
 * Put a number to the power of 1/2.
 *
 * @category Math
 */
export function pow<B extends number>(
  base: B,
  exponent: 0.5,
): DivideUnitExponents<B, 2>;

/**
 * Put a number to the power of 1.
 *
 * @category Math
 */
export function pow<E extends number>(base: E, exponent: 1): E;

/**
 * Put a number to the power of 2.
 *
 * @category Math
 */
export function pow<B extends number>(
  base: B,
  exponent: 2,
): MultiplyUnits<B, B>;

/**
 * Put a number to the power of 3.
 *
 * @category Math
 */
export function pow<B extends number>(
  base: B,
  exponent: 3,
): MultiplyUnits<B, MultiplyUnits<B, B>>;

/**
 * Put a number to the power of 4.
 *
 * @category Math
 */
export function pow<B extends number>(
  base: B,
  exponent: 4,
): MultiplyUnits<B, MultiplyUnits<B, MultiplyUnits<B, B>>>;

/**
 * Put one number to the power of the other.
 *
 * @category Math
 */
export function pow<B extends number, E extends number>(
  base: B,
  exponent: E extends UnknownUnit
    ? never
    : E extends UnknownAbstractUnit
    ? never
    : E,
): number;

export function pow(base: number, exponent: number): number {
  return base ** exponent;
}

/**
 * Take the square root of the given value.
 *
 * @category Math
 */
export function sqrt<T extends number>(value: T): DivideUnitExponents<T, 2> {
  return pow(value, 0.5);
}

/**
 * Inverse the given value.
 *
 * @category Math
 */
export function inverse<T extends number>(value: T): InverseUnit<T> {
  return pow(value, -1);
}

/**
 * Returns the negative of the given value.
 *
 * @category Math
 */
export function negate<T extends number>(
  value: OperationIO<T>,
): OperationIO<T> {
  return -value as OperationIO<T>;
}

/**
 * Returns the absolute value of the given value.
 *
 * @category Math
 */
export function abs<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.abs(value) as OperationIO<T>;
}

/**
 * Returns the greatest integer less than or equal to the given value.
 *
 * @category Math
 */
export function floor<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.floor(value) as OperationIO<T>;
}

/**
 * Returns the smallest integer greater than or equal the given value.
 *
 * @category Math
 */
export function ceil<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.ceil(value) as OperationIO<T>;
}

/**
 * Returns the given value rounded to the nearest integer.
 *
 * @category Math
 */
export function round<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.round(value) as OperationIO<T>;
}

/**
 * Returns the larger value in the given collection.
 *
 * @category Math
 */
export function max<T extends number>(values: Iterable<T>): OperationIO<T> {
  return Math.max(...values) as OperationIO<T>;
}

/**
 * Returns the smallest value in the given collection.
 *
 * @category Math
 */
export function min<T extends number>(values: Iterable<T>): OperationIO<T> {
  return Math.min(...values) as OperationIO<T>;
}

/**
 * Takes the sum of all the values in the given collection.
 *
 * @category Math
 */
export function sum<T extends number>(values: Iterable<T>): OperationIO<T> {
  return [...values].reduce<number>(add, 0) as OperationIO<T>;
}

/**
 * Equal: Compare if two values are equal.
 *
 * @category Math
 */
export function eq<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a === b;
}

/**
 * Greater Than: Compare if the first value is greater than the second.
 *
 * @category Math
 */
export function gt<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a > b;
}

/**
 * Greater Than or Equal: Compare if the first value is greater than or equal to the second.
 *
 * @category Math
 */
export function gte<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a >= b;
}

/**
 * Less Than: Compare if the first value is less than the second.
 *
 * @category Math
 */
export function lt<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a < b;
}

/**
 * Less Than or Equal: Compare if the first value is less than or equal to the second.
 *
 * @category Math
 */
export function lte<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a <= b;
}
