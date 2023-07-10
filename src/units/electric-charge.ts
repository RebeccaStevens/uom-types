import { type SiUnit } from "./si-unit";

/**
 * One Coulomb is equal to the quantity of charge transferred in one second by a steady current of one Amperes.
 *
 * @siunit
 * @symbol `C`
 * @derived
 */
export type Coulombs = SiUnit<{ Amperes: 1; Seconds: 1 }>;
