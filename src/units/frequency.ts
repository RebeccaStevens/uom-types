import { type Unit } from "#uom-types";

/**
 * A unit of frequency equal to one cycle per second.
 *
 * @symbol `Hz`
 * @derived
 */
export type Hertz = Unit<{ Seconds: -1 }>;
export type PerSecond = Hertz;

export type PerMinute = Unit<{ Seconds: -1; magnitude60: -1 }>;
export type PerHour = Unit<{ Seconds: -1; magnitude60: -2 }>;
export type PerDay = Unit<{ Seconds: -1; magnitude60: -2; magnitude24: -1 }>;
export type PerWeek = Unit<{
  Seconds: -1;
  magnitude60: -2;
  magnitude24: -1;
  magnitude7: -1;
}>;
export type PerYear = Unit<{
  Seconds: -1;
  magnitude60: -2;
  magnitude24: -1;
  magnitude365: -1;
}>;
