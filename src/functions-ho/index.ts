import {
  type Divide,
  type Multiply,
  type Inverse,
  type UnknownUnit,
} from "uom-types";

type OperationResult<T extends number> = T extends UnknownUnit ? T : number;

/**
 * Add a value by the given value.
 */
export function add<T extends number>(a: T): (b: T) => OperationResult<T> {
  return (b) => (a + b) as OperationResult<T>;
}

/**
 * Subtract one value from the given value.
 */
export function sub<T extends number>(a: T): (b: T) => OperationResult<T> {
  return (b) => (b - a) as OperationResult<T>;
}

/**
 * Multiple a value by the given value.
 */
export function mul<T extends number>(a: T): (b: T) => OperationResult<T> {
  return (b) => (a * b) as OperationResult<T>;
}

/**
 * Divide one value by the given value.
 */
export function div<T extends number>(a: T): (b: T) => OperationResult<T> {
  return (b) => (b / a) as OperationResult<T>;
}

/**
 * Modulo operator.
 */
export function mod<T extends number>(a: T): (b: T) => OperationResult<T> {
  return (b) => (b % a) as OperationResult<T>;
}

/**
 * Perform mathematic modular arithmetic.
 */
export function modSafe<T extends number>(a: T): (b: T) => OperationResult<T> {
  return (b) => (((b % a) + a) % a) as OperationResult<T>;
}

type PowFunction<A extends number, B extends number> = A extends -1
  ? (b: B) => OperationResult<Inverse<B>>
  : A extends 0
  ? (b: B) => 1
  : A extends 0.5
  ? (b: B) => OperationResult<Divide<B, 2>>
  : A extends 1
  ? (b: B) => B
  : A extends 2
  ? (b: B) => OperationResult<Multiply<B, B>>
  : A extends 3
  ? (b: B) => OperationResult<Multiply<B, Multiply<B, B>>>
  : A extends 4
  ? (b: B) => OperationResult<Multiply<B, Multiply<B, Multiply<B, B>>>>
  : (b: B) => OperationResult<number>;

/**
 * Put a number to the power of the given value.
 */
export function pow<A extends number, B extends number>(
  a: A,
): PowFunction<A, B> {
  return ((b: B) => b ** a) as PowFunction<A, B>;
}

/**
 * Take the square root of the given value.
 */
export function sqrt<T extends number>(): (
  value: T,
) => OperationResult<Divide<T, 2>> {
  return pow(0.5);
}

/**
 * Equal: Compare if a value is equal to the given value.
 */
export function eq<A extends number>(a: A): (b: A) => boolean {
  return (b) => b === a;
}

/**
 * Greater Than: Compare if a value is greater than the given value.
 */
export function gt<A extends number>(a: A): (b: A) => boolean {
  return (b) => b > a;
}

/**
 * Greater Than or Equal: Compare if a value is greater than or equal to the given value.
 */
export function gte<A extends number>(a: A): (b: A) => boolean {
  return (b) => b >= a;
}

/**
 * Less Than: Compare if a value is less than the given value.
 */
export function lt<A extends number>(a: A): (b: A) => boolean {
  return (b) => b < a;
}

/**
 * Less Than or Equal: Compare if a value is less than or equal to the given value.
 */
export function lte<A extends number>(a: A): (b: A) => boolean {
  return (b) => b <= a;
}
