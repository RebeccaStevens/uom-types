import { type Unit } from "#uom-types";

/**
 * A unit of density.
 *
 * @symbol `kg/m³`
 * @derived
 */
export type KilogramsPerCubicMeter = Unit<{ Kilograms: 1; Meters: -3 }>;

/**
 * A unit of surface density.
 *
 * @symbol `kg/m²`
 * @derived
 */
export type KilogramsPerSquareMeter = Unit<{ Kilograms: 1; Meters: -2 }>;
