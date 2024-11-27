import type { Exponent } from "./exponents.ts";
import type {
  BrandUnitClass,
  BrandUnitClassType,
  BrandUnitKeyValues,
  BrandUnitMeta,
  ExcludeUnitZeroSubvalues,
  RemoveNeverValues,
} from "./utils.ts";

/**
 * A unit without any meta data.
 *
 * @group Abstract Unit Generators
 */
export type AbstractUnit<C extends UnitSubvalues> = number & BrandUnitClass<UnitClass<C>>;

/**
 * Create a unit without meta data from an already existing {@link UnitClass}.
 *
 * @group Abstract Unit Generators
 */
export type AbstractUnitFrom<C extends UnknownUnitClass> =
  C extends UnitClass<infer A> ? AbstractUnit<UnitSubvalues extends A ? {} : A> : never;

/**
 * The core unit type.
 *
 * @group Unit Generators
 */
export type Unit<C extends UnitSubvalues, M extends UnitSubvalues = {}> = number &
  BrandUnitClass<UnitClass<C>> &
  BrandUnitMeta<UnitMeta<M>>;

/**
 * Create a {@link Unit} from already existing {@link UnitClass} and {@link UnitMeta}.
 *
 * @group Unit Generators
 */
export type UnitFrom<C extends UnknownUnitClass, M extends UnknownUnitMeta = UnitMeta<{}>> =
  C extends UnitClass<infer A> ? (M extends UnitMeta<infer B> ? Unit<A, B> : never) : never;

/**
 * A {@link Unit} without any {@link UnitClass}.
 *
 * Used to convert from one {@link Unit} to another of the same {@link UnitClass}.
 *
 * @group Unit Generators
 */
export type UnitConversionRate<M extends UnitSubvalues> = number & BrandUnitMeta<UnitMeta<M>>;

/**
 * Create a {@link UnitConversionRate} from already existing {@link UnitMeta}.
 *
 * @group Unit Generators
 */
export type UnitConversionRateFrom<M extends UnknownUnitMeta> =
  M extends UnitMeta<infer A> ? UnitConversionRate<A> : never;

/**
 * Used to determine what a unit is of. For example, length, volume, mass etc.
 *
 * @group Unit Components
 */
export type UnitClass<T extends UnitSubvalues> = UnitKeyValues<T> & BrandUnitClassType;

/**
 * Used to state how units of the same {@link UnitClass} differ from one another.
 * For example, by a scale factor.
 *
 * @group Unit Components
 */
export type UnitMeta<T extends UnitSubvalues> = UnitKeyValues<T> &
  Readonly<{
    __uno_types__unit_meta_type: true;
  }>;

/**
 * A {@link Unit} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownUnit = UnknownAbstractUnit & BrandUnitMeta<UnknownUnitMeta>;

/**
 * An {@link AbstractUnit} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownAbstractUnit = number & BrandUnitClass<UnknownUnitClass>;

/**
 * An {@link UnitConversionRate} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownUnitConversionRate = number & BrandUnitMeta<UnknownUnitMeta>;

/**
 * A {@link UnitClass} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownUnitClass = UnknownUnitKeyValues & BrandUnitClassType;

/**
 * A {@link UnitMeta} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownUnitMeta = UnknownUnitKeyValues &
  Readonly<{
    __uno_types__unit_meta_type: true;
  }>;

/**
 * @internal
 */
export type UnitKeyValues<T extends UnitSubvalues> = BrandUnitKeyValues<
  keyof ExcludeUnitZeroSubvalues<T> extends string ? keyof ExcludeUnitZeroSubvalues<T> : never,
  RemoveNeverValues<T>
>;

/**
 * @internal
 */
export type UnknownUnitKeyValues = BrandUnitKeyValues<string, {}>;

/**
 * A mapping of subvalue of a unit its magnitude.
 *
 * @group Unit Components
 */
export type UnitSubvalues = Record<string, Exponent>;
