import { type Exponent } from "./exponents";

export type RemoveNeverValues<T> = {
  [K in keyof T as [T[K]] extends [never] ? never : K]: T[K];
};

export type ExcludeNullUnits<U extends Record<string, Exponent>> = {
  [S in keyof U as U[S] extends 0 ? never : S]: U[S];
};

export type GetExponent<
  C extends Record<string, Exponent>,
  S,
> = S extends keyof C ? C[S] : 0;

/**
 * Flatten a complex type such as a union or intersection of objects into a
 * single object.
 */
export type FlatternAlias<T> = { [P in keyof T]: T[P] } & {};

export type Exactify<T, X extends T> = T & {
  [K in keyof X]: K extends keyof T ? X[K] : never;
};
