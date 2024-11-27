// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { Coulomb, Meter } from "./index.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricChargeDensityUnitClass = BaseUnitClass<{
  Ampere: 1;
  Second: 1;
  Meter: -3;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricChargeDensity = AbstractUnitFrom<ElectricChargeDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricChargeDensityUnit<M extends UnitSubvalues> = ElectricChargeDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricChargeDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricChargeDensityUnitClass, M>;

/**
 * A unit of {@link ElectricChargeDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m³`
 */
export type CoulombPerCubicMeter = ElectricChargeDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("CoulombPerCubicMeter", () => {
    it("is coulombs per cubic meter", () => {
      assert<Equals<CoulombPerCubicMeter, Divide<Coulomb, Cubic<Meter>>>>();
    });
  });
}
