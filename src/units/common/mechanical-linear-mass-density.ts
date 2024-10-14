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
import { type Kilo } from "../modifiers";

import { type Gram, type Meter } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type LinearMassDensityUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Meter: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type LinearMassDensity = AbstractUnitFrom<LinearMassDensityUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type LinearMassDensityUnit<M extends UnitSubvalues> =
  LinearMassDensityUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type LinearMassDensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  LinearMassDensityUnitClass,
  M
>;

/**
 * A unit of {@link LinearMassDensity}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/m`
 */
export type KilogramPerMeter = LinearMassDensityUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("KilogramPerMeter", () => {
    it("is kilograms per meter", () => {
      assert<Equals<KilogramPerMeter, Divide<Kilo<Gram>, Meter>>>();
    });
  });
}
