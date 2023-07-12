import { type Exponent } from "./exponents";
import { type RemoveNeverValues, type ExcludeNullUnits } from "./utils";

export type Unit<
  C extends UnitClass<any>,
  M extends UnitMeta<any> = NullMeta,
> = C extends UnitClass<infer A>
  ? M extends UnitMeta<infer B>
    ? UnitCore<
        Record<string, Exponent> extends A ? {} : A,
        Record<string, Exponent> extends B ? {} : B
      >
    : never
  : never;

export type UnitCore<
  C extends Record<string, Exponent>,
  M extends Record<string, Exponent> = {},
> = number & {
  readonly __uom_types__unit_class: UnitClass<C>;
  readonly __uom_types__unit_meta: UnitMeta<M>;
};

export type UnitClass<T extends Record<string, Exponent>> = UnitKeyValues<T>;

export type UnitMeta<T extends Record<string, Exponent>> = UnitKeyValues<T>;

export type NullMeta = {
  readonly __uom_types__unit_meta: true;
  readonly __uom_types__keys: never;
  readonly __uom_types__value: {};
};

type UnitKeyValues<T extends Record<string, Exponent>> = {
  readonly __uom_types__keys: keyof ExcludeNullUnits<T>;
  readonly __uom_types__value: RemoveNeverValues<T>;
};

export type AbstractUnit<C extends UnitClass<any>> = C extends UnitClass<
  infer A
>
  ? AbstractUnitCore<Record<string, Exponent> extends A ? {} : A>
  : never;

export type AbstractUnitCore<C extends Record<string, Exponent>> = number & {
  readonly __uom_types__unit_class: UnitClass<C>;
};
