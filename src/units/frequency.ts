import { type Unit } from "..";

import { type SiUnit } from "./si-unit";

/**
 * A unit of frequency equal to one cycle per second.
 *
 * @siunit
 * @symbol `Hz`
 * @derived
 */
export type Hertz = SiUnit<{ Seconds: -1 }>;
export type PerSecond = Hertz;

export type PerMinute = Unit<{ Seconds: -1; scalar60: -1 }>;
export type PerHour = Unit<{ Seconds: -1; scalar60: -2 }>;
export type PerDay = Unit<{ Seconds: -1; scalar60: -2; scalar24: -1 }>;
export type PerWeek = Unit<{
  Seconds: -1;
  scalar60: -2;
  scalar24: -1;
  scalar7: -1;
}>;
export type PerYear = Unit<{
  Seconds: -1;
  scalar60: -2;
  scalar24: -1;
  scalar365: -1;
}>;
