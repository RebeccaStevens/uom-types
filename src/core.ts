// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Extends } from "tsafe";

import { type Exponent } from "./exponents";
import { type RemoveNeverValues, type ExcludeUnitZeroSubvalues } from "./utils";

/**
 * A unit without any meta data.
 *
 * @group Abstract Unit Creators
 */
export type AbstractUnit<C extends UnitSubvalues> = number & {
  readonly __uom_types__unit_class: UnitClass<C>;
};

/**
 * Create a unit without meta data from an already existing {@link UnitClass}.
 *
 * @group Abstract Unit Creators
 */
export type AbstractUnitFrom<C extends UnknownUnitClass> = C extends UnitClass<
  infer A
>
  ? AbstractUnit<UnitSubvalues extends A ? {} : A>
  : never;

/**
 * The core unit type.
 *
 * @group Unit Creators
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
 *
 * @group Unit Creators
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
 * A {@link Unit} without any {@link UnitClass}.
 *
 * Used to convert from one {@link Unit} to another of the same {@link UnitClass}.
 *
 * @group Unit Creators
 */
export type UnitConversionRate<M extends UnitSubvalues> = Unit<{}, M>;

/**
 * Create a {@link UnitConversionRate} from already existing {@link UnitMeta}.
 *
 * @group Unit Creators
 */
export type UnitConversionRateFrom<M extends UnknownUnitMeta> =
  M extends UnitMeta<infer A>
    ? UnitConversionRate<UnitSubvalues extends A ? {} : A>
    : never;

/**
 * Used to determine what a unit is of. For example, length, volume, mass etc.
 *
 * @group Unit Component
 */
export type UnitClass<T extends UnitSubvalues> = UnitKeyValues<T> & {
  readonly __uno_types__unit_class_type: true;
};

/**
 * Used to state how units of the same {@link UnitClass} differ from one another.
 * For example, by a scale factor.
 *
 * @group Unit Component
 */
export type UnitMeta<T extends UnitSubvalues> = UnitKeyValues<T> & {
  readonly __uno_types__unit_meta_type: true;
};

/**
 * A {@link Unit} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownUnit = UnknownAbstractUnit & {
  readonly __uom_types__unit_meta: UnknownUnitMeta;
};

/**
 * An {@link AbstractUnit} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownAbstractUnit = number & {
  readonly __uom_types__unit_class: UnknownUnitClass;
};

/**
 * A {@link UnitClass} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownUnitClass = UnknownUnitKeyValues & {
  readonly __uno_types__unit_class_type: true;
};

/**
 * A {@link UnitMeta} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownUnitMeta = UnknownUnitKeyValues & {
  readonly __uno_types__unit_meta_type: true;
};

type UnitKeyValues<T extends UnitSubvalues> = {
  readonly __uom_types__keys: keyof ExcludeUnitZeroSubvalues<T>;
  readonly __uom_types__value: RemoveNeverValues<T>;
};

type UnknownUnitKeyValues = {
  readonly __uom_types__keys: PropertyKey; // TODO: Should just be `string`.
  readonly __uom_types__value: {};
};

/**
 * A mapping of subvalue of a unit its magnitude.
 *
 * @group Unit Component
 */
export type UnitSubvalues = Record<string, Exponent>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Extends<Unit<{}>, UnknownUnit>>();
  assert<Extends<AbstractUnit<{}>, UnknownAbstractUnit>>();
  assert<Extends<UnitClass<{}>, UnknownUnitClass>>();
  assert<Extends<UnitMeta<{}>, UnknownUnitMeta>>();
  assert<Extends<UnitKeyValues<{}>, UnknownUnitKeyValues>>();

  assert<Extends<Unit<{ a: 1 }>, UnknownUnit>>();
  assert<Extends<AbstractUnit<{ a: 1 }>, UnknownAbstractUnit>>();
  assert<Extends<UnitClass<{ a: 1 }>, UnknownUnitClass>>();
  assert<Extends<UnitMeta<{ a: 1 }>, UnknownUnitMeta>>();
  assert<Extends<UnitKeyValues<{ a: 1 }>, UnknownUnitKeyValues>>();

  assert<Extends<Unit<UnitSubvalues>, UnknownUnit>>();
  assert<Extends<AbstractUnit<UnitSubvalues>, UnknownAbstractUnit>>();
  assert<Extends<UnitClass<UnitSubvalues>, UnknownUnitClass>>();
  assert<Extends<UnitMeta<UnitSubvalues>, UnknownUnitMeta>>();
  assert<Extends<UnitKeyValues<UnitSubvalues>, UnknownUnitKeyValues>>();
}
