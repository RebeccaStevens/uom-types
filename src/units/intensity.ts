import {
  type AbstractUnitFrom,
  type UnitSubvalues,
  type UnitFrom,
  type UnitMeta,
  type UnknownUnitMeta,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type IntensityUnitClass = SiUnitClass<{ Kilograms: 1; Seconds: -3 }>;

export type Intensity = AbstractUnitFrom<IntensityUnitClass>;

export type IntensityUnit<M extends UnitSubvalues> = IntensityUnitFrom<
  UnitMeta<M>
>;

export type IntensityUnitFrom<M extends UnknownUnitMeta> = UnitFrom<
  IntensityUnitClass,
  M
>;

/**
 * A unit of Intensity.
 *
 * @siunit
 * @derived
 */
export type WattsPerSquareMeter = IntensityUnit<{}>;
