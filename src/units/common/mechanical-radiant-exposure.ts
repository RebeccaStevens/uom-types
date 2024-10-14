// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";
import type { Square } from "../modifiers";

import type { Joule, Meter } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type RadiantExposureUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type RadiantExposure = AbstractUnitFrom<RadiantExposureUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadiantExposureUnit<M extends UnitSubvalues> = RadiantExposureUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadiantExposureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<RadiantExposureUnitClass, M>;

/**
 * A unit of {@link RadiantExposure}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/m²`
 */
export type JoulePerSquareMeter = RadiantExposureUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JoulePerSquareMeter", () => {
    it("is joules per square meter", () => {
      assert<Equals<JoulePerSquareMeter, Divide<Joule, Square<Meter>>>>();
    });
  });
}
