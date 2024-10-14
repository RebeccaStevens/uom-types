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

import { type Gray, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type AbsorbedDoseRateUnitClass = BaseUnitClass<{
  Meter: 2;
  Second: -3;
}>;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type AbsorbedDoseRate = AbstractUnitFrom<AbsorbedDoseRateUnitClass>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type AbsorbedDoseRateUnit<M extends UnitSubvalues> =
  AbsorbedDoseRateUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type AbsorbedDoseRateUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AbsorbedDoseRateUnitClass,
  M
>;

/**
 * A unit of {@link AbsorbedDoseRate}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `Gy/s`
 */
export type GrayPerSecond = AbsorbedDoseRateUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("GrayPerSecond", () => {
    it("is grays per second", () => {
      assert<Equals<GrayPerSecond, Divide<Gray, Second>>>();
    });
  });
}
