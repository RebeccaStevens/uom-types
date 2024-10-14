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
import { type Cubic } from "../modifiers";

import { type Meter, type Joule } from ".";

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
export type EnergyDensityUnit<M extends UnitSubvalues> = EnergyDensityUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type EnergyDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  EnergyDensityUnitClass,
  M
>;

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
