// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Multiply } from "../../units-operations.ts";

import type { Energy, EnergyUnit, EnergyUnitClass, EnergyUnitFrom, Joule, Meter, Newton } from "./index.ts";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type WorkUnitClass = EnergyUnitClass;

/**
 * @group Abstract Units
 * @category Mechanical
 */
export type Work = Energy;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type WorkUnit<M extends UnitSubvalues> = EnergyUnit<M>;

/**
 * @group Unit Generators
 * @category Mechanical
 */
export type WorkUnitFrom<M extends UnknownUnitMeta> = EnergyUnitFrom<M>;

/**
 * A unit of {@link Work}.
 *
 * @group Units
 * @category Mechanical
 * @symbol `N⋅m`
 */
export type NewtonMeter = Joule;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("NewtonMeter", () => {
    it("is newtons by meters", () => {
      assert<Equals<NewtonMeter, Multiply<Newton, Meter>>>();
    });
  });
}
