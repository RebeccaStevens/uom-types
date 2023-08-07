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

import { type SiUnitClass } from "../base-units";

import { type Gray, type Second } from ".";

/**
 * @group Unit Classes
 * @category Mechanical
 */
export type AbsorbedDoseRateUnitClass = SiUnitClass<{
  Metre: 2;
  Second: -3;
}>;

/**
 * @group Abstract Unit
 * @category Mechanical
 */
export type AbsorbedDoseRate = AbstractUnitFrom<AbsorbedDoseRateUnitClass>;

/**
 * @group Unit Creators
 * @category Mechanical
 */
export type AbsorbedDoseRateUnit<M extends UnitSubvalues> =
  AbsorbedDoseRateUnitFrom<UnitMeta<M>>;

/**
 * @group Unit Creators
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
// eslint-disable-next-line functional/no-conditional-statements
if (import.meta.vitest !== undefined) {
  assert<Equals<GrayPerSecond, Divide<Gray, Second>>>();
}
