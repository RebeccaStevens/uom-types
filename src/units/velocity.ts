import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type VelocityUnitClass = SiUnitClass<{
  Meters: 1;
  Seconds: -1;
}>;

export type Velocity = AbstractUnitFrom<VelocityUnitClass>;

export type VelocityUnit<M extends UnitSubvalues> = VelocityUnitFrom<
  UnitMeta<M>
>;

export type VelocityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  VelocityUnitClass,
  M
>;

/**
 * A unit of velocity.
 *
 * @siunit
 * @symbol `m/s`
 * @derived
 */
export type MetersPerSecond = VelocityUnit<{}>;
