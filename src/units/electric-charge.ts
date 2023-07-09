import { type Unit } from "#uom-types";

/**
 * One Coulomb is equal to the quantity of charge transferred in one second by a steady current of one Amperes.
 *
 * @symbol `C`
 * @derived
 */
export type Coulombs = Unit<{ Amperes: 1; Seconds: 1 }>;
