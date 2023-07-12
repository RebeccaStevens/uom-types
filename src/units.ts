import { type AbstractUnitCore, type UnitCore } from "./core";
import {
  type Exponent,
  type NegativeExponent,
  type SumExponents,
} from "./exponents";
import {
  type FlatternAlias,
  type GetExponent,
  type ExcludeNullUnits,
} from "./utils";

export type InverseUnit<T extends number> = T extends UnitCore<
  infer Config,
  infer Meta
>
  ? UnitCore<
      FlatternAlias<InverseUnitCore<Config>>,
      FlatternAlias<InverseUnitCore<Meta>>
    >
  : T extends AbstractUnitCore<infer Config>
  ? AbstractUnitCore<FlatternAlias<InverseUnitCore<Config>>>
  : number;

type InverseUnitCore<T extends Record<string, Exponent>> = {
  [E in keyof T]: NegativeExponent<T[E]>;
};

export type MultiplyUnit<
  A extends number,
  B extends number,
> = A extends UnitCore<infer AConfig, infer AMeta>
  ? B extends UnitCore<infer BConfig, infer BMeta>
    ? UnitCore<
        FlatternAlias<MultiplyUnitsCore<AConfig, BConfig>>,
        FlatternAlias<MultiplyUnitsCore<AMeta, BMeta>>
      >
    : B extends AbstractUnitCore<any>
    ? never
    : A
  : B extends UnitCore<any, any>
  ? A extends AbstractUnitCore<any>
    ? never
    : B
  : A extends AbstractUnitCore<infer AConfig>
  ? B extends AbstractUnitCore<infer BConfig>
    ? AbstractUnitCore<FlatternAlias<MultiplyUnitsCore<AConfig, BConfig>>>
    : A
  : B extends AbstractUnitCore<any>
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
