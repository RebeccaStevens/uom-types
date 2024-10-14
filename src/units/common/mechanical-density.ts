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
import { type Kilo, type Cubic } from "../modifiers";

import { type Gram, type Meter } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type DensityUnitClass = BaseUnitClass<{ Kilogram: 1; Meter: -3 }>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Density = AbstractUnitFrom<DensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type DensityUnit<M extends UnitSubvalues> = DensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type DensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  DensityUnitClass,
  M
>;

/**
 * A unit of {@link Density}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m³`
 */
export type KilogramPerCubicMeter = DensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("KilogramPerCubicMeter", () => {
    it("is kilograms per cubic meter", () => {
      assert<Equals<KilogramPerCubicMeter, Divide<Kilo<Gram>, Cubic<Meter>>>>();
    });
  });
}
