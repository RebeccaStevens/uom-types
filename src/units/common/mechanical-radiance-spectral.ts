// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide, Multiply } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";
import type { Cubic } from "../modifiers";

import type { Meter, Steradian, Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralRadianceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
  Radian: -2;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralRadiance = AbstractUnitFrom<SpectralRadianceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralRadianceUnit<M extends UnitSubvalues> = SpectralRadianceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralRadianceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpectralRadianceUnitClass, M>;

/**
 * A unit of {@link SpectralRadiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m³)`
 */
export type WattPerSteradianCubicMeter = SpectralRadianceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WattPerSteradianCubicMeter", () => {
    it("is watts per steradian cubic meter", () => {
      assert<Equals<WattPerSteradianCubicMeter, Divide<Watt, Multiply<Steradian, Cubic<Meter>>>>>();
    });
  });
}
