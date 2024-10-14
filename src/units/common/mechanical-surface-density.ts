// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";
import type { Kilo, Square } from "../modifiers";

import type { Gram, Meter } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SurfaceDensityUnitClass = BaseUnitClass<{ Kilogram: 1; Meter: -2 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SurfaceDensity = AbstractUnitFrom<SurfaceDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SurfaceDensityUnit<M extends UnitSubvalues> = SurfaceDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SurfaceDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SurfaceDensityUnitClass, M>;

/**
 * A unit of {@link SurfaceDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m²`
 */
export type KilogramPerSquareMeter = SurfaceDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("KilogramPerSquareMeter", () => {
    it("is kilograms per square meter", () => {
      assert<Equals<KilogramPerSquareMeter, Divide<Kilo<Gram>, Square<Meter>>>>();
    });
  });
}
