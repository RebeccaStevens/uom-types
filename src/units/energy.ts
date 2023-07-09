import { type Unit } from "#uom-types";

/**
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 metre in the direction of the force.
 *
 * @symbol `J`
 * @derived
 */
export type Joules = Unit<{ Kilograms: 1; Meters: 2; Seconds: -2 }>;
export type NewtonMeter = Joules;
export type WattSeconds = Joules;

export type WattMinutes = Unit<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  magnitude60: 1;
}>;

export type WattHours = Unit<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  magnitude60: 2;
}>;

export type KiloWattHours = Unit<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
  magnitude60: 2;
  magnitude10: 3;
}>;
