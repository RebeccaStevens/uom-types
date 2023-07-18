import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type AccelerationUnitClass = SiUnitClass<{ Meters: 1; Seconds: -2 }>;

export type Acceleration = AbstractUnitFrom<AccelerationUnitClass>;

export type AccelerationUnit<M extends Record<string, Exponent>> = UnitFrom<
  AccelerationUnitClass,
  UnitMeta<M>
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
