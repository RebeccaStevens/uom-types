import { type Exponent } from "./exponents";
import { type RemoveNeverValues, type ExcludeNullUnits } from "./utils";

/**
 * A unit without any meta data.
 */
export type AbstractUnit<C extends UnitSubvalues> = number & {
  readonly __uom_types__unit_class: UnitClass<C>;
};

/**
 * Create a unit without meta data from an already existing {@link UnitClass}.
 */
export type AbstractUnitFrom<C extends UnknownUnitClass> = C extends UnitClass<
  infer A
>
  ? AbstractUnit<UnitSubvalues extends A ? {} : A>
  : never;

/**
 * The core unit type.
 */
export type Unit<
  C extends UnitSubvalues,
  M extends UnitSubvalues = {},
> = number & {
  readonly __uom_types__unit_class: UnitClass<C>;
  readonly __uom_types__unit_meta: UnitMeta<M>;
};

/**
 * Create a {@link Unit} from already existing {@link UnitClass} and {@link UnitMeta}.
 */
export type UnitFrom<
  C extends UnknownUnitClass,
  M extends UnknownUnitMeta = UnitMeta<{}>,
> = C extends UnitClass<infer A>
  ? M extends UnitMeta<infer B>
    ? Unit<UnitSubvalues extends A ? {} : A, UnitSubvalues extends B ? {} : B>
    : never
  : never;

/**
 * Used to determine what a unit is of. For example, length, volume, mass etc.
 */
export type UnitClass<T extends UnitSubvalues> = UnitKeyValues<T> & {
  readonly __uno_types__unit_class_type: true;
};

/**
 * Used to state how units of the same {@link UnitClass} differ from one another.
 * For example, by a scale factor.
 */
export type UnitMeta<T extends UnitSubvalues> = UnitKeyValues<T> & {
  readonly __uno_types__unit_meta_type: true;
};

/**
 * A {@link Unit} that we don't know anything about.
 */
export type UnknownUnit = UnknownAbstractUnit & {
  readonly __uom_types__unit_meta: UnknownUnitMeta;
};

/**
 * An {@link AbstractUnit} that we don't know anything about.
 */
export type UnknownAbstractUnit = number & {
  readonly __uom_types__unit_class: UnknownUnitClass;
};

/**
 * A {@link UnitClass} that we don't know anything about.
 */
export type UnknownUnitClass = UnknownUnitKeyValues & {
  readonly __uno_types__unit_class_type: true;
};

/**
 * A {@link UnitMeta} that we don't know anything about.
 */
export type UnknownUnitMeta = UnknownUnitKeyValues & {
  readonly __uno_types__unit_meta_type: true;
};

type UnitKeyValues<T extends UnitSubvalues> = {
  readonly __uom_types__keys: keyof ExcludeNullUnits<T>;
  readonly __uom_types__value: RemoveNeverValues<T>;
};

type UnknownUnitKeyValues = {
  readonly __uom_types__keys: PropertyKey; // TODO: Should just be `string`.
  readonly __uom_types__value: {};
};

/**
 * A mapping of subvalue of a unit its magnitude.
 */
export type UnitSubvalues = Record<string, Exponent>;
