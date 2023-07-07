import {
  type Unit,
  type UnitFull,
  type UnknownUnit,
  type Exponent,
  type UnitValue,
} from "./core";

export type BrandUnit<T extends Record<string, UnitValue>> = {
  __exactKeys: keyof ExcludeZeroExponentsKeys<T>;
  __uom_types: RemoveNever<{
    [U in keyof T]: U extends keyof ExcludeZeroExponentsKeys<T>
      ? BrandUnitConfigValue<T[U]>
      : never;
  }>;
};

type RemoveNever<T> = {
  [K in keyof T as [T[K]] extends [never] ? never : K]: T[K];
};

type BrandUnitConfigValue<T extends UnitValue> = ExcludeZeroExponents<T> & {
  __exactKeys: keyof ExcludeZeroExponents<T>;
};

type GetUnitConfig<T> = T extends UnitFull<infer C> ? C : never;

type ExcludeZeroExponentsKeys<T extends Record<string, UnitValue>> = {
  [K in keyof T as T[K] extends { exponent: 0 } ? never : K]: T[K];
};

type ExcludeZeroExponents<T extends UnitValue> = {
  [K in keyof T as T[K] extends 0 ? never : K]: T[K];
};

type GetUnitValues<T extends Record<string, UnitValue>, U> = U extends keyof T
  ? T[U]
  : { exponent: 0 };

type KeysOfTwoObjects<A, B> = keyof A | keyof B;

type KeysOfKeyOfTwoObjects<A, B, K> = K extends keyof A
  ? K extends keyof B
    ? keyof A[K] | keyof B[K]
    : keyof A[K]
  : K extends keyof B
  ? keyof B[K]
  : never;

export type Inverse<T extends number> = T extends UnknownUnit
  ? InverseUnit<T>
  : number;

type NegativeExponent<T extends Exponent> = T extends -6
  ? 6
  : T extends -5
  ? 5
  : T extends -4
  ? 4
  : T extends -3
  ? 3
  : T extends -2
  ? 2
  : T extends -1
  ? 0
  : T extends 0
  ? 1
  : T extends 1
  ? -1
  : T extends 2
  ? -2
  : T extends 3
  ? -3
  : T extends 4
  ? -4
  : T extends 5
  ? -5
  : T extends 6
  ? -6
  : never;

type InverseUnit<T extends UnknownUnit> = InverseUnitCore<T> extends Record<
  string,
  UnitValue
>
  ? Unit<InverseUnitCore<T>>
  : never;

type InverseUnitCore<T extends UnknownUnit> = {
  [U in keyof GetUnitConfig<T>]: {
    [E in keyof GetUnitConfig<T>[U]]: NegativeExponent<GetUnitConfig<T>[U][E]>;
  };
};

export type Multiply<A extends number, B extends number> = A extends UnknownUnit
  ? B extends UnknownUnit
    ? MultiplyUnits<A, B>
    : A
  : B extends UnknownUnit
  ? B
  : number;

type MultiplyUnits<
  A extends UnknownUnit,
  B extends UnknownUnit,
> = MultiplyUnitsCore<A, B> extends Record<string, UnitValue>
  ? Unit<FlatternAlias<MultiplyUnitsCore<A, B>>>
  : never;

type MultiplyUnitsCore<A extends UnknownUnit, B extends UnknownUnit> = {
  [U in KeysOfTwoObjects<GetUnitConfig<A>, GetUnitConfig<B>>]: {
    [E in KeysOfKeyOfTwoObjects<
      GetUnitConfig<A>,
      GetUnitConfig<B>,
      U
    >]: SumExponents<
      E extends keyof GetUnitValues<GetUnitConfig<A>, U>
        ? GetUnitValues<GetUnitConfig<A>, U>[E] extends Exponent
          ? GetUnitValues<GetUnitConfig<A>, U>[E]
          : 0
        : 0,
      E extends keyof GetUnitValues<GetUnitConfig<B>, U>
        ? GetUnitValues<GetUnitConfig<B>, U>[E] extends Exponent
          ? GetUnitValues<GetUnitConfig<B>, U>[E]
          : 0
        : 0
    >;
  };
};

export type Divide<A extends number, B extends number> = A extends UnknownUnit
  ? B extends UnknownUnit
    ? DivideUnits<A, B>
    : A
  : B extends UnknownUnit
  ? Inverse<B>
  : number;

type DivideUnits<A extends UnknownUnit, B extends UnknownUnit> = MultiplyUnits<
  A,
  InverseUnit<B> extends UnknownUnit ? InverseUnit<B> : never
>;

type SubExponents<A extends Exponent, B extends Exponent> = SumExponents<
  A,
  NegativeExponent<B>
