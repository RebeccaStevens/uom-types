import type { UnknownAbstractUnit, UnknownUnit } from "./core";
import type { Exponent } from "./exponents";
import type { Radian, Unitless } from "./units";
import type { Divide, Inverse, Multiply, Pow, Root } from "./units-operations";

type OperationIO<T extends number> = [T] extends [UnknownUnit | UnknownAbstractUnit] ? T : number;

/**
 * Add two values with the same units together.
 *
 * @category Math
 * @returns `a + b`
 */
export function add<T extends number>(a: OperationIO<T>, b: OperationIO<T>): OperationIO<T>;

/**
 * Add two values with the same units together.
 *
 * @category Math
 * @returns `(a) => a + b`
 */
export function add<T extends number>(b: OperationIO<T>): (a: OperationIO<T>) => OperationIO<T>;

export function add(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a + args[0] : args[0] + args[1];
}

/**
 * Subtract one value from another with the same units.
 *
 * @category Math
 * @returns `a - b`
 */
export function sub<T extends number>(a: OperationIO<T>, b: OperationIO<T>): OperationIO<T>;

/**
 * Subtract one value from another with the same units.
 *
 * @category Math
 * @returns `(a) => a - b`
 */
export function sub<T extends number>(b: OperationIO<T>): (a: OperationIO<T>) => OperationIO<T>;

export function sub(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a - args[0] : args[0] - args[1];
}

/**
 * Multiple two values together.
 *
 * @category Math
 * @returns `a * b`
 */
export function mul<A extends number, B extends number>(a: A, b: B): Multiply<A, B>;

/**
 * Multiple a value by the given value.
 *
 * @category Math
 * @returns `(a) => a * b`
 */
export function mul<B extends number>(b: B): <A extends number>(a: A) => Multiply<A, B>;

export function mul(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a * args[0] : args[0] * args[1];
}

/**
 * Divide one value by another.
 *
 * @category Math
 * @returns `a / b`
 */
export function div<A extends number, B extends number>(a: A, b: B): Divide<A, B>;

/**
 * Divide one value by the given value.
 *
 * @category Math
 * @returns `(a) => a / b`
 */
export function div<B extends number>(b: B): <A extends number>(a: A) => Divide<A, B>;

export function div(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a / args[0] : args[0] / args[1];
}

/**
 * Modulo operator.
 *
 * @category Math
 * @param a - Must be an integer.
 * @param b - Must be an integer.
 * @returns `a % b`
 */
export function mod<T extends number>(a: OperationIO<T>, b: OperationIO<T>): OperationIO<T>;

/**
 * Modulo operator.
 *
 * @category Math
 * @param b - Must be an integer.
 * @returns `(a) => a % b`
 */
export function mod<T extends number>(b: OperationIO<T>): (a: OperationIO<T>) => OperationIO<T>;

export function mod(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a % args[0] : args[0] % args[1];
}

/**
 * Perform mathematic modular arithmetic.
 *
 * @category Math
 * @param a - Must be an integer.
 * @param b - Must be a positive integer.
 * @returns An integer between zero (inclusive) and `b` (exclusive).
 */
export function modSafe<T extends number>(a: OperationIO<T>, b: OperationIO<T>): OperationIO<T>;

/**
 * Perform mathematic modular arithmetic.
 *
 * @category Math
 * @param b - Must be a positive integer.
 * @returns A function that takes a integer and returns an integer between zero (inclusive) and `b` (exclusive).
 */
export function modSafe<T extends number>(b: OperationIO<T>): (a: OperationIO<T>) => OperationIO<T>;

export function modSafe(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1
    ? (a: number) => ((a % args[0]) + args[0]) % args[0]
    : ((args[0] % args[1]) + args[1]) % args[1];
}

type PowResult<B extends number, E extends number> = E extends Unitless
  ? PowResult<B, number>
  : E extends UnknownUnit
    ? never
    : E extends UnknownAbstractUnit
      ? never
      : E extends Exponent
        ? Pow<B, E>
        : E extends 0.5
          ? Root<B, 2>
          : B extends Unitless
            ? B
            : number;

type PowFunction<B extends number, E extends number> = (b: B) => PowResult<B, E>;

type RootResult<B extends number, E extends number> = E extends Unitless
  ? RootResult<B, number>
  : E extends UnknownUnit
    ? never
    : E extends UnknownAbstractUnit
      ? never
      : E extends Exponent
        ? Root<B, E>
        : E extends 0.5
          ? Pow<B, 2>
          : B extends Unitless
            ? B
            : number;

type RootFunction<B extends number, E extends number> = (b: B) => RootResult<B, E>;

