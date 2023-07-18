import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type FrequencyUnitClass = SiUnitClass<{ Seconds: -1 }>;

export type Frequency = AbstractUnit<FrequencyUnitClass>;

export type FrequencyUnit<M extends Record<string, Exponent>> = Unit<
  FrequencyUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of frequency equal to one cycle per second.
 *
 * @siunit
 * @symbol `Hz`
 * @derived
 */
export type Hertz = FrequencyUnit<{}>;
export type PerSecond = Hertz;

export type PerMinute = FrequencyUnit<{ scalar60: -1 }>;
export type PerHour = FrequencyUnit<{ scalar60: -2 }>;
export type PerDay = FrequencyUnit<{ scalar60: -2; scalar24: -1 }>;
export type PerWeek = FrequencyUnit<{
  scalar60: -2;
  scalar24: -1;
  scalar7: -1;
}>;
export type PerYear = FrequencyUnit<{
  scalar60: -2;
  scalar24: -1;
  scalar365: -1;
}>;