>;

type SumExponents<A extends Exponent, B extends Exponent> = A extends -6
  ? B extends 0
    ? A
    : B extends 1
    ? -5
    : B extends 2
    ? -4
    : B extends 3
    ? -3
    : B extends 4
    ? -2
    : B extends 5
    ? -1
    : B extends 6
    ? 0
    : never
  : A extends -5
  ? B extends -1
    ? -6
    : B extends 0
    ? A
    : B extends 1
    ? -4
    : B extends 2
    ? -3
    : B extends 3
    ? -2
    : B extends 4
    ? -1
    : B extends 5
    ? 0
    : B extends 6
    ? 1
    : never
  : A extends -4
  ? B extends -2
    ? -6
    : B extends -1
    ? -5
    : B extends 0
    ? A
    : B extends 1
    ? -3
    : B extends 2
    ? -2
    : B extends 3
    ? -1
    : B extends 4
    ? 0
    : B extends 5
    ? 1
    : B extends 6
    ? 2
    : never
  : A extends -3
  ? B extends -3
    ? -6
    : B extends -2
    ? -5
    : B extends -1
    ? -4
    : B extends 0
    ? A
    : B extends 1
    ? -2
    : B extends 2
    ? -1
    : B extends 3
    ? 0
    : B extends 4
    ? 1
    : B extends 5
    ? 2
    : B extends 6
    ? 3
    : never
  : A extends -2
  ? B extends -4
    ? -6
    : B extends -3
    ? -5
    : B extends -2
    ? -4
    : B extends -1
    ? -3
    : B extends 0
    ? A
    : B extends 1
    ? -1
    : B extends 2
    ? 0
    : B extends 3
    ? 1
    : B extends 4
    ? 2
    : B extends 5
    ? 3
    : B extends 6
    ? 4
    : never
  : A extends -1
  ? B extends -5
    ? -6
    : B extends -4
    ? -5
    : B extends -3
    ? -4
    : B extends -2
    ? -3
    : B extends -1
    ? -2
    : B extends 0
    ? A
    : B extends 1
    ? 0
    : B extends 2
    ? 1
    : B extends 3
    ? 2
    : B extends 4
    ? 3
    : B extends 5
    ? 4
    : B extends 6
    ? 5
    : never
  : A extends 0
  ? B
  : A extends 1
  ? B extends -6
    ? -5
    : B extends -5
    ? -4
    : B extends -4
    ? -3
    : B extends -3
    ? -2
    : B extends -2
    ? -1
    : B extends -1
    ? 0
    : B extends 0
    ? A
    : B extends 1
    ? 2
    : B extends 2
    ? 3
    : B extends 3
    ? 4
    : B extends 4
    ? 5
    : B extends 5
    ? 6
    : never
  : A extends 2
  ? B extends -6
    ? -4
    : B extends -5
    ? -3
    : B extends -4
    ? -2
    : B extends -3
    ? -1
    : B extends -2
    ? 0
    : B extends -1
    ? 1
    : B extends 0
    ? A
    : B extends 1
    ? 3
    : B extends 2
    ? 4
    : B extends 3
    ? 5
    : B extends 4
    ? 6
    : never
  : A extends 3
  ? B extends -6
    ? -3
    : B extends -5
    ? -2
    : B extends -4
    ? -1
    : B extends -3
    ? 0
    : B extends -2
    ? 1
    : B extends -1
    ? 2
    : B extends 0
    ? A
    : B extends 1
    ? 4
    : B extends 2
    ? 5
    : B extends 3
    ? 6
    : never
  : A extends 4
  ? B extends -6
    ? -2
    : B extends -5
    ? -1
    : B extends -4
    ? 0
    : B extends -3
    ? 1
    : B extends -2
    ? 2
    : B extends -1
    ? 3
    : B extends 0
    ? A
    : B extends 1
    ? 5
    : B extends 2
    ? 6
    : never
  : A extends 5
  ? B extends -6
    ? -1
    : B extends -5
    ? 0
    : B extends -4
    ? 1
    : B extends -3
    ? 2
    : B extends -2
    ? 3
    : B extends -1
    ? 4
    : B extends 0
    ? A
    : B extends 1
    ? 6
    : never
  : A extends 6
  ? B extends -6
    ? 0
    : B extends -5
    ? 1
    : B extends -4
    ? 2
    : B extends -3
    ? 3
    : B extends -2
    ? 4
    : B extends -1
    ? 5
    : B extends 0
    ? A
    : never
  : never;

/**
 * Flatten a complex type such as a union or intersection of objects into a
 * single object.
 */
export type FlatternAlias<T> = { [P in keyof T]: T[P] } & {};
