import { type Unit } from "#uom-types";

/**
 * A unit of volume.
 *
 * @symbol `m³`
 * @derived
 */
export type CubicMeters = Unit<{ Meters: 3 }>;

/**
 * A unit of volume.
 *
 * @symbol `cm³`
 * @derived
 */
export type CubicCentiMeters = Unit<{ Meters: 3; magnitude10: -6 }>;

/**
 * A unit of volume.
 *
 * @symbol `l`
 * @derived
 */
export type Liters = Unit<{ Meters: 3; magnitude10: -3 }>;
