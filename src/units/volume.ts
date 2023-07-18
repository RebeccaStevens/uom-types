import {
  type AbstractUnitFrom,
  type Exponent,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type VolumeUnitClass = SiUnitClass<{
  Meters: 3;
}>;

export type Volume = AbstractUnitFrom<VolumeUnitClass>;

export type VolumeUnit<M extends Record<string, Exponent>> = VolumeUnitFrom<
  UnitMeta<M>
>;

export type VolumeUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  VolumeUnitClass,
  M
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
