import {
  type DivideUnitExponents,
  type Divide,
  type Multiply,
  type Inverse,
  type UnknownUnit,
  type Unit,
} from "#uom-types";

type OperationIO<T extends number> = T extends UnknownUnit ? T : number;

/**
 * Add two values together.
 */
export function add<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T> {
  return (a + b) as OperationIO<T>;
}

/**
 * Subtract one value from another.
 */
export function sub<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T> {
  return (a - b) as OperationIO<T>;
}

/**
 * Multiple two values together.
 */
export function mul<A extends number, B extends number>(
  a: OperationIO<A>,
  b: OperationIO<B>,
): OperationIO<Multiply<A, B>> {
  return (a * b) as OperationIO<Multiply<A, B>>;
}

/**
 * Divide one value by another.
 */
export function div<A extends number, B extends number>(
  a: OperationIO<A>,
  b: OperationIO<B>,
): OperationIO<Divide<A, B>> {
  return (a / b) as OperationIO<Divide<A, B>>;
}

/**
 * Modulo operator.
 *
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
 */
export function pow<B extends number>(
  base: OperationIO<B>,
  exponent: -1,
): OperationIO<Inverse<B>>;

/**
 * Put a number to the power of 0.
 */
export function pow<B extends number>(
  base: OperationIO<B>,
  exponent: 0,
): OperationIO<B> extends UnknownUnit ? Unit<{}> : 1;

/**
 * Put a number to the power of 1/2.
 */
export function pow<B extends number>(
  base: OperationIO<B>,
  exponent: 0.5,
): OperationIO<DivideUnitExponents<B, 2>>;

/**
 * Put a number to the power of 1.
 */
export function pow<E extends number>(base: OperationIO<E>, exponent: 1): E;

/**
 * Put a number to the power of 2.
 */
export function pow<B extends number>(
  base: OperationIO<B>,
  exponent: 2,
): OperationIO<Multiply<B, B>>;

/**
 * Put a number to the power of 3.
 */
export function pow<B extends number>(
  base: OperationIO<B>,
  exponent: 3,
): OperationIO<Multiply<B, Multiply<B, B>>>;

/**
 * Put a number to the power of 4.
 */
export function pow<B extends number>(
  base: OperationIO<B>,
  exponent: 4,
): OperationIO<Multiply<B, Multiply<B, Multiply<B, B>>>>;

/**
 * Put one number to the power of the other.
 */
export function pow<B extends number, E extends number>(
  base: OperationIO<B>,
  exponent: E extends UnknownUnit ? never : E,
): number;

export function pow(base: number, exponent: number): number {
  return base ** exponent;
}

/**
 * Take the square root of the given value.
 */
export function sqrt<T extends number>(
  value: OperationIO<T>,
): OperationIO<DivideUnitExponents<T, 2>> {
  return pow(value, 0.5);
}

/**
 * Inverse the given value.
 */
export function inverse<T extends number>(
  value: OperationIO<T>,
): OperationIO<Inverse<T>> {
  return pow(value, -1);
}

/**
 * Make the given value negative.
 */
export function negate<T extends number>(
  value: OperationIO<T>,
): OperationIO<T> {
  return -value as OperationIO<T>;
}

/**
 * Returns the absolute value of a number.
 */
export function abs<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.abs(value) as OperationIO<T>;
}

/**
 * Returns the greatest integer less than or equal to the given value.
 */
export function floor<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.floor(value) as OperationIO<T>;
}

/**
 * Returns the smallest integer greater than or equal the given value.
 */
export function ceil<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.ceil(value) as OperationIO<T>;
}

/**
 * Returns the given value rounded to the nearest integer.
 */
export function round<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.round(value) as OperationIO<T>;
}

/**
 * Returns the larger value in the given collection.
 */
export function max<T extends number>(values: Iterable<T>): OperationIO<T> {
  return Math.max(...values) as OperationIO<T>;
}

/**
 * Returns the smallest value in the given collection.
 */
export function min<T extends number>(values: Iterable<T>): OperationIO<T> {
  return Math.min(...values) as OperationIO<T>;
}

/**
 * Takes the sum of all the values in the given collection.
 */
export function sum<T extends number>(
  values: ReadonlyArray<T>,
): OperationIO<T> {
  return values.reduce(add<number>, 0) as OperationIO<T>;
}

/**
 * Equal: Compare if two values are equal.
 */
export function eq<A extends number>(a: OperationIO<A>, b: A): boolean {
  return a === b;
}

/**
 * Greater Than: Compare if the first value is greater than the second.
 */
export function gt<A extends number>(a: OperationIO<A>, b: A): boolean {
  return a > b;
}

/**
 * Greater Than or Equal: Compare if the first value is greater than or equal to the second.
 */
export function gte<A extends number>(a: OperationIO<A>, b: A): boolean {
  return a >= b;
}

/**
 * Less Than: Compare if the first value is less than the second.
 */
export function lt<A extends number>(a: OperationIO<A>, b: A): boolean {
  return a < b;
}

/**
 * Less Than or Equal: Compare if the first value is less than or equal to the second.
 */
export function lte<A extends number>(a: OperationIO<A>, b: A): boolean {
  return a <= b;
}
