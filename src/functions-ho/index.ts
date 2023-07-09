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
 * Add a value by the given value.
 */
export function add<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (b + a) as OperationIO<T>;
}

/**
 * Subtract one value from the given value.
 */
export function sub<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (b - a) as OperationIO<T>;
}

/**
 * Multiple a value by the given value.
 */
export function mul<A extends number>(
  a: OperationIO<A>,
): <B extends number>(b: OperationIO<B>) => OperationIO<Multiply<B, A>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Casting to actual type fails for some reason.
  return (b) => (b * a) as any;
}

/**
 * Divide one value by the given value.
 */
export function div<A extends number>(
  a: OperationIO<A>,
): <B extends number>(b: OperationIO<B>) => OperationIO<Divide<B, A>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Casting to actual type fails for some reason.
  return (b) => (b / a) as any;
}

/**
 * Modulo operator.
 */
export function mod<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (b % a) as OperationIO<T>;
}

/**
 * Perform mathematic modular arithmetic.
 */
export function modSafe<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (((b % a) + a) % a) as OperationIO<T>;
}

type PowFunction<E extends number, B extends number> = E extends UnknownUnit
  ? never
  : E extends -1
  ? (b: OperationIO<B>) => OperationIO<Inverse<B>>
  : E extends 0
  ? (b: OperationIO<B>) => OperationIO<B> extends UnknownUnit ? Unit<{}> : 1
  : E extends 0.5
  ? (b: OperationIO<B>) => OperationIO<DivideUnitExponents<B, 2>>
  : E extends 1
  ? (b: OperationIO<B>) => OperationIO<B>
  : E extends 2
  ? (b: OperationIO<B>) => OperationIO<Multiply<B, B>>
  : E extends 3
  ? (b: OperationIO<B>) => OperationIO<Multiply<B, Multiply<B, B>>>
  : E extends 4
  ? (b: OperationIO<B>) => OperationIO<Multiply<B, Multiply<B, Multiply<B, B>>>>
  : (b: OperationIO<B>) => OperationIO<number>;

/**
 * Put a number to the power of the given value.
 */
export function pow<E extends number>(exponent: E) {
  return <B extends number>(base: Parameters<PowFunction<E, B>>[0]) =>
    (base ** exponent) as ReturnType<PowFunction<E, B>>;
}

/**
 * Equal: Compare if a value is equal to the given value.
 */
export function eq<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b === a;
}

/**
 * Greater Than: Compare if a value is greater than the given value.
 */
export function gt<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b > a;
}

/**
 * Greater Than or Equal: Compare if a value is greater than or equal to the given value.
 */
export function gte<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b >= a;
}

/**
 * Less Than: Compare if a value is less than the given value.
 */
export function lt<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b < a;
}

/**
 * Less Than or Equal: Compare if a value is less than or equal to the given value.
 */
export function lte<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b <= a;
}
