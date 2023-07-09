import { type Unit } from "#uom-types";

/**
 * A unit of area.
 *
 * @symbol `m²`
 * @derived
 */
export type SquareMeters = Unit<{ Meters: 2 }>;

/**
 * @symbol `ha`
 * @derived
 */
export type Hectare = Unit<{ Meters: 2; magnitude10: 4 }>;
