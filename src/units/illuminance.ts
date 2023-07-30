import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type IlluminanceUnitClass = SiUnitClass<{ Candelas: 1; Meters: -2 }>;

export type Illuminance = AbstractUnitFrom<IlluminanceUnitClass>;

export type IlluminanceUnit<M extends UnitSubvalues> = IlluminanceUnitFrom<
  UnitMeta<M>
>;

export type IlluminanceUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  IlluminanceUnitClass,
  M
>;

/**
 * One Lux is equal to one lumen per square meter.
 *
 * @siunit
 * @symbol `lx`
 * @derived
 */
export type Luxes = IlluminanceUnit<{}>;

/**
 * @siunit
 * @derived
 */
export type LumensPerSquareMeter = Luxes;

/**
 * @siunit
 * @symbol `cd/m²`
 * @derived
 */
export type CandelasPerSquareMeter = Luxes;
