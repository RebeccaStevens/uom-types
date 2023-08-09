// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnit,
  type Unit,
  type UnitSubvalues,
  type UnknownAbstractUnit,
  type UnknownUnit,
} from "./core";
import {
  type DivideExponents,
  type Exponent,
  type MultiplyExponents,
  type SumExponents,
} from "./exponents";
import {
  type ExcludeUnitZeroSubvalues,
  type FlatternAlias,
  type GetExponent,
} from "./utils";

/**
 * Take the inverse of a unit.
 *
 * @group Unit Functions
 * @returns `1/X`.
 */
export type Inverse<X extends number> = Pow<X, -1>;

/**
 * Inverses each of the subvalues.
 *
 * @group Unit Subvalue Functions
 */
export type InverseUnitSubvalues<T extends UnitSubvalues> = PowUnitSubvalues<
  T,
  -1
>;

/**
 * Multiply a unit by another unit.
 *
 * @group Unit Functions
 * @returns `A⋅B`
 */
export type Multiply<A extends number, B extends number> = A extends Unit<
  infer AConfig,
  infer AMeta
>
  ? B extends Unit<infer BConfig, infer BMeta>
    ? Unit<
        FlatternAlias<MultiplyUnitSubvalues<AConfig, BConfig>>,
        FlatternAlias<MultiplyUnitSubvalues<AMeta, BMeta>>
      >
    : B extends UnknownAbstractUnit
    ? never
    : A
  : B extends UnknownUnit
  ? A extends UnknownAbstractUnit
    ? never
    : B
  : A extends AbstractUnit<infer AConfig>
  ? B extends AbstractUnit<infer BConfig>
    ? AbstractUnit<FlatternAlias<MultiplyUnitSubvalues<AConfig, BConfig>>>
    : A
  : B extends UnknownAbstractUnit
  ? B
  : number;

/**
 * Multiply each of the subvalues from a unit with the corresponding once from another unit.
 *
 * @group Unit Subvalue Functions
 */
export type MultiplyUnitSubvalues<
  A extends UnitSubvalues,
  B extends UnitSubvalues,
> = ExcludeUnitZeroSubvalues<{
  [S in keyof A | keyof B]: SumExponents<GetExponent<A, S>, GetExponent<B, S>>;
}>;

/**
 * Divide a unit by another unit.
 *
 * @group Unit Functions
 * @returns `A/B`
 */
export type Divide<A extends number, B extends number> = Multiply<
  A,
  Inverse<B>
>;

/**
 * Divide each of the subvalues from a unit with the corresponding once from another unit.
 *
 * @group Unit Subvalue Functions
 */
export type DivideUnitSubvalues<
  A extends UnitSubvalues,
  B extends UnitSubvalues,
> = MultiplyUnitSubvalues<A, InverseUnitSubvalues<B>>;

/**
 * Put a unit to the power of an exponent.
 *
 * @group Unit Functions
 */
export type Pow<T extends number, N extends Exponent> = T extends Unit<
  infer Config,
  infer Meta
>
  ? Unit<
      FlatternAlias<PowUnitSubvalues<Config, N>>,
      FlatternAlias<PowUnitSubvalues<Meta, N>>
    >
  : T extends AbstractUnit<infer Config>
  ? AbstractUnit<FlatternAlias<PowUnitSubvalues<Config, N>>>
  : number;

/**
 * Put each subvalue of a unit to the power of an exponent.
 *
 * @group Unit Subvalue Functions
 */
export type PowUnitSubvalues<
  T extends UnitSubvalues,
  E extends Exponent,
> = ExcludeUnitZeroSubvalues<{
  [S in keyof T]: MultiplyExponents<GetExponent<T, S>, E>;
}>;

/**
 * Take the nth root of a unit.
 *
 * @group Unit Functions
 */
export type Root<T extends number, N extends Exponent> = T extends Unit<
  infer Config,
  infer Meta
