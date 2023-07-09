import { type Unit } from "#uom-types";

/**
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one Amperes when the power dissipated between the points is one watt.
 *
 * @symbol `V`
 * @derived
 */
export type Volts = Unit<{ Kilograms: 1; Meters: 2; Seconds: -3; Amperes: -1 }>;
