import { type Unit } from "#uom-types";

/**
 * One pascal is equal to one newton per square meter.
 *
 * @symbol `Pa`
 * @derived
 */
export type Pascals = Unit<{ Kilograms: 1; Meters: -1; Seconds: -2 }>;
