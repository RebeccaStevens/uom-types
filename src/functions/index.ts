import {
  type AbstractUnit,
  type DivideUnit,
  type DivideUnitExponents,
  type InverseUnit,
  type MultiplyUnit,
  type Unit,
  type UnknownAbstractUnit,
  type UnknownUnit,
} from "#uom-types";

type OperationIO<T extends number> = T extends UnknownUnit
  ? T
  : T extends UnknownAbstractUnit
  ? T
  : number;

/**
 * Add two values with the same units together.
 */
export function add<T extends UnknownUnit>(a: T, b: T): T;

/**
 * Add two values with the same units together.
 */
export function add<T extends UnknownAbstractUnit>(a: T, b: T): T;

/**
 * Add two values together.
 */
export function add<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T>;

export function add<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T> {
  return (a + b) as OperationIO<T>;
}

/**
 * Subtract one value from another with the same units.
 */
export function sub<T extends UnknownUnit>(a: T, b: T): T;

/**
 * Subtract one value from another with the same units.
 */
export function sub<T extends UnknownAbstractUnit>(a: T, b: T): T;

/**
 * Subtract one value from another.
 */
export function sub<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T>;

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
  a: A,
  b: B,
): MultiplyUnit<A, B> {
  return (a * b) as MultiplyUnit<A, B>;
}

/**
 * Divide one value by another.
 */
export function div<A extends number, B extends number>(
  a: A,
  b: B,
): DivideUnit<A, B> {
  return (a / b) as DivideUnit<A, B>;
}

/**
 * Modulo operator.
 *
 * @param a - Must be an integer.
 * @param b - Must be an integer.
 * @returns `a % b`
 */
export function mod<T extends UnknownUnit>(a: T, b: T): T;

/**
 * Modulo operator.
 *
 * @param a - Must be an integer.
 * @param b - Must be an integer.
 * @returns `a % b`
 */
export function mod<T extends UnknownAbstractUnit>(a: T, b: T): T;

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
): OperationIO<T>;

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
export function modSafe<T extends UnknownUnit>(a: T, b: T): T;

/**
 * Perform mathematic modular arithmetic.
 *
 * @param a - Must be an integer.
 * @param b - Must be a positive integer.
 * @returns An integer between zero (inclusive) and `b` (exclusive).
 */
export function modSafe<T extends UnknownAbstractUnit>(a: T, b: T): T;

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
): OperationIO<T>;

export function modSafe<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): OperationIO<T> {
  return (((a % b) + b) % b) as OperationIO<T>;
}

/**
 * Put a number to the power of -1.
 */
export function pow<B extends number>(base: B, exponent: -1): InverseUnit<B>;

/**
 * Put a number to the power of 0.
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
 */
export function pow<B extends number>(
  base: B,
  exponent: 0.5,
): DivideUnitExponents<B, 2>;

/**
 * Put a number to the power of 1.
 */
export function pow<E extends number>(base: E, exponent: 1): E;

/**
 * Put a number to the power of 2.
 */
export function pow<B extends number>(base: B, exponent: 2): MultiplyUnit<B, B>;

/**
 * Put a number to the power of 3.
 */
export function pow<B extends number>(
  base: B,
  exponent: 3,
): MultiplyUnit<B, MultiplyUnit<B, B>>;

/**
 * Put a number to the power of 4.
 */
export function pow<B extends number>(
  base: B,
  exponent: 4,
): MultiplyUnit<B, MultiplyUnit<B, MultiplyUnit<B, B>>>;

/**
 * Put one number to the power of the other.
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
 */
export function sqrt<T extends number>(value: T): DivideUnitExponents<T, 2> {
  return pow(value, 0.5);
}

/**
 * Inverse the given value.
 */
export function inverse<T extends number>(value: T): InverseUnit<T> {
  return pow(value, -1);
}

/**
 * Returns the negative of the given value.
 */
export function negate<T extends UnknownUnit>(value: T): T;

/**
 * Returns the negative of the given value.
 */
export function negate<T extends UnknownAbstractUnit>(value: T): T;

/**
 * Returns the negative of the given value.
 */
export function negate<T extends number>(value: OperationIO<T>): OperationIO<T>;

export function negate<T extends number>(
  value: OperationIO<T>,
): OperationIO<T> {
  return -value as OperationIO<T>;
}

/**
 * Returns the absolute value of the given value.
 */
export function abs<T extends UnknownUnit>(value: T): T;

/**
 * Returns the absolute value of the given value.
 */
export function abs<T extends UnknownAbstractUnit>(value: T): T;

/**
 * Returns the absolute value of the given value.
 */
export function abs<T extends number>(value: OperationIO<T>): OperationIO<T>;

export function abs<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.abs(value) as OperationIO<T>;
}

/**
 * Returns the greatest integer less than or equal to the given value.
 */
export function floor<T extends UnknownUnit>(value: T): T;

/**
 * Returns the greatest integer less than or equal to the given value.
 */
export function floor<T extends UnknownAbstractUnit>(value: T): T;

/**
 * Returns the greatest integer less than or equal to the given value.
 */
