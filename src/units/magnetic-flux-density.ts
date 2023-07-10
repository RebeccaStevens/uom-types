import { type SiUnit } from "./si-unit";

/**
 * One Tesla is equal equal to one weber per square meter.
 *
 * @siunit
 * @symbol `T`
 * @derived
 */
export type Teslas = SiUnit<{
  Kilograms: 1;
  Seconds: -2;
  Amperes: -1;
}>;
