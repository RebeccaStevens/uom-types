// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type AbstractUnitFrom,
  type Divide,
  type UnitFrom,
  type UnitMeta,
  type UnitSubvalues,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";
import { type Kilo, type Square } from "../modifiers";

import { type Gram, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SurfaceDensityUnitClass = BaseUnitClass<{ Kilogram: 1; Metre: -2 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SurfaceDensity = AbstractUnitFrom<SurfaceDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SurfaceDensityUnit<M extends UnitSubvalues> =
  SurfaceDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SurfaceDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SurfaceDensityUnitClass,
  M
>;

/**
 * A unit of {@link SurfaceDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m²`
 */
export type KilogramPerSquareMetre = SurfaceDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("KilogramPerSquareMetre", () => {
    it("is kilograms per square metre", () => {
      assert<
        Equals<KilogramPerSquareMetre, Divide<Kilo<Gram>, Square<Metre>>>
      >();
    });
  });
}
