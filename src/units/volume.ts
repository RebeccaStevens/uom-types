import {
  type AbstractUnitFrom,
  type UnitFrom,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type VolumeUnitClass = SiUnitClass<{
  Meters: 3;
}>;

export type Volume = AbstractUnitFrom<VolumeUnitClass>;

export type VolumeUnit<M extends Record<string, Exponent>> = UnitFrom<
  VolumeUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of volume.
 *
 * @siunit
 * @symbol `m³`
 * @derived
 */
export type CubicMeters = VolumeUnit<{}>;

/**
 * A unit of volume.
 *
 * @siunit
 * @symbol `cm³`
 * @derived
 */
export type CubicCentiMeters = VolumeUnit<{ scalar10: -6 }>;

/**
 * A unit of volume.
 *
 * @siunit
 * @symbol `l`
 * @derived
 */
export type Liters = VolumeUnit<{ scalar10: -3 }>;
