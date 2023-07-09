import { type Unit } from "#uom-types";

/**
 * One Lux is equal to one lumen per square meter.
 *
 * @symbol `lx`
 * @derived
 */
export type Luxes = Unit<{ Candela: 1; Meters: -2 }>;

/**
 * @symbol `cd/m²`
 * @derived
 */
export type CandelasPerSquareMeter = Unit<{ Candela: 1; Meters: -2 }>;
