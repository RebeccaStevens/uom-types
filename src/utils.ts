// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import { type UnitSubvalues } from "./core";

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
  [S in keyof U as S extends string
    ? U[S] extends 0
      ? never
      : S
    : never]: U[S];
};

/**
 * Get the exponent value of the given key.
 */
export type GetExponent<C extends UnitSubvalues, S> = S extends keyof C
  ? C[S]
  : 0;

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

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Utils", () => {
    describe("RemoveNeverValues", () => {
      it("removes nevers", () => {
        assert<
          Equals<
            { a: 1; c: "c" },
            RemoveNeverValues<{ a: 1; b: never; c: "c" }>
          >
        >();
      });
    });
  });
}
