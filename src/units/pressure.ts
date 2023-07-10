import { type SiUnit } from "./si-unit";

/**
 * One pascal is equal to one newton per square meter.
 *
 * @siunit
 * @symbol `Pa`
 * @derived
 */
export type Pascals = SiUnit<{ Kilograms: 1; Meters: -1; Seconds: -2 }>;
