// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type {
  AbstractUnitFrom,
  Divide,
  Multiply,
  UnitFrom,
  UnitMeta,
  UnitSubvalues,
  UnknownUnitMeta,
} from "#uom-types";

import type { BaseUnitClass } from "../base-units";

import type { Kelvin, Meter, Watt } from ".";

/**
 * @group Unit Classes
 * @category Thermodynamic
 */
export type ThermalConductivityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: 1;
  Second: -3;
  Kelvin: -1;
}>;

/**
 * @group Abstract Units
 * @category Thermodynamic
 */
export type ThermalConductivity = AbstractUnitFrom<ThermalConductivityUnitClass>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalConductivityUnit<M extends UnitSubvalues> = ThermalConductivityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Thermodynamic
 */
export type ThermalConductivityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<ThermalConductivityUnitClass, M>;

/**
 * A unit of {@link ThermalConductivity}.
 *
 * @group Units
 * @category Thermodynamic
 * @symbol `W/(m⋅K)`
 */
export type WattPerMeterKelvin = ThermalConductivityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("WattPerMeterKelvin", () => {
    it("is watts per meter kelvin", () => {
      assert<Equals<WattPerMeterKelvin, Divide<Watt, Multiply<Meter, Kelvin>>>>();
    });
  });
}
