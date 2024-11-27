// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";

import type { Gray, Second } from "./index.ts";

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
export type AbsorbedDoseRateUnit<M extends UnitSubvalues> = AbsorbedDoseRateUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type AbsorbedDoseRateUnitFrom<M extends UnknownUnitMeta> = UnitFrom<AbsorbedDoseRateUnitClass, M>;

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
