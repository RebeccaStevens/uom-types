import { type SiUnit } from "./si-unit";

/**
 * Unit for thermal conductivity.
 *
 * @siunit
 * @derived
 */
export type WattsPerMeterPerKelvin = SiUnit<{
  Kilograms: 1;
  Meters: 1;
  Seconds: -3;
  Kelvin: -1;
}>;
