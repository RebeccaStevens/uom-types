import { type SiUnit } from "./si-unit";

/**
 * @siunit
 * @symbol `1/m`
 * @derived
 */
export type ReciprocalMeter = SiUnit<{ Meters: -1 }>;
