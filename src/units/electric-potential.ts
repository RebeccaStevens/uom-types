import { type SiUnit } from "./si-unit";

/**
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one Amperes when the power dissipated between the points is one watt.
 *
 * @siunit
 * @symbol `V`
 * @derived
 */
export type Volts = SiUnit<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -3;
  Amperes: -1;
}>;
