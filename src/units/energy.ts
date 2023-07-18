import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type EnergyUnitClass = SiUnitClass<{
  Kilograms: 1;
  Meters: 2;
  Seconds: -2;
}>;

export type Energy = AbstractUnitFrom<EnergyUnitClass>;

export type EnergyUnit<M extends Record<string, Exponent>> = UnitFrom<
  EnergyUnitClass,
  UnitMeta<M>
>;

/**
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 metre in the direction of the force.
 *
 * @siunit
 * @symbol `J`
 * @derived
 */
export type Joules = EnergyUnit<{}>;
export type NewtonMeter = Joules;
export type WattSeconds = Joules;

export type WattMinutes = EnergyUnit<{
  scalar60: 1;
}>;

export type WattHours = EnergyUnit<{
  scalar60: 2;
}>;

export type KiloWattHours = EnergyUnit<{
  scalar10: 3;
  scalar60: 2;
}>;
