// eslint-disable-next-line import/no-extraneous-dependencies
import { type Equals, assert } from "tsafe";

import type { AbstractUnitFrom, UnitFrom, UnitMeta, UnitSubvalues, UnknownUnitMeta } from "../../core.ts";
import type { Divide } from "../../units-operations.ts";
import type { BaseUnitClass } from "../base-units.ts";
import type { Cubic } from "../modifiers/index.ts";

import type { Meter, Second } from "./index.ts";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlowUnitClass = BaseUnitClass<{
  Meter: 3;
  Second: -1;
}>;

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlow = AbstractUnitFrom<VolumetricFlowUnitClass>;

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlowUnit<M extends UnitSubvalues> = VolumetricFlowUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlowUnitFrom<M extends UnknownUnitMeta> = UnitFrom<VolumetricFlowUnitClass, M>;

/**
 * A unit of {@link VolumetricFlow}.
 *
 * @group Units
 * @category Kinematic
 * @symbol `m³/s`
 */
export type CubicMeterPerSecond = VolumetricFlowUnit<{}>;

// Tests
if (import.meta.vitest !== undefined) {
  const { describe, it } = import.meta.vitest;

  describe("CubicMeterPerSecond", () => {
    it("is cubic meters per second", () => {
      assert<Equals<CubicMeterPerSecond, Divide<Cubic<Meter>, Second>>>();
    });
  });
}
