// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type {
  AbstractUnit,
  Unit,
  UnitConversionRate,
  UnitSubvalues,
  UnknownAbstractUnit,
  UnknownUnit,
  UnknownUnitConversionRate,
} from "./core";
import type { DivideExponents, Exponent, MultiplyExponents, SumExponents } from "./exponents";
import type { ExcludeUnitZeroSubvalues, FlatternAlias, GetExponent } from "./utils";

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
export type InverseUnitSubvalues<T extends UnitSubvalues> = PowUnitSubvalues<T, -1>;

/**
 * Multiply a unit by another unit.
 *
 * @group Unit Functions
 * @returns `A⋅B`
 */
export type Multiply<A extends number, B extends number> = A extends UnknownUnit
  ? MultiplyHelperUnit<A, B>
  : B extends UnknownUnit
    ? MultiplyHelperUnit<B, A>
    : A extends UnknownAbstractUnit
      ? MultiplyHelperAbstractUnit<A, B>
      : B extends UnknownAbstractUnit
        ? MultiplyHelperAbstractUnit<B, A>
        : A extends UnknownUnitConversionRate
          ? MultiplyHelperUnitConversionRate<A, B>
          : B extends UnknownUnitConversionRate
            ? MultiplyHelperUnitConversionRate<B, A>
            : number;

/**
 * Multiple a Unit by a Unit, AbstractUnit, UnitConversionRate or number
 *
 * @internal
 */
type MultiplyHelperUnit<A extends UnknownUnit, B extends number> =
  A extends Unit<infer AClass, infer AMeta>
    ? B extends Unit<infer BClass, infer BMeta>
      ? Unit<FlatternAlias<MultiplyUnitSubvalues<AClass, BClass>>, FlatternAlias<MultiplyUnitSubvalues<AMeta, BMeta>>>
      : B extends AbstractUnit<infer BClass>
        ? Unit<FlatternAlias<MultiplyUnitSubvalues<AClass, BClass>>, AMeta>
        : B extends UnitConversionRate<infer BMeta>
          ? Unit<AClass, FlatternAlias<MultiplyUnitSubvalues<AMeta, BMeta>>>
          : A
    : never;

/**
 * Multiple an AbstractUnit by an AbstractUnit, UnitConversionRate or number
 *
 * @internal
 */
type MultiplyHelperAbstractUnit<A extends UnknownAbstractUnit, B extends number> =
  A extends AbstractUnit<infer AClass>
    ? B extends AbstractUnit<infer BClass>
      ? AbstractUnit<FlatternAlias<MultiplyUnitSubvalues<AClass, BClass>>>
      : B extends UnitConversionRate<infer BMeta>
        ? Unit<AClass, BMeta>
        : A
    : never;

/**
 * Multiple an UnitConversionRate by a UnitConversionRate or number
 *
 * @internal
 */
type MultiplyHelperUnitConversionRate<A extends UnknownUnitConversionRate, B extends number> =
  A extends UnitConversionRate<infer AMeta>
    ? B extends UnitConversionRate<infer BMeta>
      ? UnitConversionRate<FlatternAlias<MultiplyUnitSubvalues<AMeta, BMeta>>>
      : A
    : never;

/**
 * Multiply each of the subvalues from a unit with the corresponding once from another unit.
 *
 * @group Unit Subvalue Functions
 */
export type MultiplyUnitSubvalues<A extends UnitSubvalues, B extends UnitSubvalues> = ExcludeUnitZeroSubvalues<{
  [S in keyof A | keyof B]: SumExponents<GetExponent<A, S>, GetExponent<B, S>>;
}>;

/**
 * Divide a unit by another unit.
 *
 * @group Unit Functions
 * @returns `A/B`
 */
export type Divide<A extends number, B extends number> = Multiply<A, Inverse<B>>;

/**
 * Divide each of the subvalues from a unit with the corresponding once from another unit.
 *
 * @group Unit Subvalue Functions
 */
export type DivideUnitSubvalues<A extends UnitSubvalues, B extends UnitSubvalues> = MultiplyUnitSubvalues<
  A,
  InverseUnitSubvalues<B>
>;

/**
 * Put a unit to the power of an exponent.
 *
 * @group Unit Functions
 */
