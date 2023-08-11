// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals, type Extends } from "tsafe";

import { type Exponent } from "./exponents";
import { type RemoveNeverValues, type ExcludeUnitZeroSubvalues } from "./utils";

/**
 * A unit without any meta data.
 *
 * @group Abstract Unit Generators
 */
export type AbstractUnit<C extends UnitSubvalues> = number & {
  readonly __uom_types__unit_class: UnitClass<C>;
};

/**
 * Create a unit without meta data from an already existing {@link UnitClass}.
 *
 * @group Abstract Unit Generators
 */
export type AbstractUnitFrom<C extends UnknownUnitClass> = C extends UnitClass<
  infer A
>
  ? AbstractUnit<UnitSubvalues extends A ? {} : A>
  : never;

/**
 * The core unit type.
 *
 * @group Unit Generators
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
 * @group Unit Generators
 */
export type UnitFrom<
  C extends UnknownUnitClass,
  M extends UnknownUnitMeta = UnitMeta<{}>,
> = C extends UnitClass<infer A>
  ? M extends UnitMeta<infer B>
    ? Unit<A, B>
    : never
  : never;

/**
 * A {@link Unit} without any {@link UnitClass}.
 *
 * Used to convert from one {@link Unit} to another of the same {@link UnitClass}.
 *
 * @group Unit Generators
 */
export type UnitConversionRate<M extends UnitSubvalues> = number & {
  readonly __uom_types__unit_meta: UnitMeta<M>;
};

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
export type UnitClass<T extends UnitSubvalues> = UnitKeyValues<T> & {
  readonly __uno_types__unit_class_type: true;
};

/**
 * Used to state how units of the same {@link UnitClass} differ from one another.
 * For example, by a scale factor.
 *
 * @group Unit Components
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
 * An {@link UnitConversionRate} that we don't know anything about.
 *
 * @group Unknown Units
 */
export type UnknownUnitConversionRate = number & {
  readonly __uom_types__unit_meta: UnknownUnitMeta;
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
  readonly __uom_types__keys: keyof ExcludeUnitZeroSubvalues<T> extends string
    ? keyof ExcludeUnitZeroSubvalues<T>
    : never;
  readonly __uom_types__value: RemoveNeverValues<T>;
};

type UnknownUnitKeyValues = {
  readonly __uom_types__keys: string;
  readonly __uom_types__value: {};
};

/**
 * A mapping of subvalue of a unit its magnitude.
 *
 * @group Unit Components
 */
export type UnitSubvalues = Record<string, Exponent>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Unit", () => {
    it("is equivalent to UnitFrom", () => {
      assert<Equals<Unit<{}>, UnitFrom<UnitClass<{}>>>>();
      assert<Equals<Unit<{ a: 1 }>, UnitFrom<UnitClass<{ a: 1 }>>>>();
      assert<Equals<Unit<UnitSubvalues>, UnitFrom<UnitClass<UnitSubvalues>>>>();
    });
  });

  describe("AbstractUnit", () => {
    it("a super type of Unit", () => {
      assert<Extends<Unit<{}>, AbstractUnit<{}>>>();
      assert<Extends<Unit<{ a: 1 }>, AbstractUnit<{ a: 1 }>>>();
      assert<Extends<Unit<UnitSubvalues>, AbstractUnit<UnitSubvalues>>>();
      assert<
        Extends<UnitFrom<UnitClass<{}>>, AbstractUnitFrom<UnitClass<{}>>>
      >();
      assert<
        Extends<
          UnitFrom<UnitClass<{ a: 1 }>>,
          AbstractUnitFrom<UnitClass<{ a: 1 }>>
        >
      >();
      assert<
        Extends<
          UnitFrom<UnitClass<UnitSubvalues>>,
          AbstractUnitFrom<UnitClass<UnitSubvalues>>
        >
      >();
    });
  });

  describe("UnitConversionRate", () => {
    it("a super type of Unit", () => {
      assert<Extends<Unit<{}>, UnitConversionRate<{}>>>();
      assert<Extends<Unit<{}, { a: 1 }>, UnitConversionRate<{ a: 1 }>>>();
      assert<
        Extends<Unit<{}, UnitSubvalues>, UnitConversionRate<UnitSubvalues>>
      >();
      assert<
        Extends<UnitFrom<UnitClass<{}>>, UnitConversionRateFrom<UnitMeta<{}>>>
      >();
      assert<
        Extends<
          UnitFrom<UnitClass<{}>, UnitMeta<{ a: 1 }>>,
          UnitConversionRateFrom<UnitMeta<{ a: 1 }>>
        >
      >();
      assert<
        Extends<
          UnitFrom<UnitClass<{}>, UnitMeta<UnitSubvalues>>,
          UnitConversionRateFrom<UnitMeta<UnitSubvalues>>
        >
      >();
    });
  });

  describe("Unknown", () => {
    const assignableToConcreteTypes = "is assignable to concrete types";

    describe("Unit", () => {
      it(assignableToConcreteTypes, () => {
        assert<Extends<Unit<{}>, UnknownUnit>>();
        assert<Extends<Unit<{ a: 1 }>, UnknownUnit>>();
        assert<Extends<Unit<UnitSubvalues>, UnknownUnit>>();
      });
    });

    describe("AbstractUnit", () => {
      it(assignableToConcreteTypes, () => {
        assert<Extends<AbstractUnit<{}>, UnknownAbstractUnit>>();
        assert<Extends<AbstractUnit<{ a: 1 }>, UnknownAbstractUnit>>();
        assert<Extends<AbstractUnit<UnitSubvalues>, UnknownAbstractUnit>>();
      });
    });

    describe("UnitConversionRate", () => {
      it(assignableToConcreteTypes, () => {
        assert<Extends<UnitConversionRate<{}>, UnknownUnitConversionRate>>();
        assert<
          Extends<UnitConversionRate<{ a: 1 }>, UnknownUnitConversionRate>
        >();
        assert<
          Extends<UnitConversionRate<UnitSubvalues>, UnknownUnitConversionRate>
        >();
      });
    });

    describe("UnitClass", () => {
      it(assignableToConcreteTypes, () => {
        assert<Extends<UnitClass<{}>, UnknownUnitClass>>();
        assert<Extends<UnitClass<{ a: 1 }>, UnknownUnitClass>>();
        assert<Extends<UnitClass<UnitSubvalues>, UnknownUnitClass>>();
      });
    });

    describe("UnitMeta", () => {
      it(assignableToConcreteTypes, () => {
        assert<Extends<UnitMeta<{}>, UnknownUnitMeta>>();
        assert<Extends<UnitMeta<{ a: 1 }>, UnknownUnitMeta>>();
        assert<Extends<UnitMeta<UnitSubvalues>, UnknownUnitMeta>>();
      });
    });

    describe("UnitKeyValues", () => {
      it(assignableToConcreteTypes, () => {
        assert<Extends<UnitKeyValues<{}>, UnknownUnitKeyValues>>();
        assert<Extends<UnitKeyValues<{ a: 1 }>, UnknownUnitKeyValues>>();
        assert<Extends<UnitKeyValues<UnitSubvalues>, UnknownUnitKeyValues>>();
      });
    });
  });
}
