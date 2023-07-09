import { type Unit } from "#uom-types";

/**
 * One Farad is equal to the capacitance of a capacitor having an equal and opposite charge of 1 coulomb on
 * each plate and a potential difference of 1 volt between the plates.
 *
 * @symbol `F`
 * @derived
 */
export type Farad = Unit<{
  Amperes: 2;
  Seconds: 4;
  Kilograms: -1;
  Meters: -2;
}>;
