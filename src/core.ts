import { type Exponent } from "./exponents";
import { type RemoveNeverValues, type ExcludeNullUnits } from "./utils";

export type UnitFrom<
  C extends UnknownUnitClass,
  M extends UnknownUnitMeta = NullMeta,
> = C extends UnitClass<infer A>
  ? M extends UnitMeta<infer B>
    ? Unit<
        Record<string, Exponent> extends A ? {} : A,
        Record<string, Exponent> extends B ? {} : B
      >
    : never
  : never;

export type Unit<
  C extends Record<string, Exponent>,
  M extends Record<string, Exponent> = {},
> = number & {
  readonly __uom_types__unit_class: UnitClass<C>;
  readonly __uom_types__unit_meta: UnitMeta<M>;
};

export type UnitClass<T extends Record<string, Exponent>> = UnitKeyValues<T> & {
  readonly __uno_types__unit_class_type: true;
};

export type UnitMeta<T extends Record<string, Exponent>> = UnitKeyValues<T> & {
  readonly __uno_types__unit_meta_type: true;
};

export type NullMeta = {
  readonly __uno_types__unit_meta_type: true;
  readonly __uom_types__keys: never;
  readonly __uom_types__value: {};
};

type UnitKeyValues<T extends Record<string, Exponent>> = {
  readonly __uom_types__keys: keyof ExcludeNullUnits<T>;
  readonly __uom_types__value: RemoveNeverValues<T>;
};

export type AbstractUnitFrom<C extends UnitClass<any>> = C extends UnitClass<
  infer A
>
  ? AbstractUnit<Record<string, Exponent> extends A ? {} : A>
  : never;

export type AbstractUnit<C extends Record<string, Exponent>> = number & {
  readonly __uom_types__unit_class: UnitClass<C>;
};

export type UnknownUnit = Unit<any, any>;
export type UnknownAbstractUnit = AbstractUnit<any>;

type UnknownUnitKeyValues = {
  readonly __uom_types__keys: PropertyKey; // Should just be `string`.
  readonly __uom_types__value: {};
};

export type UnknownUnitClass = UnknownUnitKeyValues & {
  readonly __uno_types__unit_class_type: true;
};
export type UnknownUnitMeta = UnknownUnitKeyValues & {
  readonly __uno_types__unit_meta_type: true;
};
