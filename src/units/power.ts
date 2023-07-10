import { type SiUnit } from "./si-unit";

/**
 * The derived unit for power, radiant, flux.
 *
 * @siunit
 * @symbol `W`
 * @derived
 */
export type Watts = SiUnit<{ Kilograms: 1; Meters: 2; Seconds: -3 }>;
