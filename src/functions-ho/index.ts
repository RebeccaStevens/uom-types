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
export function add<T extends UnitCore<any, any>>(a: T): (b: T) => T;

/**
 * Add two values with the same units together.
 */
export function add<T extends AbstractUnitCore<any>>(a: T): (b: T) => T;

/**
 * Add two values together.
 */
export function add<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T>;

export function add<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (b + a) as OperationIO<T>;
}

/**
 * Subtract one value from another with the same units.
 */
export function sub<T extends UnitCore<any, any>>(a: T): (b: T) => T;

/**
 * Subtract one value from another with the same units.
 */
export function sub<T extends AbstractUnitCore<any>>(a: T): (b: T) => T;

/**
 * Subtract one value from another.
 */
export function sub<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T>;

export function sub<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (b - a) as OperationIO<T>;
}

/**
 * Multiple a value by the given value.
 */
export function mul<A extends number>(
  a: A,
): <B extends number>(b: B) => MultiplyUnit<B, A> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return -- Casting to actual type fails for some reason.
  return (b) => (b * a) as any;
}

/**
 * Divide one value by the given value.
 */
export function div<A extends number>(
  a: A,
): <B extends number>(b: B) => DivideUnit<B, A> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return -- Casting to actual type fails for some reason.
  return (b) => (b / a) as any;
}

/**
 * Modulo operator.
 */
export function mod<T extends UnitCore<any, any>>(a: T): (b: T) => T;

/**
 * Modulo operator.
 */
export function mod<T extends AbstractUnitCore<any>>(a: T): (b: T) => T;

/**
 * Modulo operator.
 */
export function mod<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T>;

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
export function modSafe<T extends UnitCore<any, any>>(a: T): (b: T) => T;

/**
 * Perform mathematic modular arithmetic.
 */
export function modSafe<T extends AbstractUnitCore<any>>(a: T): (b: T) => T;

/**
 * Perform mathematic modular arithmetic.
 */
export function modSafe<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T>;

export function modSafe<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => OperationIO<T> {
  return (b) => (((b % a) + a) % a) as OperationIO<T>;
}

type PowFunction<E extends number, B extends number> = E extends UnitCore<
  any,
  any
>
  ? never
  : E extends AbstractUnitCore<any>
  ? never
  : E extends -1
  ? (b: B) => InverseUnit<B>
  : E extends 0
  ? (
      b: B,
    ) => B extends UnitCore<any>
      ? UnitCore<{}>
      : B extends AbstractUnitCore<any>
      ? AbstractUnitCore<{}>
      : 1
  : E extends 0.5
  ? (b: B) => DivideUnitExponents<B, 2>
  : E extends 1
  ? (b: B) => B
  : E extends 2
  ? (b: B) => MultiplyUnit<B, B>
  : E extends 3
  ? (b: B) => MultiplyUnit<B, MultiplyUnit<B, B>>
  : E extends 4
  ? (b: B) => MultiplyUnit<B, MultiplyUnit<B, MultiplyUnit<B, B>>>
  : (b: B) => number;

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
export function eq<T extends UnitCore<any, any>>(a: T): (b: T) => boolean;

/**
 * Equal: Compare if a value is equal to the given value.
 */
export function eq<T extends AbstractUnitCore<any>>(a: T): (b: T) => boolean;

/**
 * Equal: Compare if a value is equal to the given value.
 */
export function eq<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean;

export function eq<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b === a;
}

/**
 * Greater Than: Compare if a value is greater than the given value.
 */
export function gt<T extends UnitCore<any, any>>(a: T): (b: T) => boolean;

/**
 * Greater Than: Compare if a value is greater than the given value.
 */
export function gt<T extends AbstractUnitCore<any>>(a: T): (b: T) => boolean;

/**
 * Greater Than: Compare if a value is greater than the given value.
 */
export function gt<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean;

export function gt<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b > a;
}

/**
 * Greater Than or Equal: Compare if a value is greater than or equal to the given value.
 */
export function gte<T extends UnitCore<any, any>>(a: T): (b: T) => boolean;

/**
 * Greater Than or Equal: Compare if a value is greater than or equal to the given value.
 */
export function gte<T extends AbstractUnitCore<any>>(a: T): (b: T) => boolean;

/**
 * Greater Than or Equal: Compare if a value is greater than or equal to the given value.
 */
export function gte<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean;

export function gte<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b >= a;
}

/**
 * Less Than: Compare if a value is less than the given value.
 */
export function lt<T extends UnitCore<any, any>>(a: T): (b: T) => boolean;

/**
 * Less Than: Compare if a value is less than the given value.
 */
export function lt<T extends AbstractUnitCore<any>>(a: T): (b: T) => boolean;

/**
 * Less Than: Compare if a value is less than the given value.
 */
export function lt<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean;

export function lt<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b < a;
}

/**
 * Less Than or Equal: Compare if a value is less than or equal to the given value.
 */
export function lte<T extends UnitCore<any, any>>(a: T): (b: T) => boolean;

/**
 * Less Than or Equal: Compare if a value is less than or equal to the given value.
 */
export function lte<T extends AbstractUnitCore<any>>(a: T): (b: T) => boolean;

/**
 * Less Than or Equal: Compare if a value is less than or equal to the given value.
 */
export function lte<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean;

export function lte<T extends number>(
  a: OperationIO<T>,
): (b: OperationIO<T>) => boolean {
  return (b) => b <= a;
}
