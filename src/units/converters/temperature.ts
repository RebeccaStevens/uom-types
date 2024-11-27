import type { Celsius, Kelvin } from "../common/index.ts";

/**
 * Convert {@link Celsius} to {@link Kelvin}.
 */
export function celsiusToKelvin(temperature: Celsius): Kelvin {
  return (temperature - 273.15) as Kelvin;
}

/**
 * Convert {@link Kelvin} to {@link Celsius}.
 */
export function kelvinToCelsius(temperature: Kelvin): Celsius {
  return (temperature + 273.15) as Celsius;
}
