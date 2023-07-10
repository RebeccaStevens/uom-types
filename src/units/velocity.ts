import { type SiUnit } from "./si-unit";

/**
 * A unit of velocity.
 *
 * @siunit
 * @symbol `m/s`
 * @derived
 */
export type MetersPerSecond = SiUnit<{ Meters: 1; Seconds: -1 }>;
