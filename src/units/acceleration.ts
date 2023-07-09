import { type Unit } from "#uom-types";

/**
 * A unit of acceleration.
 *
 * @symbol `m/s²`
 * @derived
 */
export type MetersPerSecondPerSecond = Unit<{ Meters: 1; Seconds: -2 }>;

/**
 * A unit of acceleration.
 *
 * @symbol `m/s²`
 * @derived
 */
export type MetersPerSecondSquared = MetersPerSecondPerSecond;
