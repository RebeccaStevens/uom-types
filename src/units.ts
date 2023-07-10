import { type Unit, type UnknownUnit } from "./core";
import {
  type Exponent,
  type NegativeExponent,
  type SumExponents,
} from "./exponents";
import {
  type GetUnitConfig,
  type FlatternAlias,
  type GetExponent,
  type ExcludeNullUnits,
} from "./utils";

export type InverseUnit<T extends number> = T extends UnknownUnit
  ? InverseUnitCore<T> extends Record<string, Exponent>
    ? Unit<FlatternAlias<InverseUnitCore<T>>>
    : never
  : number;

type InverseUnitCore<T extends UnknownUnit> = {
  [E in keyof GetUnitConfig<T>]: NegativeExponent<GetUnitConfig<T>[E]>;
};

export type MultiplyUnit<
  A extends number,
  B extends number,
> = A extends UnknownUnit
  ? B extends UnknownUnit
    ? MultiplyUnitsCore<A, B> extends Record<string, Exponent>
      ? Unit<FlatternAlias<ExcludeNullUnits<MultiplyUnitsCore<A, B>>>>
      : never
    : A
  : B extends UnknownUnit
  ? B
  : number;

type MultiplyUnitsCore<A extends UnknownUnit, B extends UnknownUnit> = {
  [S in keyof GetUnitConfig<A> | keyof GetUnitConfig<B>]: SumExponents<
    GetExponent<GetUnitConfig<A>, S> extends Exponent
      ? GetExponent<GetUnitConfig<A>, S>
      : 0,
    GetExponent<GetUnitConfig<B>, S> extends Exponent
      ? GetExponent<GetUnitConfig<B>, S>
      : 0
  >;
};

export type DivideUnit<
  A extends number,
  B extends number,
> = A extends UnknownUnit
  ? B extends UnknownUnit
    ? MultiplyUnit<
        A,
        InverseUnit<B> extends UnknownUnit ? InverseUnit<B> : never
      >
    : A
  : B extends UnknownUnit
  ? InverseUnit<B>
  : number;
