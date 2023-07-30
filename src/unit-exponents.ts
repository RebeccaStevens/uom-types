import { type UnitSubvalues, type Unit } from "./core";
import { type DivideExponents, type MultiplyExponents } from "./exponents";
import { type FlatternAlias, type GetExponent } from "./utils";

/**
 * Multiple the exponent values of a unit by a number.
 *
 * Note: Currently exponents can only be multiplied by 2.
 */
export type MultiplyUnitExponents<
  A extends number,
  B extends 2,
> = A extends Unit<infer ACore, infer AMeta>
  ? Unit<
      FlatternAlias<MultiplyUnitExponentsCore<ACore, B>>,
      FlatternAlias<MultiplyUnitExponentsCore<AMeta, B>>
    >
  : number;

type MultiplyUnitExponentsCore<A extends UnitSubvalues, B extends 2> = {
  [E in keyof A]: MultiplyExponents<GetExponent<A, E>, B>;
};

/**
 * Divide the exponent values of a unit by a number.
 *
 * Note: Currently exponents can only be divided by 2.
 */
export type DivideUnitExponents<A extends number, B extends 2> = A extends Unit<
  infer ACore,
  infer AMeta
>
  ? Unit<
      FlatternAlias<DivideUnitExponentsCore<ACore, B>>,
      FlatternAlias<DivideUnitExponentsCore<AMeta, B>>
    >
  : number;

type DivideUnitExponentsCore<A extends UnitSubvalues, B extends 2> = {
  [E in keyof A]: DivideExponents<GetExponent<A, E>, B>;
};
