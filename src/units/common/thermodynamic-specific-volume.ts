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
import { type Kilo, type Cubic } from "../modifiers";

import { type Gram, type Meter } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type SpecificVolumeUnitClass = BaseUnitClass<{ Kilogram: -1; Meter: 3 }>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type SpecificVolume = AbstractUnitFrom<SpecificVolumeUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type SpecificVolumeUnit<M extends UnitSubvalues> =
  SpecificVolumeUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type SpecificVolumeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  SpecificVolumeUnitClass,
  M
>;

/**
 * A unit of {@link SpecificVolume}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `m³/kg`
 */
export type CubicMeterPerKilogram = SpecificVolumeUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("CubicMeterPerKilogram", () => {
    it("is cubic meter per kilogram", () => {
      assert<Equals<CubicMeterPerKilogram, Divide<Cubic<Meter>, Kilo<Gram>>>>();
    });
  });
}
