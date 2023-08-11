// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type Multiply,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Kilo, type Square } from "../modifiers";

import { type Gram, type Metre, type Steradian } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type MomentOfInertiaUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 2;
  Radian: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type MomentOfInertia = AbstractUnitFrom<MomentOfInertiaUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MomentOfInertiaUnit<M extends UnitSubvalues> =
  MomentOfInertiaUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
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
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("KilogramSquareMetrePerSteradian", () => {
    it("is kilograms by square metres per steradian", () => {
      assert<
        Equals<
          KilogramSquareMetrePerSteradian,
          Divide<Multiply<Kilo<Gram>, Square<Metre>>, Steradian>
        >
      >();
    });
  });
}
