import { type SiUnit } from "./si-unit";

/**
 * A unit of volume.
 *
 * @siunit
 * @symbol `m³`
 * @derived
 */
export type CubicMeters = SiUnit<{ Meters: 3 }>;

/**
 * A unit of volume.
 *
 * @siunit
 * @symbol `cm³`
 * @derived
 */
export type CubicCentiMeters = SiUnit<{ Meters: 3; scalar10: -6 }>;

/**
 * A unit of volume.
 *
 * @siunit
 * @symbol `l`
 * @derived
 */
export type Liters = SiUnit<{ Meters: 3; scalar10: -3 }>;
