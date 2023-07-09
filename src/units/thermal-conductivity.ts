import { type Unit } from "#uom-types";

/**
 * Unit for thermal conductivity.
 *
 * @derived
 */
export type WattsPerMeterPerKelvin = Unit<{
  Kilograms: 1;
  Meters: 1;
  Seconds: -3;
  Kelvin: -1;
}>;
