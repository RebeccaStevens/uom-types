import { type SiUnit } from "./si-unit";

/**
 * One Ohm is equal to the resistance of a conductor in which a current of one Amperes is produced
 * by a potential of one volt across its terminals.
 *
 * @siunit
 * @symbol `Ω`
 * @derived
 */
export type Ohms = SiUnit<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -3;
  Amperes: -2;
}>;
