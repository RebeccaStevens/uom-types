import {
  type AbstractUnit,
  type Unit,
  type UnitMeta,
  type Exponent,
} from "#uom-types";

import { type SiUnitClass } from "./si-unit";

export type IntensityUnitClass = SiUnitClass<{ Kilograms: 1; Seconds: -3 }>;

export type Intensity = AbstractUnit<IntensityUnitClass>;

export type IntensityUnit<M extends Record<string, Exponent>> = Unit<
  IntensityUnitClass,
  UnitMeta<M>
>;

/**
 * A unit of Intensity.
 *
 * @siunit
 * @derived
 */
export type WattsPerSquareMeter = IntensityUnit<{}>;
