// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Multiply,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Metre, type Weber } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type MagneticMomentUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: 3;
  Second: -2;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type MagneticMoment = AbstractUnitFrom<MagneticMomentUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticMomentUnit<M extends UnitSubvalues> =
  MagneticMomentUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type MagneticMomentUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MagneticMomentUnitClass,
  M
>;

/**
 * A unit of {@link MagneticMoment}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `Wb⋅m`
 */
export type WeberMetre = MagneticMomentUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WeberMetre", () => {
    it("is weber metres", () => {
      assert<Equals<WeberMetre, Multiply<Weber, Metre>>>();
    });
  });
}
