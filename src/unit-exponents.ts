import { type Unit, type UnknownUnit } from "./core";
import {
  type DivideExponents,
  type Exponent,
  type MultiplyExponents,
} from "./exponents";
import {
  type FlatternAlias,
  type GetUnitConfig,
  type GetExponent,
} from "./utils";

export type MultiplyUnitExponents<
  A extends number,
  B extends 2,
> = A extends UnknownUnit
  ? MultiplyUnitExponentsCore<A, B> extends Record<string, Exponent>
    ? Unit<FlatternAlias<MultiplyUnitExponentsCore<A, B>>>
    : never
  : number;

type MultiplyUnitExponentsCore<A extends UnknownUnit, B extends 2> = {
  [U in keyof GetUnitConfig<A>]: MultiplyExponents<
    GetExponent<GetUnitConfig<A>, U> extends Exponent
      ? GetExponent<GetUnitConfig<A>, U>
      : 0,
    B
  >;
};

export type DivideUnitExponents<
  A extends number,
  B extends 2,
> = A extends UnknownUnit
  ? DivideUnitExponentsCore<A, B> extends Record<string, Exponent>
    ? Unit<FlatternAlias<DivideUnitExponentsCore<A, B>>>
    : never
  : number;

type DivideUnitExponentsCore<A extends UnknownUnit, B extends 2> = {
  [U in keyof GetUnitConfig<A>]: DivideExponents<
    GetExponent<GetUnitConfig<A>, U> extends Exponent
      ? GetExponent<GetUnitConfig<A>, U>
      : 0,
    B
  >;
};
