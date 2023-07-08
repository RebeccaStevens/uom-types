import { type Unit, type UnitValue, type UnknownUnit } from "./core";
import {
  type DivideExponents,
  type Exponent,
  type MultiplyExponents,
} from "./exponents";
import {
  type FlatternAlias,
  type GetUnitConfig,
  type GetUnitValues,
} from "./utils";

export type MultiplyUnitExponents<
  A extends number,
  B extends 2,
> = A extends UnknownUnit
  ? MultiplyUnitExponentsCore<A, B> extends Record<string, UnitValue>
    ? Unit<FlatternAlias<MultiplyUnitExponentsCore<A, B>>>
    : never
  : number;

type MultiplyUnitExponentsCore<A extends UnknownUnit, B extends 2> = {
  [U in keyof GetUnitConfig<A>]: {
    [E in keyof GetUnitConfig<A>[U]]: MultiplyExponents<
      E extends keyof GetUnitValues<GetUnitConfig<A>, U>
        ? GetUnitValues<GetUnitConfig<A>, U>[E] extends Exponent
          ? GetUnitValues<GetUnitConfig<A>, U>[E]
          : 0
        : 0,
      B
    >;
  };
};

export type DivideUnitExponents<
  A extends number,
  B extends 2,
> = A extends UnknownUnit
  ? DivideUnitExponentsCore<A, B> extends Record<string, UnitValue>
    ? Unit<FlatternAlias<DivideUnitExponentsCore<A, B>>>
    : never
  : number;

type DivideUnitExponentsCore<A extends UnknownUnit, B extends 2> = {
  [U in keyof GetUnitConfig<A>]: {
    [E in keyof GetUnitConfig<A>[U]]: DivideExponents<
      E extends keyof GetUnitValues<GetUnitConfig<A>, U>
        ? GetUnitValues<GetUnitConfig<A>, U>[E] extends Exponent
          ? GetUnitValues<GetUnitConfig<A>, U>[E]
          : 0
        : 0,
      B
    >;
  };
};
