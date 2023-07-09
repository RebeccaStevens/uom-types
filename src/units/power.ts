import { type Unit } from "#uom-types";

/**
 * The derived unit for power, radiant, flux.
 *
 * @symbol `W`
 * @derived
 */
export type Watts = Unit<{ Kilograms: 1; Meters: 2; Seconds: -3 }>;
