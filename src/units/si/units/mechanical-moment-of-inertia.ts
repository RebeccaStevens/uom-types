// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type DivideUnits,
  type MultiplyUnits,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";
import { type Kilo, type Square } from "../modifiers";

import { type Gram, type Metre, type Steradian } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type MomentOfInertiaUnitClass = SiUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Radian: -2;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type MomentOfInertia = AbstractUnitFrom<MomentOfInertiaUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type MomentOfInertiaUnit<M extends UnitSubvalues> =
  MomentOfInertiaUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type MomentOfInertiaUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MomentOfInertiaUnitClass,
  M
>;

/**
 * A unit of {@link MomentOfInertia}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg⋅m²/sr`
 */
export type KilogramSquareMetrePerSteradian = MomentOfInertiaUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<
    Equals<
      KilogramSquareMetrePerSteradian,
      DivideUnits<MultiplyUnits<Kilo<Gram>, Square<Metre>>, Steradian>
    >
  >();
}
