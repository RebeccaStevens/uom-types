import { type Unit } from "#uom-types";

/**
 * A unit of velocity.
 *
 * @symbol `m/s`
 * @derived
 */
export type MetersPerSecond = Unit<{ Meters: 1; Seconds: -1 }>;
