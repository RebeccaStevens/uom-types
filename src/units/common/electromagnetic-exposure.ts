// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";
import type { Kilo } from "../modifiers";

import type { Coulomb, Gram } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ExposureUnitClass = BaseUnitClass<{
  Ampere: 1;
  Second: 1;
  Kilogram: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type Exposure = AbstractUnitFrom<ExposureUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ExposureUnit<M extends UnitSubvalues> = ExposureUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ExposureUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ExposureUnitClass, M>;

/**
 * A unit of {@link Exposure}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `C/kg`
 */
export type CoulombPerKilogram = ExposureUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("CoulombPerKilogram", () => {
    it("is coulombs per kilogram", () => {
      assert<Equals<CoulombPerKilogram, Divide<Coulomb, Kilo<Gram>>>>();
    });
  });
}
