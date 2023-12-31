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

import { type Gram, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type MassFlowRateUnitClass = BaseUnitClass<{
  Kilogram: 1;
  Second: -1;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type MassFlowRate = AbstractUnitFrom<MassFlowRateUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MassFlowRateUnit<M extends UnitSubvalues> = MassFlowRateUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type MassFlowRateUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  MassFlowRateUnitClass,
  M
>;

/**
 * A unit of {@link MassFlowRate}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `kg/s`
 */
export type KilogramPerSecond = MassFlowRateUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("KilogramPerSecond", () => {
    it("is kilograms per second", () => {
      assert<Equals<KilogramPerSecond, Divide<Kilo<Gram>, Second>>>();
    });
  });
}
