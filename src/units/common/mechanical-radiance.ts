// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type {
  AbstractUnitFrom,
  Divide,
  Multiply,
  UnitFrom,
  UnitMeta,
  UnitSubvalues,
  UnknownUnitMeta,
} from "#uom-types";

import type { BaseUnitClass } from "../base-units";
import type { Square } from "../modifiers";

import type { Meter, Steradian, Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type RadianceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -3;
  Radian: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Radiance = AbstractUnitFrom<RadianceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadianceUnit<M extends UnitSubvalues> = RadianceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type RadianceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<RadianceUnitClass, M>;

/**
 * A unit of {@link Radiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m²)`
 */
export type WattPerSteradianSquareMeter = RadianceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WattPerSteradianSquareMeter", () => {
    it("is watts per steradian square meter", () => {
      assert<Equals<WattPerSteradianSquareMeter, Divide<Watt, Multiply<Steradian, Square<Meter>>>>>();
    });
  });
}