export function floor<T extends number>(value: OperationIO<T>): OperationIO<T>;

export function floor<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.floor(value) as OperationIO<T>;
}

/**
 * Returns the smallest integer greater than or equal the given value.
 */
export function ceil<T extends UnknownUnit>(value: T): T;

/**
 * Returns the smallest integer greater than or equal the given value.
 */
export function ceil<T extends UnknownAbstractUnit>(value: T): T;

/**
 * Returns the smallest integer greater than or equal the given value.
 */
export function ceil<T extends number>(value: OperationIO<T>): OperationIO<T>;

export function ceil<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.ceil(value) as OperationIO<T>;
}

/**
 * Returns the given value rounded to the nearest integer.
 */
export function round<T extends UnknownUnit>(value: T): T;

/**
 * Returns the given value rounded to the nearest integer.
 */
export function round<T extends UnknownAbstractUnit>(value: T): T;

/**
 * Returns the given value rounded to the nearest integer.
 */
export function round<T extends number>(value: OperationIO<T>): OperationIO<T>;

export function round<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.round(value) as OperationIO<T>;
}

/**
 * Returns the larger value in the given collection.
 */
export function max<T extends UnknownUnit>(values: Iterable<T>): T;

/**
 * Returns the larger value in the given collection.
 */
export function max<T extends UnknownAbstractUnit>(values: Iterable<T>): T;

/**
 * Returns the larger value in the given collection.
 */
export function max<T extends number>(values: Iterable<T>): OperationIO<T>;

export function max<T extends number>(values: Iterable<T>): OperationIO<T> {
  return Math.max(...values) as OperationIO<T>;
}

/**
 * Returns the smallest value in the given collection.
 */
export function min<T extends UnknownUnit>(values: Iterable<T>): T;

/**
 * Returns the smallest value in the given collection.
 */
export function min<T extends UnknownAbstractUnit>(values: Iterable<T>): T;

/**
 * Returns the smallest value in the given collection.
 */
export function min<T extends number>(values: Iterable<T>): OperationIO<T>;

export function min<T extends number>(values: Iterable<T>): OperationIO<T> {
  return Math.min(...values) as OperationIO<T>;
}

/**
 * Takes the sum of all the values in the given collection.
 */
export function sum<T extends UnknownUnit>(values: Iterable<T>): T;

/**
 * Takes the sum of all the values in the given collection.
 */
export function sum<T extends UnknownAbstractUnit>(values: Iterable<T>): T;

/**
 * Takes the sum of all the values in the given collection.
 */
export function sum<T extends number>(values: Iterable<T>): OperationIO<T>;

export function sum<T extends number>(values: Iterable<T>): OperationIO<T> {
  return [...values].reduce(add, 0) as OperationIO<T>;
}

/**
 * Equal: Compare if two values are equal.
 */
export function eq<T extends UnknownUnit>(a: T, b: T): boolean;

/**
 * Equal: Compare if two values are equal.
 */
export function eq<T extends UnknownAbstractUnit>(a: T, b: T): boolean;

/**
 * Equal: Compare if two values are equal.
 */
export function eq<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean;

export function eq<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a === b;
}

/**
 * Greater Than: Compare if the first value is greater than the second.
 */
export function gt<T extends UnknownUnit>(a: T, b: T): boolean;

/**
 * Greater Than: Compare if the first value is greater than the second.
 */
export function gt<T extends UnknownAbstractUnit>(a: T, b: T): boolean;

/**
 * Greater Than: Compare if the first value is greater than the second.
 */
export function gt<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean;

export function gt<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a > b;
}

/**
 * Greater Than or Equal: Compare if the first value is greater than or equal to the second.
 */
export function gte<T extends UnknownUnit>(a: T, b: T): boolean;

/**
 * Greater Than or Equal: Compare if the first value is greater than or equal to the second.
 */
export function gte<T extends UnknownAbstractUnit>(a: T, b: T): boolean;

/**
 * Greater Than or Equal: Compare if the first value is greater than or equal to the second.
 */
export function gte<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean;

export function gte<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a >= b;
}

/**
 * Less Than: Compare if the first value is less than the second.
 */
export function lt<T extends UnknownUnit>(a: T, b: T): boolean;

/**
 * Less Than: Compare if the first value is less than the second.
 */
export function lt<T extends UnknownAbstractUnit>(a: T, b: T): boolean;

/**
 * Less Than: Compare if the first value is less than the second.
 */
export function lt<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean;

export function lt<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a < b;
}

/**
 * Less Than or Equal: Compare if the first value is less than or equal to the second.
 */
export function lte<T extends UnknownUnit>(a: T, b: T): boolean;

/**
 * Less Than or Equal: Compare if the first value is less than or equal to the second.
 */
export function lte<T extends UnknownAbstractUnit>(a: T, b: T): boolean;

/**
 * Less Than or Equal: Compare if the first value is less than or equal to the second.
 */
export function lte<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean;

export function lte<T extends number>(
  a: OperationIO<T>,
  b: OperationIO<T>,
): boolean {
  return a <= b;
}
