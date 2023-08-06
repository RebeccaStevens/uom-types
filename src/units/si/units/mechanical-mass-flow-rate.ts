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
import { type Kilo } from "../modifiers";

import { type Gram, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type MassFlowRateUnitClass = SiUnitClass<{
  Kilogram: 1;
  Second: -1;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type MassFlowRate = AbstractUnitFrom<MassFlowRateUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type MassFlowRateUnit<M extends UnitSubvalues> = MassFlowRateUnitFrom<
  UnitMeta<M>
>;

/**
 * @group Unit Creators
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
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<KilogramPerSecond, DivideUnits<Kilo<Gram>, Second>>>();
}
