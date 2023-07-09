import { type Unit } from "#uom-types";

/**
 * One Siemens is equal to one Amperes per volt.
 *
 * @symbol `S`
 * @derived
 */
export type Siemens = Unit<{
  Kilograms: -1;
  Meters: -2;
  Seconds: 3;
  Amperes: 2;
}>;
