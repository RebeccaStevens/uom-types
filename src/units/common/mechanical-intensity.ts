// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";
import type { Square } from "../modifiers";

import type { Meter, Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type IntensityUnitClass = BaseUnitClass<{ Kilogram: 1; Second: -3 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Intensity = AbstractUnitFrom<IntensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type IntensityUnit<M extends UnitSubvalues> = IntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type IntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<IntensityUnitClass, M>;

/**
 * A unit of {@link Intensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m²`
 */
export type WattPerSquareMeter = IntensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WattPerSquareMeter", () => {
    it("is watts per square meter", () => {
      assert<Equals<WattPerSquareMeter, Divide<Watt, Square<Meter>>>>();
    });
  });
}
