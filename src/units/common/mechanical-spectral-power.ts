// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core";
import type { Divide } from "../../units-operations";
import type { BaseUnitClass } from "../base-units";

import type { Meter, Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralPowerUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralPower = AbstractUnitFrom<SpectralPowerUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralPowerUnit<M extends UnitSubvalues> = SpectralPowerUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralPowerUnitFrom<M extends UnknownUnitMeta> = UnitFrom<SpectralPowerUnitClass, M>;

/**
 * A unit of {@link SpectralPower}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m`
 */
export type WattPerMeter = SpectralPowerUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WattPerMeter", () => {
    it("is watts per meter", () => {
      assert<Equals<WattPerMeter, Divide<Watt, Meter>>>();
    });
  });
}
