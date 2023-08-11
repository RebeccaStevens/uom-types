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

import { type Coulomb, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensityUnitClass = BaseUnitClass<{
  Ampere: 1;
  Second: 1;
  Metre: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensity =
  AbstractUnitFrom<ElectricLinearChargeDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensityUnit<M extends UnitSubvalues> =
  ElectricLinearChargeDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricLinearChargeDensityUnitFrom<M extends UnknownUnitMeta> =
  UnitFrom<ElectricLinearChargeDensityUnitClass, M>;

/**
 * A unit of {@link ElectricLinearChargeDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/m`
 */
export type CoulombPerMetre = ElectricLinearChargeDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("CoulombPerMetre", () => {
    it("is coulombs per ampere", () => {
      assert<Equals<CoulombPerMetre, Divide<Coulomb, Metre>>>();
    });
  });
}
