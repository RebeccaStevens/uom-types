import {
  type AbstractUnitCore,
  type DivideUnitExponents,
  type DivideUnit,
  type MultiplyUnit,
  type InverseUnit,
  type UnitCore,
} from "#uom-types";

type OperationIO<T extends number> = T extends UnitCore<any, any>
  ? T
  : T extends AbstractUnitCore<any>
  ? T
  : number;

/**
 * Add two values with the same units together.
 */
export function add<T extends UnitCore<any, any>>(a: T, b: T): T;

/**
 * Add two values with the same units together.
 */
export function add<T extends AbstractUnitCore<any>>(a: T, b: T): T;

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
export function sub<T extends UnitCore<any, any>>(a: T, b: T): T;

/**
 * Subtract one value from another with the same units.
 */
export function sub<T extends AbstractUnitCore<any>>(a: T, b: T): T;

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
export function mod<T extends UnitCore<any, any>>(a: T, b: T): T;

/**
 * Modulo operator.
 *
 * @param a - Must be an integer.
 * @param b - Must be an integer.
 * @returns `a % b`
 */
export function mod<T extends AbstractUnitCore<any>>(a: T, b: T): T;

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
export function modSafe<T extends UnitCore<any, any>>(a: T, b: T): T;

/**
 * Perform mathematic modular arithmetic.
 *
 * @param a - Must be an integer.
 * @param b - Must be a positive integer.
 * @returns An integer between zero (inclusive) and `b` (exclusive).
 */
export function modSafe<T extends AbstractUnitCore<any>>(a: T, b: T): T;

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
): B extends UnitCore<any>
  ? UnitCore<{}>
  : B extends AbstractUnitCore<any>
  ? AbstractUnitCore<{}>
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
  exponent: E extends UnitCore<any>
    ? never
    : E extends AbstractUnitCore<any>
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
export function negate<T extends UnitCore<any, any>>(value: T): T;

/**
 * Returns the negative of the given value.
 */
export function negate<T extends AbstractUnitCore<any>>(value: T): T;

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
export function abs<T extends UnitCore<any, any>>(value: T): T;

/**
 * Returns the absolute value of the given value.
 */
export function abs<T extends AbstractUnitCore<any>>(value: T): T;

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
export function floor<T extends UnitCore<any, any>>(value: T): T;

/**
 * Returns the greatest integer less than or equal to the given value.
 */
export function floor<T extends AbstractUnitCore<any>>(value: T): T;

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
export function ceil<T extends UnitCore<any, any>>(value: T): T;

/**
 * Returns the smallest integer greater than or equal the given value.
 */
export function ceil<T extends AbstractUnitCore<any>>(value: T): T;

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
export function round<T extends UnitCore<any, any>>(value: T): T;

/**
 * Returns the given value rounded to the nearest integer.
 */
export function round<T extends AbstractUnitCore<any>>(value: T): T;

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
export function max<T extends UnitCore<any, any>>(values: Iterable<T>): T;

/**
 * Returns the larger value in the given collection.
 */
export function max<T extends AbstractUnitCore<any>>(values: Iterable<T>): T;

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
export function min<T extends UnitCore<any, any>>(values: Iterable<T>): T;

/**
 * Returns the smallest value in the given collection.
 */
export function min<T extends AbstractUnitCore<any>>(values: Iterable<T>): T;

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
export function sum<T extends UnitCore<any, any>>(values: Iterable<T>): T;

/**
 * Takes the sum of all the values in the given collection.
 */
export function sum<T extends AbstractUnitCore<any>>(values: Iterable<T>): T;

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
export function eq<T extends UnitCore<any, any>>(a: T, b: T): boolean;

/**
 * Equal: Compare if two values are equal.
 */
export function eq<T extends AbstractUnitCore<any>>(a: T, b: T): boolean;

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
export function gt<T extends UnitCore<any, any>>(a: T, b: T): boolean;

/**
 * Greater Than: Compare if the first value is greater than the second.
 */
export function gt<T extends AbstractUnitCore<any>>(a: T, b: T): boolean;

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
export function gte<T extends UnitCore<any, any>>(a: T, b: T): boolean;

/**
 * Greater Than or Equal: Compare if the first value is greater than or equal to the second.
 */
export function gte<T extends AbstractUnitCore<any>>(a: T, b: T): boolean;

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
export function lt<T extends UnitCore<any, any>>(a: T, b: T): boolean;

/**
 * Less Than: Compare if the first value is less than the second.
 */
export function lt<T extends AbstractUnitCore<any>>(a: T, b: T): boolean;

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
export function lte<T extends UnitCore<any, any>>(a: T, b: T): boolean;

/**
 * Less Than or Equal: Compare if the first value is less than or equal to the second.
 */
export function lte<T extends AbstractUnitCore<any>>(a: T, b: T): boolean;

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
