import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type AccelerationUnitClass = SiUnitClass<{ Meters: 1; Seconds: -2 }>;

export type Acceleration = AbstractUnit<AccelerationUnitClass>;

export type AccelerationUnit<M extends Record<string, Exponent>> = Unit<
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
