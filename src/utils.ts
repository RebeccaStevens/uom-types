import { type Unit } from "./core";
import { type Exponent } from "./exponents";

export type BrandUnit<T extends Record<string, Exponent>> = {
  __uom_types: RemoveNeverValues<{
    [U in keyof T]: U extends keyof ExcludeNullUnits<T> ? T[U] : never;
  }>;
};

type RemoveNeverValues<T> = {
  [K in keyof T as [T[K]] extends [never] ? never : K]: T[K];
};

type ExcludeNullUnits<U extends Record<string, Exponent>> = {
  [S in keyof U as U[S] extends 0 ? never : S]: U[S];
};

export type GetUnitConfig<U> = U extends Unit<infer C> ? C : never;

export type GetExponent<
  C extends Record<string, Exponent>,
  S,
> = S extends keyof C ? C[S] : 0;

export type KeysOfTwoObjects<A, B> = keyof A | keyof B;

/**
 * Flatten a complex type such as a union or intersection of objects into a
 * single object.
 */
export type FlatternAlias<T> = { [P in keyof T]: T[P] } & {};

export type Exactify<T, X extends T> = T & {
  [K in keyof X]: K extends keyof T ? X[K] : never;
};
