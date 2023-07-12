import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type VelocityUnitClass = SiUnitClass<{
  Meters: 1;
  Seconds: -1;
}>;

export type Velocity = AbstractUnit<VelocityUnitClass>;

export type VelocityUnit<M extends Record<string, Exponent>> = Unit<
  VelocityUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of velocity.
 *
 * @siunit
 * @symbol `m/s`
 * @derived
 */
export type MetersPerSecond = VelocityUnit<{}>;
