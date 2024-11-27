// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Square } from "../modifiers/index.ts";

import type { Ampere, Meter } from "./index.ts";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnitClass = BaseUnitClass<{
  Ampere: 1;
  Meter: -2;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricCurrentDensity = AbstractUnitFrom<ElectricCurrentDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnit<M extends UnitSubvalues> = ElectricCurrentDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricCurrentDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricCurrentDensityUnitClass, M>;

/**
 * A unit of {@link ElectricCurrentDensity}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `A/m²`
 */
export type AmperePerSquareMeter = ElectricCurrentDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("AmperePerSquareMeter", () => {
    it("is amperes per square meter", () => {
      assert<Equals<AmperePerSquareMeter, Divide<Ampere, Square<Meter>>>>();
    });
  });
}
