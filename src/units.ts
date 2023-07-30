import {
  type UnitSubvalues,
  type AbstractUnit,
  type Unit,
  type UnknownAbstractUnit,
  type UnknownUnit,
} from "./core";
import { type NegativeExponent, type SumExponents } from "./exponents";
import {
  type ExcludeNullUnits,
  type FlatternAlias,
  type GetExponent,
} from "./utils";

/**
 * Take the inverse of a unit. 1/X.
 */
export type InverseUnit<X extends number> = X extends Unit<
  infer Config,
  infer Meta
>
  ? Unit<
      FlatternAlias<InverseUnitCore<Config>>,
      FlatternAlias<InverseUnitCore<Meta>>
    >
  : X extends AbstractUnit<infer Config>
  ? AbstractUnit<FlatternAlias<InverseUnitCore<Config>>>
  : number;

type InverseUnitCore<T extends UnitSubvalues> = {
  [E in keyof T]: NegativeExponent<T[E]>;
};

/**
 * Multiple a unit by another unit. AB
 */
export type MultiplyUnits<A extends number, B extends number> = A extends Unit<
  infer AConfig,
  infer AMeta
>
  ? B extends Unit<infer BConfig, infer BMeta>
    ? Unit<
        FlatternAlias<MultiplyUnitsCore<AConfig, BConfig>>,
        FlatternAlias<MultiplyUnitsCore<AMeta, BMeta>>
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
    ? AbstractUnit<FlatternAlias<MultiplyUnitsCore<AConfig, BConfig>>>
    : A
  : B extends UnknownAbstractUnit
  ? B
  : number;

type MultiplyUnitsCore<
  A extends UnitSubvalues,
  B extends UnitSubvalues,
> = ExcludeNullUnits<{
  [S in keyof A | keyof B]: SumExponents<GetExponent<A, S>, GetExponent<B, S>>;
}>;

/**
 * Divide a unit by another unit. A/B
 */
export type DivideUnits<A extends number, B extends number> = MultiplyUnits<
  A,
  InverseUnit<B>
>;
