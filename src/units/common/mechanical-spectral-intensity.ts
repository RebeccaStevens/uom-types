// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Multiply,
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type BaseUnitClass } from "../base-units";

import { type Meter, type Steradian, type Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralIntensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
  Radian: -2;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralIntensity = AbstractUnitFrom<SpectralIntensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralIntensityUnit<M extends UnitSubvalues> =
  SpectralIntensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralIntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpectralIntensityUnitClass,
  M
>;

/**
 * A unit of {@link SpectralIntensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/(sr⋅m)`
 */
export type WattPerSteradianMeter = SpectralIntensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WattPerSteradianMeter", () => {
    it("is watts per steradian meter", () => {
      assert<
        Equals<WattPerSteradianMeter, Divide<Watt, Multiply<Steradian, Meter>>>
      >();
    });
  });
}
