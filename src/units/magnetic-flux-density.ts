import { type Unit } from "#uom-types";

/**
 * One Tesla is equal equal to one weber per square meter.
 *
 * @symbol `T`
 * @derived
 */
export type Tesla = Unit<{
  Kilograms: 1;
  Seconds: -2;
  Amperes: -1;
}>;
