// eslint-disable-next-line import/no-extraneous-dependencies
import { assert, type Equals } from "tsafe";

import {
  type DivideUnits,
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "../base-units";

import { type CubicMetre, type Second } from ".";

/**
 * @group Unit Classes
 * @category Kinematic
 */
export type VolumetricFlowUnitClass = SiUnitClass<{
  Metre: 3;
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
export type CubicMetrePerSecond = VolumetricFlowUnit<{}>;

// Tests
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<CubicMetrePerSecond, DivideUnits<CubicMetre, Second>>>();
}
