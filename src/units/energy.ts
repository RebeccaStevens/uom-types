import { type Unit } from "#uom-types";

import { type SiUnit } from "./si-unit";

/**
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 metre in the direction of the force.
 *
 * @siunit
 * @symbol `J`
 * @derived
 */
export type Joules = SiUnit<{ Kilograms: 1; Meters: 2; Seconds: -2 }>;
export type NewtonMeter = Joules;
export type WattSeconds = Joules;

export type WattMinutes = Unit<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  scalar60: 1;
}>;

export type WattHours = Unit<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  scalar60: 2;
}>;

export type KiloWattHours = Unit<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  scalar60: 2;
  scalar10: 3;
}>;
