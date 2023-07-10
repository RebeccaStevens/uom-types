import { type SiUnit } from "./si-unit";

/**
 * A unit of acceleration.
 *
 * @siunit
 * @symbol `m/s²`
 * @derived
 */
export type MetersPerSecondPerSecond = SiUnit<{
  Meters: 1;
  Seconds: -2;
}>;

/**
 * A unit of acceleration.
 *
 * @siunit
 * @symbol `m/s²`
 * @derived
 */
export type MetersPerSecondSquared = MetersPerSecondPerSecond;
