/**
 * @module uom-types/functions/higher-order
 */

import {
  type AbstractUnit,
  type Divide,
  type DivideUnitExponents,
  type Inverse,
  type Multiply,
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
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (b + a) as OperationIO<T>;
}

/**
 * Subtract one value from another with the same units.
 *
 * @category Math
 */
export function sub<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (b - a) as OperationIO<T>;
}

/**
 * Multiple a value by the given value.
 *
 * @category Math
 */
export function mul<A extends number>(
  a: A,
): <B extends number>(b: B) => Multiply<B, A> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return -- Casting to actual type fails for some reason.
  return (b) => (b * a) as any;
}

/**
 * Divide one value by the given value.
 *
 * @category Math
 */
export function div<A extends number>(
  a: A,
): <B extends number>(b: B) => Divide<B, A> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return -- Casting to actual type fails for some reason.
  return (b) => (b / a) as any;
}

/**
 * Modulo operator.
 *
 * @category Math
 */
export function mod<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (b % a) as OperationIO<T>;
}

/**
 * Perform mathematic modular arithmetic.
 *
 * @category Math
 */
export function modSafe<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (((b % a) + a) % a) as OperationIO<T>;
}

type PowFunction<E extends number, B extends number> = E extends UnknownUnit
  ? never
  : E extends UnknownAbstractUnit
  ? never
  : E extends -1
  ? (b: B) => Inverse<B>
  : E extends 0
  ? (
      b: B,
    ) => B extends UnknownUnit
      ? Unit<{}>
      : B extends UnknownAbstractUnit
      ? AbstractUnit<{}>
      : 1
  : E extends 0.5
  ? (b: B) => DivideUnitExponents<B, 2>
  : E extends 1
  ? (b: B) => B
  : E extends 2
  ? (b: B) => Multiply<B, B>
  : E extends 3
  ? (b: B) => Multiply<B, Multiply<B, B>>
  : E extends 4
  ? (b: B) => Multiply<B, Multiply<B, Multiply<B, B>>>
  : (b: B) => number;

/**
 * Put a number to the power of the given value.
 *
 * @category Math
 */
export function pow<E extends number>(exponent: E) {
  return <B extends number>(base: Parameters<PowFunction<E, B>>[0]) =>
    (base ** exponent) as ReturnType<PowFunction<E, B>>;
}

/**
 * Equal: Compare if a value is equal to the given value.
 *
 * @category Math
 */
export function eq<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b === a;
}

/**
 * Greater Than: Compare if a value is greater than the given value.
 *
 * @category Math
 */
export function gt<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b > a;
}

/**
 * Greater Than or Equal: Compare if a value is greater than or equal to the given value.
 *
 * @category Math
 */
export function gte<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b >= a;
}

/**
 * Less Than: Compare if a value is less than the given value.
 *
 * @category Math
 */
export function lt<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b < a;
}

/**
 * Less Than or Equal: Compare if a value is less than or equal to the given value.
 *
 * @category Math
 */
export function lte<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b <= a;
}
