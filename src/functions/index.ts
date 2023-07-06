import {
  type Divide,
  type Multiply,
  type Inverse,
  type UnknownUnit,
} from "uom-types";

type OperationResult<T extends number> = T extends UnknownUnit ? T : number;

/**
 * Add two values together.
 */
export function add<T extends number>(a: T, b: T): OperationResult<T> {
  return (a + b) as OperationResult<T>;
}

/**
 * Subtract one value from another.
 */
export function sub<T extends number>(a: T, b: T): OperationResult<T> {
  return (a - b) as OperationResult<T>;
}

/**
 * Multiple two values together.
 */
export function mul<T extends number>(a: T, b: T): OperationResult<T> {
  return (a * b) as OperationResult<T>;
}

/**
 * Divide one value by another.
 */
export function div<T extends number>(a: T, b: T): OperationResult<T> {
  return (a / b) as OperationResult<T>;
}

/**
 * Modulo operator.
 *
 * @param a - Must be an integer.
 * @param b - Must be an integer.
 * @returns `a % b`
 */
export function mod<T extends number>(a: T, b: T): OperationResult<T> {
  return (a % b) as OperationResult<T>;
}

/**
 * Perform mathematic modular arithmetic.
 *
 * @param a - Must be an integer.
 * @param b - Must be a positive integer.
 * @returns An integer between zero (inclusive) and `b` (exclusive).
 */
export function modSafe<T extends number>(a: T, b: T): OperationResult<T> {
  return (((a % b) + b) % b) as OperationResult<T>;
}

/**
 * Put a number to the power of -1.
 */
export function pow<T extends number>(a: T, b: -1): OperationResult<Inverse<T>>;

/**
 * Put a number to the power of 0.
 */
export function pow<T extends number>(a: T, b: 0): 1;

/**
 * Put a number to the power of 1/2.
 */
export function pow<T extends number>(
  a: T,
  b: 0.5,
): OperationResult<Divide<T, 2>>;

/**
 * Put a number to the power of 1.
 */
export function pow<T extends number>(a: T, b: 1): T;

/**
 * Put a number to the power of 2.
 */
export function pow<T extends number>(
  a: T,
  b: 2,
): OperationResult<Multiply<T, T>>;

/**
 * Put a number to the power of 3.
 */
export function pow<T extends number>(
  a: T,
  b: 3,
): OperationResult<Multiply<T, Multiply<T, T>>>;

/**
 * Put a number to the power of 4.
 */
export function pow<T extends number>(
  a: T,
  b: 4,
): OperationResult<Multiply<T, Multiply<T, Multiply<T, T>>>>;

/**
 * Put one number to the power of the other.
 */
export function pow<T extends number>(a: T, b: T): number;

export function pow(a: number, b: number): number {
  return a ** b;
}

/**
 * Take the square root of the given value.
 */
export function sqrt<T extends number>(
  value: T,
): OperationResult<Divide<T, 2>> {
  return pow(value, 0.5);
}

/**
 * Inverse the given value.
 */
export function inverse<T extends number>(
  value: T,
): OperationResult<Inverse<T>> {
  return pow(value, -1);
}

/**
 * Make the given value negative.
 */
export function negate<T extends number>(value: T): OperationResult<T> {
  return -value as OperationResult<T>;
}

/**
 * Returns the absolute value of a number.
 */
export function abs<T extends number>(value: T): OperationResult<T> {
  return Math.abs(value) as OperationResult<T>;
}

/**
 * Returns the greatest integer less than or equal to the given value.
 */
export function floor<T extends number>(value: T): OperationResult<T> {
  return Math.floor(value) as OperationResult<T>;
}

/**
 * Returns the smallest integer greater than or equal the given value.
 */
export function ceil<T extends number>(value: T): OperationResult<T> {
  return Math.ceil(value) as OperationResult<T>;
}

/**
 * Returns the given value rounded to the nearest integer.
 */
export function round<T extends number>(value: T): OperationResult<T> {
  return Math.round(value) as OperationResult<T>;
}

/**
 * Returns the larger value in the given collection.
 */
export function max<T extends number>(values: Iterable<T>): OperationResult<T> {
  return Math.max(...values) as OperationResult<T>;
}

/**
 * Returns the smallest value in the given collection.
 */
export function min<T extends number>(values: Iterable<T>): OperationResult<T> {
  return Math.min(...values) as OperationResult<T>;
}

/**
 * Takes the sum of all the values in the given collection.
 */
export function sum<T extends number>(
  values: ReadonlyArray<T>,
): OperationResult<T> {
  return values.reduce(add as (a: T, b: T) => T, 0 as T) as OperationResult<T>;
}

/**
 * Takes the product of all the values in the given collection.
 */
export function product<T extends number>(
  values: ReadonlyArray<T>,
): OperationResult<T> {
  return values.reduce(mul as (a: T, b: T) => T, 1 as T) as OperationResult<T>;
}

/**
 * Equal: Compare if two values are equal.
 */
export function eq<A extends number>(a: A, b: A): boolean {
  return a === b;
}

/**
 * Greater Than: Compare if the first value is greater than the second.
 */
export function gt<A extends number>(a: A, b: A): boolean {
  return a > b;
}

/**
 * Greater Than or Equal: Compare if the first value is greater than or equal to the second.
 */
export function gte<A extends number>(a: A, b: A): boolean {
  return a >= b;
}

/**
 * Less Than: Compare if the first value is less than the second.
 */
export function lt<A extends number>(a: A, b: A): boolean {
  return a < b;
}

/**
 * Less Than or Equal: Compare if the first value is less than or equal to the second.
 */
export function lte<A extends number>(a: A, b: A): boolean {
  return a <= b;
}
