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

import { type Meter, type Coulomb } from ".";

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
export type ElectricChargeDensity =
  AbstractUnitFrom<ElectricChargeDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricChargeDensityUnit<M extends UnitSubvalues> =
  ElectricChargeDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricChargeDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  ElectricChargeDensityUnitClass,
  M
>;

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
