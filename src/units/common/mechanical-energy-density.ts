// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";
import type { Cubic } from "../modifiers";

import type { Joule, Meter } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type EnergyDensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
  Second: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type EnergyDensity = AbstractUnitFrom<EnergyDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyDensityUnit<M extends UnitSubvalues> = EnergyDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<EnergyDensityUnitClass, M>;

/**
 * A unit of {@link EnergyDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `J/m³`
 */
export type JoulePerCubicMeter = EnergyDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("JoulePerCubicMeter", () => {
    it("is joules per cubic meter", () => {
      assert<Equals<JoulePerCubicMeter, Divide<Joule, Cubic<Meter>>>>();
    });
  });
}