export type Pow<B extends number, E extends Exponent> =
  B extends Unit<infer Class, infer Meta>
    ? Unit<FlatternAlias<PowUnitSubvalues<Class, E>>, FlatternAlias<PowUnitSubvalues<Meta, E>>>
    : B extends AbstractUnit<infer Class>
      ? AbstractUnit<FlatternAlias<PowUnitSubvalues<Class, E>>>
      : B extends UnitConversionRate<infer Meta>
        ? UnitConversionRate<FlatternAlias<PowUnitSubvalues<Meta, E>>>
        : number;

/**
 * Put each subvalue of a unit to the power of an exponent.
 *
 * @group Unit Subvalue Functions
 */
export type PowUnitSubvalues<B extends UnitSubvalues, E extends Exponent> = ExcludeUnitZeroSubvalues<{
  [S in keyof B]: MultiplyExponents<GetExponent<B, S>, E>;
}>;

/**
 * Take the nth root of a unit.
 *
 * @group Unit Functions
 */
export type Root<B extends number, E extends Exponent> =
  B extends Unit<infer Class, infer Meta>
    ? Unit<FlatternAlias<RootUnitSubvalues<Class, E>>, FlatternAlias<RootUnitSubvalues<Meta, E>>>
    : B extends AbstractUnit<infer Class>
      ? AbstractUnit<FlatternAlias<RootUnitSubvalues<Class, E>>>
      : B extends UnitConversionRate<infer Meta>
        ? UnitConversionRate<FlatternAlias<RootUnitSubvalues<Meta, E>>>
        : number;

/**
 * Take the nth root of each subvalue of a unit.
 *
 * @group Unit Subvalue Functions
 */
