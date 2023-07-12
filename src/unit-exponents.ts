import { type UnitCore } from "./core";
import {
  type DivideExponents,
  type Exponent,
  type MultiplyExponents,
} from "./exponents";
import { type FlatternAlias, type GetExponent } from "./utils";

export type MultiplyUnitExponents<
  A extends number,
  B extends 2,
> = A extends UnitCore<infer ACore, infer AMeta>
  ? UnitCore<
      FlatternAlias<MultiplyUnitExponentsCore<ACore, B>>,
      FlatternAlias<MultiplyUnitExponentsCore<AMeta, B>>
    >
  : number;

type MultiplyUnitExponentsCore<
  A extends Record<string, Exponent>,
  B extends 2,
> = {
  [E in keyof A]: MultiplyExponents<GetExponent<A, E>, B>;
};

export type DivideUnitExponents<
  A extends number,
  B extends 2,
> = A extends UnitCore<infer ACore, infer AMeta>
  ? UnitCore<
      FlatternAlias<DivideUnitExponentsCore<ACore, B>>,
      FlatternAlias<DivideUnitExponentsCore<AMeta, B>>
    >
  : number;

type DivideUnitExponentsCore<
  A extends Record<string, Exponent>,
  B extends 2,
> = {
  [E in keyof A]: DivideExponents<GetExponent<A, E>, B>;
};