>
  ? Unit<
      FlatternAlias<RootUnitSubvalues<Config, N>>,
      FlatternAlias<RootUnitSubvalues<Meta, N>>
    >
  : T extends AbstractUnit<infer Config>
  ? AbstractUnit<FlatternAlias<RootUnitSubvalues<Config, N>>>
  : number;

/**
 * Take the nth root of each subvalue of a unit.
 *
 * @group Unit Subvalue Functions
 */
export type RootUnitSubvalues<
  T extends UnitSubvalues,
  E extends Exponent,
> = ExcludeUnitZeroSubvalues<{
  [S in keyof T]: DivideExponents<GetExponent<T, S>, E>;
}>;

// Tests
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable functional/no-conditional-statements, functional/no-expression-statements, functional/no-return-void */
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Pow", () => {
    it("works with Units", () => {
      assert<Equals<Pow<Unit<{ a: 1 }>, 2>, Unit<{ a: 2 }>>>();
      assert<Equals<Pow<Unit<{ a: 2 }>, 2>, Unit<{ a: 4 }>>>();
      assert<Equals<Pow<Unit<{ a: -2 }>, 2>, Unit<{ a: -4 }>>>();
      assert<Equals<Pow<Unit<{ a: 1 }>, 3>, Unit<{ a: 3 }>>>();
      assert<Equals<Pow<Unit<{ a: 2 }>, 3>, Unit<{ a: 6 }>>>();
      assert<Equals<Pow<Unit<{ a: -2 }>, 3>, Unit<{ a: -6 }>>>();
    });

    it("works with AbstractUnit", () => {
      assert<Equals<Pow<AbstractUnit<{ a: 1 }>, 2>, AbstractUnit<{ a: 2 }>>>();
      assert<Equals<Pow<AbstractUnit<{ a: 2 }>, 2>, AbstractUnit<{ a: 4 }>>>();
      assert<
        Equals<Pow<AbstractUnit<{ a: -2 }>, 2>, AbstractUnit<{ a: -4 }>>
      >();
      assert<Equals<Pow<AbstractUnit<{ a: 1 }>, 3>, AbstractUnit<{ a: 3 }>>>();
      assert<Equals<Pow<AbstractUnit<{ a: 2 }>, 3>, AbstractUnit<{ a: 6 }>>>();
      assert<
        Equals<Pow<AbstractUnit<{ a: -2 }>, 3>, AbstractUnit<{ a: -6 }>>
      >();
    });
  });

  describe("Root", () => {
    it("works with Units", () => {
      assert<Equals<Root<Unit<{ a: 4 }>, 2>, Unit<{ a: 2 }>>>();
      assert<Equals<Root<Unit<{ a: 2 }>, 2>, Unit<{ a: 1 }>>>();
      assert<Equals<Root<Unit<{ a: -2 }>, 2>, Unit<{ a: -1 }>>>();
      assert<Equals<Root<Unit<{ a: 6 }>, 3>, Unit<{ a: 2 }>>>();
      assert<Equals<Root<Unit<{ a: 3 }>, 3>, Unit<{ a: 1 }>>>();
      assert<Equals<Root<Unit<{ a: -3 }>, 3>, Unit<{ a: -1 }>>>();
    });

    it("works with AbstractUnit", () => {
      assert<Equals<Root<AbstractUnit<{ a: 4 }>, 2>, AbstractUnit<{ a: 2 }>>>();
      assert<Equals<Root<AbstractUnit<{ a: 2 }>, 2>, AbstractUnit<{ a: 1 }>>>();
      assert<
        Equals<Root<AbstractUnit<{ a: -2 }>, 2>, AbstractUnit<{ a: -1 }>>
      >();
      assert<Equals<Root<AbstractUnit<{ a: 6 }>, 3>, AbstractUnit<{ a: 2 }>>>();
      assert<Equals<Root<AbstractUnit<{ a: 3 }>, 3>, AbstractUnit<{ a: 1 }>>>();
      assert<
        Equals<Root<AbstractUnit<{ a: -3 }>, 3>, AbstractUnit<{ a: -1 }>>
      >();
    });
  });
}