/**
 * Raise a number to the power of another.
 *
 * @category Math
 * @returns `base ** exponent`
 */
export function pow<B extends number, E extends number>(base: B, exponent: E): PowResult<B, E>;

/**
 * Put a number to the power of the given value.
 *
 * @category Math
 * @returns `(base) => base ** exponent`
 */
export function pow<E extends number>(
  exponent: E,
): <B extends number>(base: Parameters<PowFunction<B, E>>[0]) => ReturnType<PowFunction<B, E>>;

export function pow(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (b: number) => b ** args[0] : args[0] ** args[1];
}

/**
 * Take the nth root of a number.
 *
 * @category Math
 * @returns `base ** (1 / exponent)`
 */
export function root<B extends number, E extends number>(base: B, exponent: E): RootResult<B, E>;

/**
 * Take the nth root of a number.
 *
 * @category Math
 * @returns `(base) => base ** (1 / exponent)`
 */
export function root<E extends number>(
  exponent: E,
): <B extends number>(base: Parameters<RootFunction<B, E>>[0]) => ReturnType<RootFunction<B, E>>;

export function root(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (b: number) => b ** (1 / args[0]) : args[0] ** (1 / args[1]);
}

/**
 * Take the square root of the given value.
 *
 * @category Math
 * @returns `value ** (1/2)`
 */
export function sqrt<T extends number>(value: T): Root<T, 2> {
  return root(value, 2);
}

/**
 * Inverse the given value.
 *
 * @category Math
 * @returns `value ** -1`
 */
export function inverse<T extends number>(value: T): Inverse<T> {
  return pow(value, -1);
}

/**
 * Returns the negative of the given value.
 *
 * @category Math
 * @returns `-value`
 */
export function negate<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return -value as OperationIO<T>;
}

/**
 * Returns the absolute value of the given value.
 *
 * @category Math
 * @returns `Math.abs(value)`
 */
export function abs<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.abs(value) as OperationIO<T>;
}

/**
 * Returns the greatest integer less than or equal to the given value.
 *
 * @category Math
 * @returns `Math.floor(value)`
 */
export function floor<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.floor(value) as OperationIO<T>;
}

/**
 * Returns the smallest integer greater than or equal the given value.
 *
 * @category Math
 * @returns `Math.ceil(value)`
 */
export function ceil<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.ceil(value) as OperationIO<T>;
}

/**
 * Returns the given value rounded to the nearest integer.
 *
 * @category Math
 * @returns `Math.round(value)`
 */
export function round<T extends number>(value: OperationIO<T>): OperationIO<T> {
  return Math.round(value) as OperationIO<T>;
}

/**
 * Returns the larger value in the given collection.
 *
 * @category Math
 * @returns `Math.max(values)`
 */
export function max<T extends number>(values: Iterable<T>): OperationIO<T> {
  return Math.max(...values) as OperationIO<T>;
}

/**
 * Returns the smallest value in the given collection.
 *
 * @category Math
 * @returns `Math.min(values)`
 */
export function min<T extends number>(values: Iterable<T>): OperationIO<T> {
  return Math.min(...values) as OperationIO<T>;
}

/**
 * Takes the sum of all the values in the given collection.
 *
 * @category Math
 * @returns `Math.sum(values)`
 */
export function sum<T extends number>(values: Iterable<T>): OperationIO<T> {
  return [...values].reduce<number>(add, 0) as OperationIO<T>;
}

/**
 * Equal: Compare if two values are equal.
 *
 * @category Math
 * @returns `a === b`
 */
export function eq<T extends number>(a: OperationIO<T>, b: OperationIO<T>): boolean;

/**
 * Equal: Compare if a value is equal to the given value.
 *
 * @category Math
 * @returns `(a) => a === b`
 */
export function eq<T extends number>(b: OperationIO<T>): (a: OperationIO<T>) => boolean;

export function eq(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a === args[0] : args[0] === args[1];
}

/**
 * Greater Than: Compare if the first value is greater than the second.
 *
 * @category Math
 * @returns `a > b`
 */
export function gt<T extends number>(a: OperationIO<T>, b: OperationIO<T>): boolean;

/**
 * Greater Than: Compare if a value is greater than the given value.
 *
 * @category Math
 * @returns `(a) => a > b`
 */
export function gt<T extends number>(b: OperationIO<T>): (a: OperationIO<T>) => boolean;

export function gt(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a > args[0] : args[0] > args[1];
}

/**
 * Greater Than or Equal: Compare if the first value is greater than or equal to the second.
 *
 * @category Math
 * @returns `a >= b`
 */
