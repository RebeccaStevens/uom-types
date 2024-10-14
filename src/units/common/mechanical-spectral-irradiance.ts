// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";
import type { Cubic } from "../modifiers";

import type { Meter, Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralIrradianceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralIrradiance = AbstractUnitFrom<SpectralIrradianceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralIrradianceUnit<M extends UnitSubvalues> = SpectralIrradianceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralIrradianceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpectralIrradianceUnitClass, M>;

/**
 * A unit of {@link SpectralIrradiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m³`
 */
export type WattPerCubicMeter = SpectralIrradianceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WattPerCubicMeter", () => {
    it("is watts per cubic meter", () => {
      assert<Equals<WattPerCubicMeter, Divide<Watt, Cubic<Meter>>>>();
    });
  });
}
