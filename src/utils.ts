import type { UnitSubvalues, UnknownUnitClass, UnknownUnitMeta } from "./core.ts";

/**
 * Available for providing custom branding.
 */
// eslint-disable-next-line ts/no-empty-interface, ts/consistent-type-definitions
export interface Brand {}

/**
 * Brand with the unit meta.
 */
export type BrandUnitMeta<UM extends UnknownUnitMeta> = Brand & {
  __uom_types: {
    unitMeta: UM;
  };
};

/**
 * Brand with the unit class.
 */
export type BrandUnitClass<UC extends UnknownUnitClass> = Brand & {
  __uom_types: {
    unitClass: UC;
  };
};

/**
 * Brand that it is a unit class.
 */
export type BrandUnitClassType = Brand & {
  __uom_types: {
    unitClassType: true;
  };
};

/**
 * Brand with the unit keys and value.
 */
export type BrandUnitKeyValues<K, V> = Brand &
  Readonly<{
    __uom_types: {
      keys: K;
      value: V;
    };
  }>;

/**
 * Remove all key from the object that are `never`.
 */
export type RemoveNeverValues<T extends object> = {
  [K in keyof T as [T[K]] extends [never] ? never : K]: T[K];
};

/**
 * Exclude all unit subvalues with an exponent value of zero.
 */
export type ExcludeUnitZeroSubvalues<U extends UnitSubvalues> = {
  [S in keyof U as S extends string ? (U[S] extends 0 ? never : S) : never]: U[S];
};

/**
 * Get the exponent value of the given key.
 */
export type GetExponent<C extends UnitSubvalues, S> = S extends keyof C ? C[S] : 0;

/**
 * Flatten a complex type such as a union or intersection of objects into a
 * single object.
 *
 * @internal
 */
export type FlatternAlias<T> = { [P in keyof T]: T[P] } & {};

/**
 * Make `T` exactly `T`.
 *
 * @internal
 */
export type Exactify<T, U extends T> = T & {
  [K in keyof U]: K extends keyof T ? U[K] : never;
};
