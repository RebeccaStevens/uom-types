import { type Unit, type UnknownUnit, type UnitValue } from "./core";
import {
  type Exponent,
  type NegativeExponent,
  type SumExponents,
} from "./exponents";
import {
  type GetUnitConfig,
  type FlatternAlias,
  type KeysOfTwoObjects,
  type KeysOfKeyOfTwoObjects,
  type GetUnitValues,
} from "./utils";

export type Inverse<T extends number> = T extends UnknownUnit
  ? InverseUnitCore<T> extends Record<string, UnitValue>
    ? Unit<FlatternAlias<InverseUnitCore<T>>>
    : never
  : number;

type InverseUnitCore<T extends UnknownUnit> = {
  [U in keyof GetUnitConfig<T>]: {
    [E in keyof GetUnitConfig<T>[U]]: NegativeExponent<GetUnitConfig<T>[U][E]>;
  };
};

export type Multiply<A extends number, B extends number> = A extends UnknownUnit
  ? B extends UnknownUnit
    ? MultiplyUnitsCore<A, B> extends Record<string, UnitValue>
      ? Unit<FlatternAlias<MultiplyUnitsCore<A, B>>>
      : never
    : A
  : B extends UnknownUnit
  ? B
  : number;

type MultiplyUnitsCore<A extends UnknownUnit, B extends UnknownUnit> = {
  [U in KeysOfTwoObjects<GetUnitConfig<A>, GetUnitConfig<B>>]: {
    [E in KeysOfKeyOfTwoObjects<
      GetUnitConfig<A>,
      GetUnitConfig<B>,
      U
    >]: SumExponents<
      E extends keyof GetUnitValues<GetUnitConfig<A>, U>
        ? GetUnitValues<GetUnitConfig<A>, U>[E] extends Exponent
          ? GetUnitValues<GetUnitConfig<A>, U>[E]
          : 0
        : 0,
      E extends keyof GetUnitValues<GetUnitConfig<B>, U>
        ? GetUnitValues<GetUnitConfig<B>, U>[E] extends Exponent
          ? GetUnitValues<GetUnitConfig<B>, U>[E]
          : 0
        : 0
    >;
  };
};

export type Divide<A extends number, B extends number> = A extends UnknownUnit
  ? B extends UnknownUnit
    ? Multiply<A, Inverse<B> extends UnknownUnit ? Inverse<B> : never>
    : A
  : B extends UnknownUnit
  ? Inverse<B>
  : number;
