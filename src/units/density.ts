import { type SiUnit } from "./si-unit";

/**
 * A unit of density.
 *
 * @siunit
 * @symbol `kg/m³`
 * @derived
 */
export type KilogramsPerCubicMeter = SiUnit<{ Kilograms: 1; Meters: -3 }>;

/**
 * A unit of surface density.
 *
 * @siunit
 * @symbol `kg/m²`
 * @derived
 */
export type KilogramsPerSquareMeter = SiUnit<{ Kilograms: 1; Meters: -2 }>;
