import { type UnitFull, type UnitValue } from "./core";

export type BrandUnit<T extends Record<string, UnitValue>> = {
  __exactKeys: keyof ExcludeNullUnits<T>;
  __uom_types: RemoveNeverValues<{
    [U in keyof T]: U extends keyof ExcludeNullUnits<T>
      ? BrandUnitConfigValue<T[U]>
      : never;
  }>;
};

type RemoveNeverValues<T> = {
  [K in keyof T as [T[K]] extends [never] ? never : K]: T[K];
};

type BrandUnitConfigValue<T extends UnitValue> = ExcludeNullUnit<T> & {
  __exactKeys: keyof ExcludeNullUnit<T>;
};

type ExcludeNullUnits<T extends Record<string, UnitValue>> = {
  [K in keyof T as T[K] extends { exponent: 0 } ? never : K]: T[K];
};

type ExcludeNullUnit<T extends UnitValue> = {
  [K in keyof T as T[K] extends 0 ? never : K]: T[K];
};

export type GetUnitConfig<T> = T extends UnitFull<infer C> ? C : never;

export type GetUnitValues<
  T extends Record<string, UnitValue>,
  U,
> = U extends keyof T ? T[U] : { exponent: 0 };

export type KeysOfTwoObjects<A, B> = keyof A | keyof B;

export type KeysOfKeyOfTwoObjects<A, B, K> = K extends keyof A
  ? K extends keyof B
    ? keyof A[K] | keyof B[K]
    : keyof A[K]
  : K extends keyof B
  ? keyof B[K]
  : never;

/**
 * Flatten a complex type such as a union or intersection of objects into a
 * single object.
 */
export type FlatternAlias<T> = { [P in keyof T]: T[P] } & {};
