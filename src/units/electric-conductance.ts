import { type SiUnit } from "./si-unit";

/**
 * One Siemens is equal to one Amperes per volt.
 *
 * @siunit
 * @symbol `S`
 * @derived
 */
export type Siemens = SiUnit<{
  Kilograms: -1;
  Meters: -2;
  Seconds: 3;
  Amperes: 2;
}>;
