// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, Divide, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Meter, Volt } from ".";

/**
 * @group Unit Classes
 * @category Electromagnetic
 */
export type ElectricFieldStrengthUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
  Ampere: -1;
}>;

/**
 * @group Abstract Units
 * @category Electromagnetic
 */
export type ElectricFieldStrength = AbstractUnitFrom<ElectricFieldStrengthUnitClass>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricFieldStrengthUnit<M extends UnitSubvalues> = ElectricFieldStrengthUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Electromagnetic
 */
export type ElectricFieldStrengthUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ElectricFieldStrengthUnitClass, M>;

/**
 * A unit of {@link ElectricFieldStrength}.
 *
 * @group Units
 * @category Electromagnetic
 * @symbol `V/m`
 */
export type VoltPerMeter = ElectricFieldStrengthUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("VoltPerMeter", () => {
    it("is volts per meter", () => {
      assert<Equals<VoltPerMeter, Divide<Volt, Meter>>>();
    });
  });
}
