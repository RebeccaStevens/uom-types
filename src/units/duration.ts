import { type Unit } from "#uom-types";

import { type SiUnit } from "./si-unit";

/**
 * A unit of time.
 *
 * @siunit
 * @symbol `s`
 */
export type Seconds = SiUnit<{ Seconds: 1 }>;

export type Minutes = Unit<{ Seconds: 1; scalar60: 1 }>;
export type Hours = Unit<{ Seconds: 1; scalar60: 2 }>;
export type Days = Unit<{ Seconds: 1; scalar60: 2; scalar24: 1 }>;
export type Weeks = Unit<{
  Seconds: 1;
  scalar60: 2;
  scalar24: 1;
  scalar7: 1;
}>;
export type Years = Unit<{
  Seconds: 1;
  scalar60: 2;
  scalar24: 1;
  "scalar365.25": 1;
}>;
