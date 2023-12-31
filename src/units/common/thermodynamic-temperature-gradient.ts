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

import { type BaseUnitClass } from "../base-units";

import { type Kelvin, type Metre } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type TemperatureGradientUnitClass = BaseUnitClass<{
  Kelvin: 1;
  Metre: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type TemperatureGradient =
  AbstractUnitFrom<TemperatureGradientUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type TemperatureGradientUnit<M extends UnitSubvalues> =
  TemperatureGradientUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type TemperatureGradientUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  TemperatureGradientUnitClass,
  M
>;

/**
 * A unit of {@link TemperatureGradient}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `K/m`
 */
export type KelvinPerMetre = TemperatureGradientUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("KelvinPerMetre", () => {
    it("is kelvin per metre", () => {
      assert<Equals<KelvinPerMetre, Divide<Kelvin, Metre>>>();
    });
  });
}
