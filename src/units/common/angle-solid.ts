// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";
import type { Square } from "../modifiers";

import type { Radian } from ".";

/**
 * @group Unit Classes
 * @category Angle (Solid)
 */
export type SolidAngleUnitClass = BaseUnitClass<{
  Radian: 2;
}>;

/**
 * @group Abstract Units
 * @category Angle (Solid)
 */
export type SolidAngle = AbstractUnitFrom<SolidAngleUnitClass>;

/**
 * @group Unit Generators
 * @category Angle (Solid)
 */
export type SolidAngleUnit<M extends UnitSubvalues> = SolidAngleUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Angle (Solid)
 */
export type SolidAngleUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SolidAngleUnitClass, M>;

/**
 * A unit of {@link SolidAngle}.
 *
 * One steradian is the solid angle of a sphere subtended by a portion of the
 * surface whose area is equal to the square of the sphere's radius.
 * The total solid angle about a point is equal to 4π steradian.
 *
 * @group Units
 * @category Derived
 * @category Angle (Solid)
 * @symbol `sr`
 */
export type Steradian = SolidAngleUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("Steradian", () => {
    it("is radians squared", () => {
      assert<Equals<Steradian, Square<Radian>>>();
    });
  });
}
