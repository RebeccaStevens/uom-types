import type {
  AbstractUnit,
  Unit,
  UnitConversionRate,
  UnitSubvalues,
  UnknownAbstractUnit,
  UnknownUnit,
  UnknownUnitConversionRate,
} from "../core.ts";
import type { DivideExponents, Exponent, MultiplyExponents, SumExponents } from "../exponents.ts";
import type { ExcludeUnitZeroSubvalues, FlatternAlias, GetExponent } from "../utils.ts";

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
