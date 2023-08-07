import {
  type UnitSubvalues,
  type AbstractUnit,
  type Unit,
  type UnknownAbstractUnit,
  type UnknownUnit,
} from "./core";
import { type NegativeExponent, type SumExponents } from "./exponents";
import {
  type ExcludeUnitZeroSubvalues,
  type FlatternAlias,
  type GetExponent,
} from "./utils";

/**
 * Take the inverse of a unit.
 *
 * @returns `1/X`.
 */
export type InverseUnit<X extends number> = X extends Unit<
  infer Config,
  infer Meta
>
  ? Unit<
      FlatternAlias<InverseUnitSubvalues<Config>>,
      FlatternAlias<InverseUnitSubvalues<Meta>>
    >
  : X extends AbstractUnit<infer Config>
  ? AbstractUnit<FlatternAlias<InverseUnitSubvalues<Config>>>
  : number;

/**
 * Inverses each of the subvalues.
 */
export type InverseUnitSubvalues<T extends UnitSubvalues> = {
  [E in keyof T]: NegativeExponent<T[E]>;
};

/**
 * Multiple a unit by another unit.
 *
 * @returns `A⋅B`
 */
export type MultiplyUnits<A extends number, B extends number> = A extends Unit<
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

type MultiplyUnitSubvalues<
  A extends UnitSubvalues,
  B extends UnitSubvalues,
> = ExcludeUnitZeroSubvalues<{
  [S in keyof A | keyof B]: SumExponents<GetExponent<A, S>, GetExponent<B, S>>;
}>;

/**
 * Divide a unit by another unit.
 *
 * @returns `A/B`
 */
export type DivideUnits<A extends number, B extends number> = MultiplyUnits<
  A,
  InverseUnit<B>
>;