export type RootUnitSubvalues<B extends UnitSubvalues, E extends Exponent> = ExcludeUnitZeroSubvalues<{
  [S in keyof B]: DivideExponents<GetExponent<B, S>, E>;
}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Inverse", () => {
    it("works with Units", () => {
      assert<Equals<Inverse<Unit<{ a: 1; b: 2 }>>, Unit<{ a: -1; b: -2 }>>>();
    });

    it("works with Unit by AbstractUnit", () => {
      assert<Equals<Inverse<AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: -2; b: -2 }>>>();
    });

    it("works with Unit by UnitConversionRate", () => {
      assert<Equals<Inverse<UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: -2; b: -2 }>>>();
    });
  });

  describe("Multiply", () => {
    it("works with Unit by Unit", () => {
      assert<Equals<Multiply<Unit<{ a: 1 }>, Unit<{ a: 1; b: 2 }>>, Unit<{ a: 2; b: 2 }>>>();
    });

    it("works with Unit by number", () => {
      assert<Equals<Multiply<Unit<{ a: 2; b: 2 }>, number>, Unit<{ a: 2; b: 2 }>>>();

      assert<Equals<Multiply<number, Unit<{ a: 2; b: 2 }>>, Unit<{ a: 2; b: 2 }>>>();
    });

    it("works with Unit by concrete number", () => {
      assert<Equals<Multiply<Unit<{ a: 2; b: 2 }>, 2>, Unit<{ a: 2; b: 2 }>>>();

      assert<Equals<Multiply<2, Unit<{ a: 2; b: 2 }>>, Unit<{ a: 2; b: 2 }>>>();
    });

    it("works with Unit by AbstractUnit", () => {
      assert<Equals<Multiply<Unit<{ a: 2; b: 2 }>, AbstractUnit<{ a: 1 }>>, Unit<{ a: 3; b: 2 }>>>();

      assert<Equals<Multiply<AbstractUnit<{ a: 1 }>, Unit<{ a: 2; b: 2 }>>, Unit<{ a: 3; b: 2 }>>>();
    });

    it("works with AbstractUnit by AbstractUnit", () => {
      assert<Equals<Multiply<AbstractUnit<{ a: 1 }>, AbstractUnit<{ a: 1; b: 2 }>>, AbstractUnit<{ a: 2; b: 2 }>>>();
    });

    it("works with AbstractUnit by number", () => {
      assert<Equals<Multiply<AbstractUnit<{ a: 2; b: 2 }>, number>, AbstractUnit<{ a: 2; b: 2 }>>>();

      assert<Equals<Multiply<number, AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: 2; b: 2 }>>>();
    });

    it("works with AbstractUnit by concrete number", () => {
      assert<Equals<Multiply<AbstractUnit<{ a: 2; b: 2 }>, 2>, AbstractUnit<{ a: 2; b: 2 }>>>();

      assert<Equals<Multiply<2, AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: 2; b: 2 }>>>();
    });

    it("works with AbstractUnit by UnitConversionRate", () => {
      assert<
        Equals<
          Multiply<AbstractUnit<{ a: 2; b: 2 }>, UnitConversionRate<{ c: 3; d: 4 }>>,
          Unit<{ a: 2; b: 2 }, { c: 3; d: 4 }>
        >
      >();

      assert<
        Equals<
          Multiply<UnitConversionRate<{ c: 3; d: 4 }>, AbstractUnit<{ a: 2; b: 2 }>>,
          Unit<{ a: 2; b: 2 }, { c: 3; d: 4 }>
        >
      >();
    });

    it("works with UnitConversionRate by UnitConversionRate", () => {
      assert<
        Equals<
          Multiply<UnitConversionRate<{ a: 1 }>, UnitConversionRate<{ a: 1; b: 2 }>>,
          UnitConversionRate<{ a: 2; b: 2 }>
        >
      >();
    });

    it("works with UnitConversionRate by number", () => {
      assert<Equals<Multiply<UnitConversionRate<{ a: 2; b: 2 }>, number>, UnitConversionRate<{ a: 2; b: 2 }>>>();

      assert<Equals<Multiply<number, UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: 2; b: 2 }>>>();
    });

    it("works with UnitConversionRate by concrete number", () => {
      assert<Equals<Multiply<UnitConversionRate<{ a: 2; b: 2 }>, 2>, UnitConversionRate<{ a: 2; b: 2 }>>>();

      assert<Equals<Multiply<2, UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: 2; b: 2 }>>>();
    });
  });

  describe("Divide", () => {
    it("works with Unit by Unit", () => {
      assert<Equals<Divide<Unit<{ a: 1 }>, Unit<{ a: 1; b: 2 }>>, Unit<{ b: -2 }>>>();
    });

    it("works with Unit by number", () => {
      assert<Equals<Divide<Unit<{ a: 2; b: 2 }>, number>, Unit<{ a: 2; b: 2 }>>>();

      assert<Equals<Divide<number, Unit<{ a: 2; b: 2 }>>, Unit<{ a: -2; b: -2 }>>>();
    });

    it("works with Unit by concrete number", () => {
      assert<Equals<Divide<Unit<{ a: 2; b: 2 }>, 2>, Unit<{ a: 2; b: 2 }>>>();

      assert<Equals<Divide<2, Unit<{ a: 2; b: 2 }>>, Unit<{ a: -2; b: -2 }>>>();
    });

    it("works with Unit by AbstractUnit", () => {
      assert<Equals<Divide<Unit<{ a: 2; b: 2 }>, AbstractUnit<{ a: 1 }>>, Unit<{ a: 1; b: 2 }>>>();

      assert<Equals<Divide<AbstractUnit<{ a: 1 }>, Unit<{ a: 2; b: 2 }>>, Unit<{ a: -1; b: -2 }>>>();
    });

    it("works with AbstractUnit by AbstractUnit", () => {
      assert<Equals<Divide<AbstractUnit<{ a: 1 }>, AbstractUnit<{ a: 1; b: 2 }>>, AbstractUnit<{ b: -2 }>>>();
    });

    it("works with AbstractUnit by number", () => {
      assert<Equals<Divide<AbstractUnit<{ a: 2; b: 2 }>, number>, AbstractUnit<{ a: 2; b: 2 }>>>();

      assert<Equals<Divide<number, AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: -2; b: -2 }>>>();
    });

    it("works with AbstractUnit by concrete number", () => {
      assert<Equals<Divide<AbstractUnit<{ a: 2; b: 2 }>, 2>, AbstractUnit<{ a: 2; b: 2 }>>>();

      assert<Equals<Divide<2, AbstractUnit<{ a: 2; b: 2 }>>, AbstractUnit<{ a: -2; b: -2 }>>>();
    });

    it("works with AbstractUnit by UnitConversionRate", () => {
      assert<
        Equals<
          Divide<AbstractUnit<{ a: 2; b: 2 }>, UnitConversionRate<{ c: 3; d: 4 }>>,
          Unit<{ a: 2; b: 2 }, { c: -3; d: -4 }>
        >
      >();

      assert<
        Equals<
          Divide<UnitConversionRate<{ c: 3; d: 4 }>, AbstractUnit<{ a: 2; b: 2 }>>,
          Unit<{ a: -2; b: -2 }, { c: 3; d: 4 }>
        >
      >();
    });

    it("works with UnitConversionRate by UnitConversionRate", () => {
      assert<
        Equals<Divide<UnitConversionRate<{ a: 1 }>, UnitConversionRate<{ a: 1; b: 2 }>>, UnitConversionRate<{ b: -2 }>>
      >();
    });

    it("works with UnitConversionRate by number", () => {
      assert<Equals<Divide<UnitConversionRate<{ a: 2; b: 2 }>, number>, UnitConversionRate<{ a: 2; b: 2 }>>>();

      assert<Equals<Divide<number, UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: -2; b: -2 }>>>();
    });

    it("works with UnitConversionRate by concrete number", () => {
      assert<Equals<Divide<UnitConversionRate<{ a: 2; b: 2 }>, 2>, UnitConversionRate<{ a: 2; b: 2 }>>>();

      assert<Equals<Divide<2, UnitConversionRate<{ a: 2; b: 2 }>>, UnitConversionRate<{ a: -2; b: -2 }>>>();
    });
  });

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
      assert<Equals<Pow<AbstractUnit<{ a: -2 }>, 2>, AbstractUnit<{ a: -4 }>>>();
      assert<Equals<Pow<AbstractUnit<{ a: 1 }>, 3>, AbstractUnit<{ a: 3 }>>>();
      assert<Equals<Pow<AbstractUnit<{ a: 2 }>, 3>, AbstractUnit<{ a: 6 }>>>();
      assert<Equals<Pow<AbstractUnit<{ a: -2 }>, 3>, AbstractUnit<{ a: -6 }>>>();
    });

    it("works with UnitConversionRate", () => {
      assert<Equals<Pow<UnitConversionRate<{ a: 1 }>, 2>, UnitConversionRate<{ a: 2 }>>>();
      assert<Equals<Pow<UnitConversionRate<{ a: 2 }>, 2>, UnitConversionRate<{ a: 4 }>>>();
      assert<Equals<Pow<UnitConversionRate<{ a: -2 }>, 2>, UnitConversionRate<{ a: -4 }>>>();
      assert<Equals<Pow<UnitConversionRate<{ a: 1 }>, 3>, UnitConversionRate<{ a: 3 }>>>();
      assert<Equals<Pow<UnitConversionRate<{ a: 2 }>, 3>, UnitConversionRate<{ a: 6 }>>>();
      assert<Equals<Pow<UnitConversionRate<{ a: -2 }>, 3>, UnitConversionRate<{ a: -6 }>>>();
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
      assert<Equals<Root<AbstractUnit<{ a: -2 }>, 2>, AbstractUnit<{ a: -1 }>>>();
      assert<Equals<Root<AbstractUnit<{ a: 6 }>, 3>, AbstractUnit<{ a: 2 }>>>();
      assert<Equals<Root<AbstractUnit<{ a: 3 }>, 3>, AbstractUnit<{ a: 1 }>>>();
      assert<Equals<Root<AbstractUnit<{ a: -3 }>, 3>, AbstractUnit<{ a: -1 }>>>();
    });

    it("works with UnitConversionRate", () => {
      assert<Equals<Root<UnitConversionRate<{ a: 4 }>, 2>, UnitConversionRate<{ a: 2 }>>>();
      assert<Equals<Root<UnitConversionRate<{ a: 2 }>, 2>, UnitConversionRate<{ a: 1 }>>>();
      assert<Equals<Root<UnitConversionRate<{ a: -2 }>, 2>, UnitConversionRate<{ a: -1 }>>>();
      assert<Equals<Root<UnitConversionRate<{ a: 6 }>, 3>, UnitConversionRate<{ a: 2 }>>>();
      assert<Equals<Root<UnitConversionRate<{ a: 3 }>, 3>, UnitConversionRate<{ a: 1 }>>>();
      assert<Equals<Root<UnitConversionRate<{ a: -3 }>, 3>, UnitConversionRate<{ a: -1 }>>>();
    });
  });
}
