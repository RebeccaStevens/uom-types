// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { Kelvin, Meter } from "./index.ts";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type TemperatureGradientUnitClass = BaseUnitClass<{
  Kelvin: 1;
  Meter: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type TemperatureGradient = AbstractUnitFrom<TemperatureGradientUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type TemperatureGradientUnit<M extends UnitSubvalues> = TemperatureGradientUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type TemperatureGradientUnitFrom<M extends UnknownUnitMeta> = UnitFrom<TemperatureGradientUnitClass, M>;

/**
 * A unit of {@link TemperatureGradient}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/m`
 */
export type KelvinPerMeter = TemperatureGradientUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("KelvinPerMeter", () => {
    it("is kelvin per meter", () => {
      assert<Equals<KelvinPerMeter, Divide<Kelvin, Meter>>>();
    });
  });
}
