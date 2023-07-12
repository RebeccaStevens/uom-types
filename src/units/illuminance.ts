import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type IlluminanceUnitClass = SiUnitClass<{ Candelas: 1; Meters: -2 }>;

export type Illuminance = AbstractUnit<IlluminanceUnitClass>;

export type IlluminanceUnit<M extends Record<string, Exponent>> = Unit<
  IlluminanceUnitClass,
  UnitMeta<M>
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
