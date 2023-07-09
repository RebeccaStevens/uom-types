import { type Unit } from "#uom-types";

/**
 * One Ohm is equal to the resistance of a conductor in which a current of one Amperes is produced
 * by a potential of one volt across its terminals.
 *
 * @symbol `Ω`
 * @derived
 */
export type Ohms = Unit<{ Kilograms: 1; Meters: 2; Seconds: -3; Amperes: -2 }>;
