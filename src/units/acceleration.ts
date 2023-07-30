import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type AccelerationUnitClass = SiUnitClass<{ Meters: 1; Seconds: -2 }>;

export type Acceleration = AbstractUnitFrom<AccelerationUnitClass>;

export type AccelerationUnit<M extends UnitSubvalues> = AccelerationUnitFrom<
  UnitMeta<M>
>;

export type AccelerationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  AccelerationUnitClass,
  M
>;

/**
 * A unit of acceleration.
 *
 * @siunit
 * @symbol `m/s²`
 * @derived
 */
export type MetersPerSecondPerSecond = AccelerationUnit<{}>;

/**
 * A unit of acceleration.
 *
 * @siunit
 * @symbol `m/s²`
 * @derived
 */
export type MetersPerSecondSquared = MetersPerSecondPerSecond;
