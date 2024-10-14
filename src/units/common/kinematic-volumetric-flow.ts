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
import { type Cubic } from "../modifiers";

import { type Meter, type Second } from ".";

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
export type VolumetricFlowUnit<M extends UnitSubvalues> =
  VolumetricFlowUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlowUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  VolumetricFlowUnitClass,
  M
>;

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
