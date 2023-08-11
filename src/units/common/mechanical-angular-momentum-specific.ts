// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type Multiply,
  type UnknownUnitMeta,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Kilo } from "../modifiers";

import {
  type Gram,
  type Metre,
  type Newton,
  type Second,
  type Joule,
  type Radian,
} from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpecificAngularMomentumUnitClass = BaseUnitClass<{
  Metre: 2;
  Second: -1;
  Radian: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpecificAngularMomentum =
  AbstractUnitFrom<SpecificAngularMomentumUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificAngularMomentumUnit<M extends UnitSubvalues> =
  SpecificAngularMomentumUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpecificAngularMomentumUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<SpecificAngularMomentumUnitClass, M>;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J⋅s/rad/kg`
 */
export type JouleSecondPerRadianPerKilogram = SpecificAngularMomentumUnit<{}>;

/**
 * A unit of {@link SpecificAngularMomentum}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m⋅s/rad/kg`
 */
export type NewtonMetreSecondPerRadianPerKilogram =
  JouleSecondPerRadianPerKilogram;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JouleSecondPerRadianPerKilogram", () => {
    it("is joules by second per radian per kilogram", () => {
      assert<
        Equals<
          JouleSecondPerRadianPerKilogram,
          Divide<Divide<Multiply<Joule, Second>, Radian>, Kilo<Gram>>
        >
      >();
    });
  });

  describe("NewtonMetreSecondPerRadianPerKilogram", () => {
    it("is newton metres by second by radian per kilogram", () => {
      assert<
        Equals<
          NewtonMetreSecondPerRadianPerKilogram,
          Divide<
            Divide<Multiply<Multiply<Newton, Metre>, Second>, Radian>,
            Kilo<Gram>
          >
        >
      >();
    });
  });
}
