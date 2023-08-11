// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type Divide,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type Cubic } from "..";
import { type BaseUnitClass } from "../base-units";

import { type Metre, type Watt } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type SpectralIrradianceUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Metre: -1;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type SpectralIrradiance = AbstractUnitFrom<SpectralIrradianceUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralIrradianceUnit<M extends UnitSubvalues> =
  SpectralIrradianceUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type SpectralIrradianceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpectralIrradianceUnitClass,
  M
>;

/**
 * A unit of {@link SpectralIrradiance}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `W/m³`
 */
export type WattPerCubicMetre = SpectralIrradianceUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WattPerCubicMetre", () => {
    it("is watts per cubic metre", () => {
      assert<Equals<WattPerCubicMetre, Divide<Watt, Cubic<Metre>>>>();
    });
  });
}