export function gte<T extends number>(a: OperationIO<T>, b: OperationIO<T>): boolean;

/**
 * Greater Than or Equal: Compare if a value is greater than or equal to the given value.
 *
 * @category Math
 * @returns `(a) => a >= b`
 */
export function gte<T extends number>(b: OperationIO<T>): (a: OperationIO<T>) => boolean;

export function gte(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a >= args[0] : args[0] >= args[1];
}

/**
 * Less Than: Compare if the first value is less than the second.
 *
 * @category Math
 * @returns `a < b`
 */
export function lt<T extends number>(a: OperationIO<T>, b: OperationIO<T>): boolean;

/**
 * Less Than: Compare if a value is less than the given value.
 *
 * @category Math
 * @returns `(a) => a < b`
 */
export function lt<T extends number>(b: OperationIO<T>): (a: OperationIO<T>) => boolean;

export function lt(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a < args[0] : args[0] < args[1];
}

/**
 * Less Than or Equal: Compare if the first value is less than or equal to the second.
 *
 * @category Math
 * @returns `a <= b`
 */
export function lte<T extends number>(a: OperationIO<T>, b: OperationIO<T>): boolean;

/**
 * Less Than or Equal: Compare if a value is less than or equal to the given value.
 *
 * @category Math
 * @returns `(a) => a <= b`
 */
export function lte<T extends number>(b: OperationIO<T>): (a: OperationIO<T>) => boolean;

export function lte(...args: Readonly<[number, number] | [number]>) {
  return args.length === 1 ? (a: number) => a <= args[0] : args[0] <= args[1];
}

/**
 * Returns the sine of a number.
 *
 * @category Math
 * @returns `Math.sin(angle)`
 */
export function sin(angle: Radian): Unitless {
  return Math.sin(angle) as Unitless;
}

/**
 * Returns the cosine of a number.
 *
 * @category Math
 * @returns `Math.cos(angle)`
 */
export function cos(angle: Radian): Unitless {
  return Math.cos(angle) as Unitless;
}

/**
 * Returns the tangent of a number.
 *
 * @category Math
 * @returns `Math.tan(angle)`
 */
export function tan(angle: Radian): Unitless {
  return Math.tan(angle) as Unitless;
}

/**
 * Returns the arcsine of a number.
 *
 * @category Math
 * @returns `Math.asin(value)`
 */
export function asin(value: Unitless): Radian {
  return Math.asin(value) as Radian;
}

/**
 * Returns the arc cosine (or inverse cosine) of a number.
 *
 * @category Math
 * @returns `Math.acos(value)`
 */
export function acos(value: Unitless): Radian {
  return Math.acos(value) as Radian;
}

/**
 * Returns the arctangent of a number.
 *
 * @category Math
 * @returns `Math.atan(value)`
 */
export function atan(value: Unitless): Radian {
  return Math.atan(value) as Radian;
}

/**
 * Returns the angle (in radians) from the X axis to a point.
 *
 * @category Math
 * @param x - A number representing the cartesian x-coordinate.
 * @param y - A number representing the cartesian y-coordinate.
 * @returns `Math.atan2(x, y)`
 */
export function atan2<T extends number>(x: T, y: T): Radian {
  return Math.atan2(x, y) as Radian;
}

/**
 * Returns the hyperbolic sine of a number.
 *
 * @category Math
 * @returns `Math.sinh(angle)`
 */
export function sinh(angle: Radian): Unitless {
  return Math.sinh(angle) as Unitless;
}

/**
 * Returns the hyperbolic cosine of a number.
 *
 * @category Math
 * @returns `Math.cosh(angle)`
 */
export function cosh(angle: Radian): Unitless {
  return Math.cosh(angle) as Unitless;
}

/**
 * Returns the hyperbolic tangent of a number.
 *
 * @category Math
 * @returns `Math.tanh(angle)`
 */
export function tanh(angle: Radian): Unitless {
  return Math.tanh(angle) as Unitless;
}

/**
 * Returns the inverse hyperbolic sine of a number.
 *
 * @category Math
 * @returns `Math.asinh(value)`
 */
export function asinh(value: Unitless): Radian {
  return Math.asinh(value) as Radian;
}

/**
 * Returns the inverse hyperbolic cosine of a number.
 *
 * @category Math
 * @returns `Math.acosh(value)`
 */
export function acosh(value: Unitless): Radian {
  return Math.acosh(value) as Radian;
}

/**
 * Returns the inverse hyperbolic tangent of a number.
 *
 * @category Math
 * @returns `Math.atanh(value)`
 */
export function atanh(value: Unitless): Radian {
  return Math.atanh(value) as Radian;
}
