import { type SiUnit } from "./si-unit";

/**
 * One Lux is equal to one lumen per square meter.
 *
 * @siunit
 * @symbol `lx`
 * @derived
 */
export type Luxes = SiUnit<{ Candelas: 1; Meters: -2 }>;

/**
 * @siunit
 * @symbol `cd/m²`
 * @derived
 */
export type CandelasPerSquareMeter = SiUnit<{ Candelas: 1; Meters: -2 }>;
