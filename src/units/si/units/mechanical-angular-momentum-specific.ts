// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type DivideUnits,
  type MultiplyUnits,
  type UnknownUnitMeta,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import {
  type Metre,
  type Newton,
  type Second,
  type Joule,
  type Kilogram,
  type Radian,
} from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpecificAngularMomentumUnitClass = SiUnitClass<{
  Metre: 2;
  Second: -1;
  Radian: -1;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type SpecificAngularMomentum =
  AbstractUnitFrom<SpecificAngularMomentumUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type SpecificAngularMomentumUnit<M extends UnitSubvalues> =
  SpecificAngularMomentumUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
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
  SpecificAngularMomentumUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      JouleSecondPerRadianPerKilogram,
      NewtonMetreSecondPerRadianPerKilogram
    >
  >();
  assert<
    Equals<
      JouleSecondPerRadianPerKilogram,
      DivideUnits<DivideUnits<MultiplyUnits<Joule, Second>, Radian>, Kilogram>
    >
  >();
  assert<
    Equals<
      NewtonMetreSecondPerRadianPerKilogram,
      DivideUnits<
        DivideUnits<
          MultiplyUnits<MultiplyUnits<Newton, Metre>, Second>,
          Radian
        >,
        Kilogram
      >
    >
  >();
}
