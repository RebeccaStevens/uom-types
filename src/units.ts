import {
  type AbstractUnit,
  type Unit,
  type UnknownAbstractUnit,
  type UnknownUnit,
} from "./core";
import {
  type Exponent,
  type NegativeExponent,
  type SumExponents,
} from "./exponents";
import {
  type ExcludeNullUnits,
  type FlatternAlias,
  type GetExponent,
} from "./utils";

export type InverseUnit<T extends number> = T extends Unit<
  infer Config,
  infer Meta
>
  ? Unit<
      FlatternAlias<InverseUnitCore<Config>>,
      FlatternAlias<InverseUnitCore<Meta>>
    >
  : T extends AbstractUnit<infer Config>
  ? AbstractUnit<FlatternAlias<InverseUnitCore<Config>>>
  : number;

type InverseUnitCore<T extends Record<string, Exponent>> = {
  [E in keyof T]: NegativeExponent<T[E]>;
};

export type MultiplyUnit<A extends number, B extends number> = A extends Unit<
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
  A extends Record<string, Exponent>,
  B extends Record<string, Exponent>,
> = ExcludeNullUnits<{
  [S in keyof A | keyof B]: SumExponents<GetExponent<A, S>, GetExponent<B, S>>;
}>;

export type DivideUnit<A extends number, B extends number> = MultiplyUnit<
  A,
  InverseUnit<B>
>;
