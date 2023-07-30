import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type DurationUnitClass = SiUnitClass<{ Seconds: 1 }>;

export type Duration = AbstractUnitFrom<DurationUnitClass>;

export type DurationUnit<M extends UnitSubvalues> = DurationUnitFrom<
  UnitMeta<M>
>;

export type DurationUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  DurationUnitClass,
  M
>;

/**
 * A unit of time.
 *
 * @siunit
 * @symbol `s`
 */
export type Seconds = DurationUnit<{}>;

export type Minutes = DurationUnit<{ scalar60: 1 }>;
export type Hours = DurationUnit<{ scalar60: 2 }>;
export type Days = DurationUnit<{ scalar60: 2; scalar24: 1 }>;
export type Weeks = DurationUnit<{
  scalar60: 2;
  scalar24: 1;
  scalar7: 1;
}>;
export type Years = DurationUnit<{
  scalar60: 2;
  scalar24: 1;
  "scalar365.25": 1;
}>;
